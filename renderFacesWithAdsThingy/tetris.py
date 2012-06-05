import sys
import random
import pdb

import pygame
from pygame.locals import *

import pickle

import gimages

pygame.init()

class Piece:
    x = 0
    y = 0
    grid = None
    def __init__(self, x=None, y=None, fill=None):
        self.grid = create_grid(x, y, fill)
        self.x = x
        self.y = y


    def __getitem__(self, x):
        if x > grid.x:
            pdb.set_trace()
        else:
            return self.grid[x]

size = width, height = 800,600 
white = 255, 255, 255

screen = pygame.display.set_mode(size, pygame.DOUBLEBUF | pygame.HWSURFACE)

def create_grid(x, y, fill=None):
    grid = []
    for i in range(x):
        grid.append(range(y))

    for x in range(len(grid)):
        for y in range(len(grid[i])):
            grid[x][y] = fill

    return grid

# a grid which contains an integer representing each file. -1 means blank
x = 80
y = 60
grid = Piece(x, y)

# integers in grid correspond to files in a list
images = []
filename = "image-map.png"
image = pygame.image.load(filename).convert()
f = open('ad-data.txt', 'r')
ad_data = pickle.load(f)
f.close()
for ad in ad_data:
    #print ad
    #pdb.set_trace()
    rect = pygame.Rect(ad['coord'][0], ad['coord'][1], ad['coord'][2]-ad['coord'][0], ad['coord'][3]-ad['coord'][1])
    myAd = image.subsurface(rect)
    #pygame.Surface.subsurfa
    images.append(myAd)

#pygame.Rect(10,20,30,40)
#image_rect = image.get_rect()
#images.append(image)

# a thing to display grid
def drawImage(image, x, y):
    global screen
    screen.blit(images[random.randint(0,len(images)-1)], (x*10, y*10))

def displayGrid():
    global images
    for x in range(grid.x):
        for y in range(grid.y):
            if grid[x][y] is not None:
                drawImage(images[grid[x][y]], x, y)

def placePiece(piece, x, y):
    """Places a piece on the grid."""
    global grid
    print grid.x,grid.y,piece.x,piece.y,x,y

    for _x in range(piece.x):
        for _y in range(piece.y):
            if piece[_x][_y] > -1:
                grid[x + _x][y + _y] = piece[_x][_y]

def dropHeight(piece, pos_x):
    """calculates lowest that piece can go in specified x pos"""
    global grid
    if pos_x + piece.x > grid.x:
        return -1
    
    collision = False
    for y in range(grid.y-piece.y, 0, -1):
        for piece_x in range(piece.x):
            for piece_y in range(piece.y):
                if grid[pos_x + piece_x][y + piece_y] > -1 and piece[piece_x][piece_y] > -1:
                    collision = True
        if collision == False:
            return y
        collision = False


def findNumTouchingEdges(piece, boundary, pos_x, pos_y):
    within = lambda piece, x, y : True if x >= 0 and y >= 0 and x < piece.x and y < piece.y else False
    x = pos_x - 1
    y = pos_y - 1
    edges = 0
    for s in range(boundary.x):
        for t in range(boundary.y):
            if within(grid, x+s, y+t):
                if grid[x+s][y+t] is not None and boundary[s][t] is not None:
                    edges += 1
            else:
                edges += 1
    return edges

def createBoundary(piece):
    boundary = Piece(piece.x+2, piece.y+2)
    for x in range(piece.x):
        for y in range(piece.y):
            if piece[x][y] is not None:
                boundary[x+1][y+1] = "piece"

    # floodfill algorithm
    # http://mail.python.org/pipermail/image-sig/2005-September/003559.html
    edge = [(0, 0)]
    #pdb.set_trace()
    boundary[edge[0][0]][edge[0][1]] = "boundary"
    within = lambda piece, x, y : True if x >= 0 and y >= 0 and x < piece.x and y < piece.y else False
    while edge:
        newedge =[]
        for (x, y) in edge:
            for (s, t) in ((x+1, y), (x-1, y), (x, y+1), (x, y-1)):
                if within(boundary, s, t):
                    if boundary[s][t] != "piece" and boundary[s][t] != "boundary":
                        boundary[s][t] = "boundary"
                        newedge.append((s, t))
        edge = newedge

    for x in range(piece.x):
        for y in range(piece.y):
            # check top part
            if piece[x][y] is not None:
                boundary[x+1][y+1] = None

    #pdb.set_trace()

    return boundary 

def findBestSpotToPutPiece(piece):
    best_x_coord = 0
    #resume

pieces = []
pieces.append(Piece(x=2, y=2, fill=0))
pieces.append(Piece(3, 2, 0))
pieces.append(Piece(2, 3, 0))
pieces.append(Piece(1, 2, 0))
pieces.append(Piece(2, 1, 0))
pieces.append(Piece(1, 1, 0))
#for i in range(3):

index = 0

while 1:
    #pdb.set_trace()
    for event in pygame.event.get():
        if event.type == pygame.QUIT: sys.exit()
        if event.type == pygame.KEYDOWN:
            sys.exit()
            #fps = pygame.game.clock.get_fps()
            #print 'FRAMERATE: %f fps' % fps

    #pdb.set_trace()
    piece = random.randint(0, len(pieces)-1)
    bound = createBoundary(pieces[0])
    edges = findNumTouchingEdges(pieces[0], bound, 0, 0)
    #x = random.randint(0, grid.x)
    x = index
    index += 1
    if index == grid.x:
        index = 0
    y = dropHeight(pieces[piece], x)
    if y > 0:
        placePiece(pieces[piece], x, y)
    screen.fill(white)
    displayGrid()
    pygame.display.flip()

# calculate boundary for each shape
# calculate collisions for that boundary on grid

