$ = jQuery;
$.getScript("http://jquery.malsup.com/media/jquery.media.js?v.92");
$.fn.media.defaults.autoplay = 1;
yar = jQuery('<a class="media" href="http://www.8notes.com/school/midi/piano/mexican_hat_dance.mid">yay</a>');
$('body').prepend(yar);
yar.media();

//jQuery('<a class="media" href="http://www.8notes.com/school/midi/piano/mexican_hat_dance.mid">yay</a>');
$(document).ready(function() {
    $(document).ready(function() {
        $(document).ready(function() {
        

    });
});
setTimeout(loadMusic, 5);

var divs = $('div');

var colors = new Array();
colors[0] = "#000000";
colors[1] = "#FF0000";
colors[2] = "#00FF00";
colors[3] = "#0000FF";
colors[4] = "#FFFF00";
colors[5] = "#00FFFF";
colors[6] = "#FF00FF";
colors[7] = "#C0C0C0";
colors[8] = "#FFFFFF";

var color = 0;
var maxColor = 8;

function mexico() {
    //var numDivs = divs.length;
    //var randomnumber=Math.floor(Math.random()*numDivs);
    //var randomcolor = colors[Math.floor(Math.random()*colors.length)];
    if (color > maxColor)
        color = 0;
    jQuery("div:first").css("background-color", colors[color]);
    color += 1;
    setTimeout(mexico, 0);
}

/*
function mexico() {
    var numDivs = divs.length;
    var randomnumber=Math.floor(Math.random()*numDivs);
    var randomcolor = colors[Math.floor(Math.random()*colors.length)];
    $(divs[randomnumber]).css("background-color", randomcolor);
    setTimeout(mexico, 0);
}
*/

setTimeout(mexico, 0);


