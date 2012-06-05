var S = {CANVAS: "#blobs"};
var WIDTH = 640;
var HEIGHT = 480;
var INTERVAL = 15;
var HORIZONTAL_OFFSET = 0;
var VERTICAL_OFFSET = 0;
var TOTAL_DELTA = 0;
var POINT = {};
POINT.X = 50;
POINT.Y = 50;
POINT.DISPLAY = true;
var ctx = "derp";
var canvas = "null";
var grid = "derpderpderp";
var dragging = false;

// new vars from 
// http://stackoverflow.com/questions/2916081/zoom-in-on-a-point-using-scale-and-translate
var originx = 0;
var originy = 0;
var scale = 1;
var mousex, mousey;

var first = "asdf";
var xLast;
var yLast;


// How are we going to organize the data?
/* var squares = [];
 * horizontal vs vertical
 * tracks organized by origin/ending point/vertical vs horizontal
 * tracks should be in order they are displayed
 * 
 * How are we going to compute intersections with circley things?
 * Each track should have a list of circly things it intersects with and at what points.
 *
 * When you zoom out, the track needs to expand & new squares must be created to fill the gap
 * When you zoom in, the track needs to collapse & squares must be removed
 * 40 squares per 1680 ish/1050ish
 *
 * Tracks will not be created and deleted as you zoom in and out. we'll just repeat them.
 *
 * Often, tracks won't need to be drawn depending on how zoomed in they are.
 * 
 * Each square must be checked every turn to see if it's colliding with a spinny thingy. If it is, 
 *
 * track = {}
 * track.squares = []
 * track.orient = H or track.orient = V; H = 0, V = 1
 * track.length = WIDTH or HEIGHT depending on track.orient
 *
 * square = {};
 * square.d = 0.0; // value from 0 to length describing where the square is currently.
 * track.squares[0] = square;
 * track
 *
 *
 * EDIT:
 * Maybe when we translate, we have to update all the squares positions..
 */


var t = new Transform();

function range(start, end, interval) {
  if (interval == undefined)
    interval = 1;
  if (end == undefined) {
    end = start;
    start = 0;
  }
  var result = [];
  for (var i = start; i < end; i += interval) {
    result.push(i);
  }
  return result;
};


var m;

var ix1;
var iy1;
var ix2;
var iy2;
var dix;
var diy;

var h;
var v;

var x1, y1, x2, y2;

var bx1;
var by1;
var bx2;
var by2;

function computeTransform() {
  m = t.m;

  ix1 = 0 * m[0] + 0 * m[2] + m[4];
  iy1 = 0 * m[1] + 0 * m[3] + m[5];
  ix2 = INTERVAL * m[0] + INTERVAL * m[2] + m[4];
  iy2 = INTERVAL * m[1] + INTERVAL * m[3] + m[5];
  dix = ix2 - ix1; // lol.
  diy = iy2 - iy1;

  h = HORIZONTAL_OFFSET;
  v = VERTICAL_OFFSET;

  x1 = y1 = 0;
  x1 += h;
  y1 += v;

  x2 = WIDTH;
  x2 += h;

  y2 = HEIGHT;
  y2 += v;

  bx1 = x1 * m[0] + y1 * m[2] + m[4];
  by1 = x1 * m[1] + y1 * m[3] + m[5];
  bx2 = x2 * m[0] + y2 * m[2] + m[4];
  by2 = x2 * m[1] + y2 * m[3] + m[5];
};

function mainLoop() {
  // clear the canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  computeTransform();

  drawGrid();
  drawSquares();
  drawRotSquares();
  setTimeout("mainLoop()", 30);
};

var rotSquares = [];
function createRotSquares() {
  computeTransform();
  var x = 10*dix; // lol

  var last = 1;
  // solve an N queens problem to place the circular things in different places on the map
  // and no two queens are less than 2 * 10 * dix away from each other
  // also, draw the intersecting lines darker where there is a queen
  // if a square intersects with a queen, it needs to join the queen's circle and then displace a square in the circle
  // the displaced square goes into a random direction from where it started.
  // we need all size squares traversing the entire map
  // an effect needs to happen when a square intersects with a queen
  // Maybe I'll call them cities, or websites..
  // and maybe there'll be really big ones too!
  // maybe it could be some kind of browser game where people place queens in strategic positions to maximize the number of squares they circumcise
  $.each(range(10*diy, HEIGHT, 10*diy), function(i, val) {
    var color = randColor();
    for (var j = 0; j < 10; j++) {
      var square = {};
      square.x = x;
      square.y = val - 30;
      square.cx = x; // center x
      square.cy = val; // center y
      square.speed = Math.random()/2;
      square.speed *= last;
      last *= -1;
      square.totalAngle = 0;
      //if (square.speed < 2)
        //square.speed = 2;
      square.width = Math.random() * 10;
      if (square.width < 2)
        square.width = 2;

      square.width = getWidth() * 2;
      square.color = randColor();
      rotSquares.push(square);
    }

    for (var j = 0; j < 10; j++) {
      var square = {};
      square.x = x;
      square.y = val - 65;
      square.cx = x; // center x
      square.cy = val; // center y
      square.speed = Math.random()/2;
      square.speed *= last;
      last *= -1;
      square.totalAngle = 0;
      //if (square.speed < 2)
        //square.speed = 2;
      square.width = Math.random() * 10;
      if (square.width < 5)
        square.width = 5;

      square.color = randColor();
      rotSquares.push(square);
    }

    for (var j = 0; j < 10; j++) {
      var square = {};
      square.x = x;
      square.y = val - 100;
      square.cx = x; // center x
      square.cy = val; // center y
      square.speed = Math.random()/2;
      square.speed *= last;
      last *= -1;
      square.totalAngle = 0;
      //if (square.speed < 2)
        //square.speed = 2;
      square.width = Math.random() * 20;
      if (square.width < 8)
        square.width = 8;
      square.color = randColor();
      rotSquares.push(square);
    }

    x += 2 * 10 * dix;
  });
};

// e ^ (i*pi) + 1 = 0?
function drawRotSquares() {
  for (var i = 0; i < rotSquares.length; i++) {
    rotSquares[i].totalAngle += rotSquares[i].speed;
    var c = Math.cos(rotSquares[i].totalAngle);
    var s = Math.sin(rotSquares[i].totalAngle);
    var transX = rotSquares[i].cx - rotSquares[i].x;
    var transY = rotSquares[i].cy - rotSquares[i].y;
    var x = transX * c - transY * s;
    var y = transX * s + transY * c;
    x += rotSquares[i].cx;
    y += rotSquares[i].cy;
    ctx.fillStyle = rotSquares[i].color;
    ctx.fillRect(bx1 + x, by1 + y, rotSquares[i].width, rotSquares[i].width);
  }
}

var colors = [];
colors[0] = "#800517"; // dark red
colors[1] = "#41627e"; // dark blue
colors[2] = "#fdd017"; // dark yellow
colors[3] = "green";

var hexChars = {};
hexChars[0] = "0";
hexChars[1] = "1";
hexChars[2] = "2";
hexChars[3] = "3";
hexChars[4] = "4";
hexChars[5] = "5";
hexChars[6] = "6";
hexChars[7] = "7";
hexChars[8] = "8";
hexChars[9] = "9";
hexChars[10] = "A";
hexChars[11] = "B";
hexChars[12] = "C";
hexChars[13] = "D";
hexChars[14] = "E";
hexChars[15] = "F";

function randColor() {
/*
  if (randColor.last == undefined) {
    randColor.last = 0;
  }
  randColor.last += 1;
  if (randColor.last > 3)
    randColor.last = 0;

  return colors[randColor.last];
  */

  var r = parseInt(Math.random() * 16);
  var g = parseInt(Math.random() * 16);
  var b = parseInt(Math.random() * 16);
  return "#" + hexChars[r] + hexChars[g] + hexChars[b];
}

function getWidth() {
  var width = Math.random() * 4;
  if (width < 2)
    width = 2;
  if (Math.random() * 20 > 19.5)
    width = 7;
  return width;
}

var squares = {};
squares.h = [];
squares.v = [];
function createSquares() {
  computeTransform();

  var i = 0;
  // create horizontal squares
  $.each(range(by1, HEIGHT, diy), function(i, val) {
    i++;
    var last = 1;
    var color = randColor();
    var track = [];
    for (var j = 0; j < 40; j++) {
      var square = {};

      square.width = getWidth();

      square.x = Math.random() * WIDTH;
      square.y = val;

      square.xvel = Math.random() * 15;

      if (square.xvel < 2)
        square.xvel = 2;

      square.xvel *= last;
      last *= -1;

      square.yvel = 0;

      square.color = color;
      track.push(square);
    }
    squares.h.push(track);
  });
  i = 0;

  // create vertical squares
  $.each(range(bx1, WIDTH, dix), function(i, val) {
    i++;
    var last = 1;
    var color = randColor();
    var track = [];
    for (var j = 0; j < 40; j++) {
      var square = {};
      square.width = Math.random() * 4;
      if (square.width < 2)
        square.width = 2;
      if (Math.random() * 20 > 19.5)
        square.width = 7;

      square.x = val;
      square.y = Math.random() * HEIGHT;

      square.xvel = 0;
      square.yvel = Math.random() * 15;
      if (square.yvel < 2)
        square.yvel = 2;

      square.yvel *= last;
      last *= -1;

      square.color = color;
      track.push(square);
    }
    squares.v.push(track);
  });

  // SAVE!!
  // these don't get executed unless we've zoomed a bit
  /*
  for (var val = by1; val > 0; val -= diy) {
    var square = {};
    square.x = Math.random() * WIDTH;
    square.y = val;
    square.width = Math.random() * 9;
    if (square.width < 8.5)
      square.width = 2;
    square.xvel = square.width * 2;
    square.yvel = 0;
    if (Math.random() > .5)
      square.xvel *= -1;
    if (square.width > 5)
      square.xvel *= 2;
    square.color = "FF0000";
    squares.push(square);
  };

  for (var val = bx1; val > 0; val -= dix) {
    var square = {};
    square.x = val;
    square.y = Math.random() * HEIGHT;
    square.width = Math.random() * 7;
    square.xvel = 0;
    square.yvel = square.width * 9;
    if (square.width < 8.5)
      square.width = 2;
    if (square.width > 5)
      square.yvel *= 2;
    if (Math.random() > .5)
      square.yvel *= -1;
    square.color = "00FF00";
    squares.push(square);
  };
  */
};

function drawSquares() {
  // horizontal square scome first
  var last = 0;
  for (var val = by1; val < HEIGHT; val += diy) {
    var y = val;
    var i = last++;
    ctx.fillStyle = squares.h[i][0].color;
    for (var j = 0; j < squares.h[i].length; j++) {
      ctx.fillRect(squares.h[i][j].x, y, squares.h[i][j].width, squares.h[i][j].width);
      squares.h[i][j].x += squares.h[i][j].xvel;
      if (bx1 + squares.h[i][j].x < 0) squares.h[i][j].x = bx1 + WIDTH;
      if (bx1 + squares.h[i][j].x > bx1 + WIDTH) squares.h[i][j].x = 0;
    }
    last = last % 40;
  };

  for (var val = by1; val > 0; val -= diy) {
    var y = val;
    var i = last++;
    ctx.fillStyle = squares.h[i][0].color;
    for (var j = 0; j < squares.h[i].length; j++) {
      ctx.fillRect(squares.h[i][j].x, y, squares.h[i][j].width, squares.h[i][j].width);
      squares.h[i][j].x += squares.h[i][j].xvel;
      if (bx1 + squares.h[i][j].x < 0) squares.h[i][j].x = bx1 + WIDTH;
      if (bx1 + squares.h[i][j].x > bx1 + WIDTH) squares.h[i][j].x = 0;
    }
    last = last % 40;
  };

  // then the vertical squares
  
  last = 0;
  for (var val = bx1; val < WIDTH; val += dix) {
    var x = val;
    var i = last++;
    ctx.fillStyle = squares.v[i][0].color;
    for (var j = 0; j < squares.v[i].length; j++) {
      ctx.fillRect(x, squares.v[i][j].y, squares.v[i][j].width, squares.v[i][j].width);
      squares.v[i][j].y += squares.v[i][j].yvel;
      if (by1 + squares.v[i][j].y < 0) squares.v[i][j].y = by1 + HEIGHT;
      if (by1 + squares.v[i][j].y > by1 + HEIGHT) squares.v[i][j].y = 0;
    }
    last = last % 40;
  };

  for (var val = bx1; val > 0; val -= dix) {
    var x = val;
    var i = last++;
    ctx.fillStyle = squares.v[i][0].color;
    for (var j = 0; j < squares.v[i].length; j++) {
      ctx.fillRect(x, squares.v[i][j].y, squares.v[i][j].width, squares.v[i][j].width);
      squares.v[i][j].y += squares.v[i][j].yvel;
      if (by1 + squares.v[i][j].y < 0) squares.v[i][j].y = by1 + HEIGHT;
      if (by1 + squares.v[i][j].y > by1 + HEIGHT) squares.v[i][j].y = 0;
    }

    last = last % 40;
  };

  /*
  var last = 0;
  for (var i = 0; i < squares.h.length; i++) {
    var y = squares.h[i][0].y;
    ctx.fillStyle = squares.h[i][0].color;
    for (var j = 0; j < squares.h[i].length; j++) {
      //ctx.fillStyle = squares.h[i][j].color;
      //ctx.fillRect(squares.h[i][j].x-squares.h[i][j].width/2, squares.h[i][j].y-squares.h[i][j].width/2, squares.h[i][j].width, squares.h[i][j].width);
      ctx.fillRect(bx1 + squares.h[i][j].x, by1 + y, squares.h[i][j].width, squares.h[i][j].width);
      squares.h[i][j].x += squares.h[i][j].xvel;
      //squares.h[i][j].y += squares.h[i][j].yvel;
      if (squares.h[i][j].x < 0) squares.h[i][j].x = WIDTH;
      if (squares.h[i][j].x > WIDTH) squares.h[i][j].x = 0;
      //if (squares.h[i][j].y < 0) squares.h[i][j].y = HEIGHT;
      //if (squares.h[i][j].y > HEIGHT) squares.h[i][j].y = 0;

      // check if each square has collided with one of the rotating things
      // if so, rotate it's velocity by 90 degrees & change it's color
      // also, mark that it is being changed somehow
    }
  }
  */

  /*
  for (var i = 0; i < squares.v.length; i++) {
    var x = squares.v[i][0].x;
    ctx.fillStyle = squares.v[i][0].color;
    for (var j = 0; j < squares.v[i].length; j++) {
      //ctx.fillStyle = squares.v[i][j].color;
      //ctx.fillRect(squares.v[i][j].x-squares.v[i][j].width/2, squares.v[i][j].y-squares.v[i][j].width/2, squares.v[i][j].width, squares.v[i][j].width);
      ctx.fillRect(bx1 + x, by1 + squares.v[i][j].y, squares.v[i][j].width, squares.v[i][j].width);
      //squares.v[i][j].x += squares.v[i][j].xvel;
      squares.v[i][j].y += squares.v[i][j].yvel;
      //if (squares.v[i][j].x < 0) squares.v[i][j].x = WIDTH;
      //if (squares.v[i][j].x > WIDTH) squares.v[i][j].x = 0;
      if (squares.v[i][j].y < 0) squares.v[i][j].y = HEIGHT;
      if (squares.v[i][j].y > HEIGHT) squares.v[i][j].y = 0;

      // check if each square has collided with one of the rotating things
      // if so, rotate it's velocity by 90 degrees & change it's color
      // also, mark that it is being changed somehow
    }
  }*/


};

function drawGrid() {
  // draw gray lines
  ctx.beginPath();
  ctx.strokeStyle = "e0e0e0";
  ctx.strokeWidth = 1;

  for (var val = by1; val < HEIGHT; val += diy) {
    ctx.moveTo(0, val+.5);
    ctx.lineTo(WIDTH, val+.5);
  };

  for (var val = bx1; val < WIDTH; val += dix) {
    ctx.moveTo(val + .5, 0);
    ctx.lineTo(val + .5, HEIGHT);
  };

  for (var val = by1; val > 0; val -= diy) {
    ctx.moveTo(0, val);
    ctx.lineTo(WIDTH, val);
  };

  for (var val = bx1; val > 0; val -= dix) {
    ctx.moveTo(val, 0);
    ctx.lineTo(val, HEIGHT);
  };

  ctx.closePath();
  ctx.stroke();

  // draw black lines
  ctx.beginPath(); 
  ctx.strokeStyle = "b0b0b0";
  ctx.strokeWidth = 1;


  for (var val = by1; val < HEIGHT; val += 10*diy) {
    ctx.moveTo(0, val + .5);
    ctx.lineTo(WIDTH, val + .5);
  };

  for (var val = bx1; val < WIDTH; val += 10*dix) {
    ctx.moveTo(val + .5, 0);
    ctx.lineTo(val + .5, HEIGHT);
  };

  for (var val = by1; val > 0; val -= 10*diy) {
    ctx.moveTo(0, val);
    ctx.lineTo(WIDTH, val);
  };

  for (var val = bx1; val > 0; val -= 10*dix) {
    ctx.moveTo(val, 0);
    ctx.lineTo(val, HEIGHT);
  };

  ctx.closePath();
  ctx.stroke();

  ctx.save();
};

$(document).ready(function () {
  canvas = $(S.CANVAS)[0];
  ctx = canvas.getContext("2d");
  HEIGHT = $(window).height();
  WIDTH = ($(window).width() - 0);
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  xLast = yLast = x1 = y1 = 400;
  x2 = WIDTH-400;
  y2 = HEIGHT-400;
  createSquares();
  createRotSquares();

  $(S.CANVAS).mousemove(function (e) {
    var x, y;

    if (first == "asdf") {
      first = false;
      xLast = (e.pageX - e.target.offsetLeft);
      yLast = (e.pageY - e.target.offsetTop);
    }

    if (dragging == true) {
      x = (e.pageX - e.target.offsetLeft);
      y = (e.pageY - e.target.offsetTop);

      var ox, oy;
      ox = (x - xLast)/scale;
      oy = (y - yLast)/scale;

      for (var i = 0; i < squares.v.length; i++) {
        for (var j = 0; j < squares.v[i].length; j++) {
          squares.v[i][j].x += ox;
          squares.v[i][j].y += oy;

          if (squares.v[i][j].y < 0) squares.v[i][j].y = by2;
          if (squares.v[i][j].y > by2) squares.v[i][j].y = 0;

          squares.v[i][j].y += squares.v[i][j].yvel;
        }
      }

      for (var i = 0; i < squares.h.length; i++) {
        for (var j = 0; j < squares.h[i].length; j++) {
          squares.h[i][j].x += ox;
          squares.h[i][j].y += oy;

          if (squares.h[i][j].x < 0) squares.h[i][j].x = bx2;
          if (squares.h[i][j].x > bx2) squares.h[i][j].x = 0;

          squares.h[i][j].x += squares.h[i][j].xvel;
        }
      }

      HORIZONTAL_OFFSET += ox;
      VERTICAL_OFFSET += oy;

      //drawGrid();

      xLast = (e.pageX - e.target.offsetLeft);
      yLast = (e.pageY - e.target.offsetTop);
    };

    xLast = (e.pageX - e.target.offsetLeft);
    yLast = (e.pageY - e.target.offsetTop);
  });
  drawGrid();

  /*
  $(document).keydown(function (e) {
    if (e.keyCode == 37) { 
      HORIZONTAL_OFFSET = (HORIZONTAL_OFFSET - 1);
      if (HORIZONTAL_OFFSET > INTERVAL) { 
        HORIZONTAL_OFFSET = (HORIZONTAL_OFFSET % INTERVAL);
      };
    };

    if (e.keyCode == 39) { 
      HORIZONTAL_OFFSET = (HORIZONTAL_OFFSET + 1);
      if (HORIZONTAL_OFFSET > INTERVAL) { 
        HORIZONTAL_OFFSET = (HORIZONTAL_OFFSET % INTERVAL);
      };
    };

    if (e.keyCode == 38) { 
      VERTICAL_OFFSET = (VERTICAL_OFFSET - 1);
      if (VERTICAL_OFFSET > INTERVAL) { 
        VERTICAL_OFFSET = (VERTICAL_OFFSET % INTERVAL);
      };
    };

    if (e.keyCode == 40) { 
      VERTICAL_OFFSET = (VERTICAL_OFFSET + 1);
      if (VERTICAL_OFFSET > INTERVAL) { 
        VERTICAL_OFFSET = (VERTICAL_OFFSET % INTERVAL);
      };
    };

    drawGrid();
  });
  */

  $(S.CANVAS).click(function (e) {
    POINT.DISPLAY = true;
    POINT.X = (e.pageX - e.target.offsetLeft);
    POINT.Y = (e.pageY - e.target.offsetTop);
    drawGrid();
  });

  $(S.CANVAS).mousedown(function (e) {
    dragging = true;
  });

  $(S.CANVAS).mouseup(function (e) {
    dragging = false;
  });

  $(S.CANVAS).mousewheel(function (objEvent, intDelta) {
    mousex = objEvent.clientX - canvas.offsetLeft;
    mousey = objEvent.clientY - canvas.offsetTop;

    //var wheel = objEvent.wheelDelta/120;//n or -n
    var wheel = intDelta/120;//n or -n

    var zoom = 1 + wheel/2;

    t.translate(originx, originy);
    t.scale(zoom,zoom);
    t.translate(
        -( mousex / scale + originx - mousex / ( scale * zoom ) ),
        -( mousey / scale + originy - mousey / ( scale * zoom ) )
    );

    //drawGrid();

    originx = ( mousex / scale + originx - mousex / ( scale * zoom ) );
    originy = ( mousey / scale + originy - mousey / ( scale * zoom ) );

    scale *= zoom;
  });

  $(window).resize(function () {
    HEIGHT = $(window).height();
    WIDTH = $(window).width() - 0;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    //drawGrid();
  });

  setTimeout("mainLoop()", 30);
});


