#!/usr/bin/python

#log# Automatic Logger file. *** THIS MUST BE THE FIRST LINE ***
#log# DO NOT CHANGE THIS LINE OR THE TWO BELOW
#log# opts = Struct({'__allownew': True, 'logfile': 'ipython_log.py', 'pylab': 1})
#log# args = []
#log# It is safe to make manual edits below here.
#log#-----------------------------------------------------------------------

# I get very little, mostly junk. Ideally I'd like to shove it straight into the rubbish bin just outside my front door. But, of course, that's not the bin for paper, which is in the kitchen (it's also for cans). Should I be a good citizen and carry this dross through the house to the correct bin? Or open the front door and guiltily sneak it into the bin for general rubbish? And that's nowhere near the most exciting decision I have to take each day, let me tell you.

# what's next. more similarity algorithms? puzzle piece algorithm? hooking up to webcam? cuda?
# we should definitely be able to compare any piece to any part of the image though.

import pickle
import ipdb
import cv
import numpy
import sys, pygame
from pygame import surfarray
from pygame.locals import *
import matplotlib.pyplot as plt
import math
from numpy import float32
from numpy import hstack, vstack
from pylab import imread, gray, mean
from numpy import array, average, rot90, vsplit, hsplit
import numpy as np
from operator import itemgetter
import random
import time
#import cProfile


import pycuda.driver as cuda
import pycuda.autoinit
from pycuda.compiler import SourceModule
def test_cuda():
    square_slices = get_square_slices()

    #a = numpy.random.randn(4,4)

    #a = a.astype(numpy.float32)
    a_gpu = cuda.mem_alloc(a.nbytes)
    cuda.memcpy_htod(a_gpu, a)
    mod = SourceModule("""
    __global__ void doublify(float *a)
    {
        int idx = threadIdx.x + threadIdx.y*4;
        a[idx] *= 2;
    }
    """)

    func = mod.get_function("doublify")
    func(a_gpu, block=(4,4,1))

    a_doubled = numpy.empty_like(a)
    cuda.memcpy_dtoh(a_doubled, a_gpu)
    print a_doubled
    print a


face_cascade = cv.Load('haarcascades/haarcascade_frontalface_alt.xml')
left_eye_cascade = cv.Load('haarcascades/haarcascade_mcs_lefteye.xml')
right_eye_cascade = cv.Load('haarcascades/haarcascade_mcs_righteye.xml')
mouth_cascade = cv.Load('haarcascades/haarcascade_mcs_mouth.xml')
def find_objects(img, cascade, shiftX = 0, shiftY = 0):
    min_size = (20, 20)
    image_scale = 2
    haar_scale = 1.2
    min_neighbors = 2
    haar_flags = cv.CV_HAAR_DO_CANNY_PRUNING

    # allocate temporary images
    gray = cv.CreateImage((img.width,img.height), 8, 1)
    small_img = cv.CreateImage((cv.Round(img.width / image_scale),
			       cv.Round (img.height / image_scale)), 8, 1)

    # convert color input image to grayscale
    cv.CvtColor(img, gray, cv.CV_BGR2GRAY)

    # scale input image for faster processing
    cv.Resize(gray, small_img, cv.CV_INTER_LINEAR)

    cv.EqualizeHist(small_img, small_img)
    width = 640
    height = 480

    if(cascade):
        t = cv.GetTickCount()
        faces = cv.HaarDetectObjects(small_img, cascade, cv.CreateMemStorage(0),
                                     haar_scale, min_neighbors, haar_flags, min_size)
        t = cv.GetTickCount() - t
        print "detection time = %gms" % (t/(cv.GetTickFrequency()*1000.))
        locations = []
        if faces:
            for ((x, y, w, h), n) in faces:
                # the input to cv.HaarDetectObjects was resized, so scale the 
                # bounding box of each face and convert it to two CvPoints
                pt1 = (width-(shiftX+int(x * image_scale)), height-(shiftY+int(y * image_scale)))
                pt2 = (width-(shiftX+int((x + w) * image_scale)), height-(shiftY+int((y + h) * image_scale)))
                locations.append((pt2, pt1))
                #cv.Rectangle(img, pt1, pt2, cv.RGB(255, 0, 0), 3, 8, 0)

    #cv.ShowImage("result", img)
    return locations

def load_image(image):
    image = cv.LoadImage(image, 1)
    image = pygame.image.fromstring(image.tostring()[::-1], (image.width, image.height), "RGB")
    image = pygame.surfarray.pixels3d(image).astype(numpy.float32) # copies no data! hooray!
    return image


def get_square_slices():
    f = open('ad-data.txt')
    ad_data = pickle.load(f)
    f.close()
    image_dims = []

    for ad in ad_data:
        rect = [ad['coord'][0], ad['coord'][1], ad['coord'][2]-ad['coord'][0], ad['coord'][3]-ad['coord'][1]]
        image_dims.append(rect)

    image = load_image('image-map.bmp')
    #image = image
    #ipdb.set_trace()
    image_slices = []
    for yar in image_dims:
        left = yar[0]
        width = yar[2]
        top = yar[1]
        height = yar[3]
        slice = image[top:top+height, left:left+width]
        image_slices.append(slice)

    square_slices = [i for i in image_slices if i.shape==(10,10,3)]
    square_slices = [[average(s), s] for s in square_slices] # add averages
    square_slices = sorted(square_slices, key=itemgetter(0))
    greatest = 0
    greatest_val = 0
    for i in range(len(square_slices)):
        if square_slices[i][0] != 1:
            if square_slices[i][0] > greatest_val:
                greatest_val = i
                greatest = square_slices[i][0]
    print i
    #square_slices.reverse()
    return square_slices

#test_cuda()


def binsearch(seq, search):
    right = len(seq)
    left = 0
    previous_center = -1
    if search < seq[0][0]:
        return -1
    while 1:
        center = (left + right) / 2
        #print "center is now: " + str(center)
        candidate = seq[center][0] # modification here, shouldnt' access array element
        if search == candidate:
            return center
        if center == previous_center:
            #return - 2 - center
            return center
        elif search < candidate:
            right = center
        else:
            left = center
        previous_center = center


def render(npimage, square_slices):
    width = len(npimage[0])
    height = len(npimage)
    slices = []
    for i in range(0, height, 10):
        for j in range(0, width, 10):
            slice = npimage[i:i+10, j:j+10]
            slice_avg = average(slice)
            #ipdb.set_trace()
            best_avg_index = binsearch(square_slices, slice_avg)
            """
            best_avg_index = 0
            for x in range(len(square_slices)):
                square_avg = square_slices[x][0]
                best_avg_index = x
                if square_avg > slice_avg:
                    break
            """
            #npimage[i:i+10, j:j+10] = square_slices[random.randint(0, len(square_slices)-1)][1]
            npimage[i:i+10, j:j+10] = square_slices[best_avg_index][1]
    return npimage


def render_edges(npimage):
    mask = np.empty((5,5))
    mask.fill(-1)
    mask[2][2] = 24
    height = len(npimage)
    width = len(npimage[0])
    old = npimage.copy()
    for Y in range(0, height-1):
        for X in range(0, width-1):
            sum = 0
            if Y in [0, 1, height-2, height-1]:
                sum = 0
            elif X in [0, 1, width-2, width-1]:
                sum = 0
            else:
                for I in range(-2, 3):
                    for J in range(-2, 3):
                        #0.3*R + 0.59*G + 0.11*B
                        #ipdb.set_trace()
                        sum += old[Y+I, (X+J)][0]*.3
                        sum += old[Y+I, (X+J)][1]*.59
                        sum += old[Y+I, (X+J)][2]*.11
                        sum *= mask[I+2][J+2]
            #print 5
            #if sum > 255:
                #sum = 255
            #if sum < 0:
                #sum = 0
            sum = sum % 255
            npimage[Y][X] = (sum, sum, sum)
            #if sum not in [0, 255]:
                #print npimage[Y][X]
        print Y
    print "iteration completed"
    return npimage


capture = cv.CaptureFromCAM(-1)
#cv.SetCaptureProperty(capture, cv.CV_CAP_PROP_FRAME_WIDTH, 320)
#cv.SetCaptureProperty(capture, cv.CV_CAP_PROP_FRAME_HEIGHT, 240)
cv.GrabFrame(capture)
image = cv.RetrieveFrame(capture)
size = width, height = image.width, image.height
screen = pygame.display.set_mode(size)
pygame.mouse.set_visible(False)
# have to convert from BGR to RGB
#  see http://www.pygame.org/docs/ref/image.html#pygame.image.tostring
image = pygame.image.fromstring(image.tostring()[::-1], (image.width, image.height), "RGB")
image = pygame.transform.flip(image, True, True)
rect = image.get_rect()
black = 0, 0, 0
square_slices = get_square_slices()
start = time.time()
frames = 0
while 1:
    cv.GrabFrame(capture)
    image = cv.RetrieveFrame(capture)

    #ipdb.set_trace()
    surface = pygame.image.fromstring(image.tostring()[::-1], (image.width, image.height), "RGB")
    oldnpimage = numpy.copy(pygame.surfarray.pixels3d(surface)) # copies no data! hooray!
    npimage = pygame.surfarray.pixels3d(surface) # copies no data! hooray!
    npimage = render(npimage, square_slices)
    #npimage = render_edges(npimage)

    #faces = find_objects(image, face_cascade)
    #mouths = left_eye = right_eye = None
    #P1 = 0
    #P2 = 1
    #X = 0
    #Y = 1
    """
    if faces:
        try:
            face = image[faces[0][P1][X]:faces[0][P2][X], faces[0][P1][Y]:faces[0][P2][Y]]
        except:
            ipdb.set_trace()
        shiftX = faces[0][P1][X]
        shiftY = faces[0][P1][Y]
        
        left_eye = find_objects(face, left_eye_cascade, shiftX, shiftY)
        if left_eye:
            npimage[left_eye[0][P1][X]:left_eye[0][P2][X], left_eye[0][P1][Y]:left_eye[0][P2][Y]] = oldnpimage[left_eye[0][P1][X]:left_eye[0][P2][X], left_eye[0][P1][Y]:left_eye[0][P2][Y]]
            print left_eye

        right_eye = find_objects(face, right_eye_cascade, shiftX, shiftY)
        if right_eye:
            npimage[right_eye[0][P1][X]:right_eye[0][P2][X], right_eye[0][P1][Y]:right_eye[0][P2][Y]] = oldnpimage[right_eye[0][P1][X]:right_eye[0][P2][X], right_eye[0][P1][Y]:right_eye[0][P2][Y]]
            print right_eye

        mouth = find_objects(face, mouth_cascade, shiftX, shiftY)
        if mouth:
            npimage[mouth[0][P1][X]:mouth[0][P2][X], mouth[0][P1][Y]:mouth[0][P2][Y]] = oldnpimage[mouth[0][P1][X]:mouth[0][P2][X], mouth[0][P1][Y]:mouth[0][P2][Y]]
            print mouth
    """
    #if faces:
        #oldnpimage
        #npimage[faces[0][P1][X]:faces[0][P2][X], faces[0][P1][Y]:faces[0][P2][Y]] = oldnpimage[faces[0][P1][X]:faces[0][P2][X], faces[0][P1][Y]:faces[0][P2][Y]]
    pygame.surfarray.blit_array(surface, npimage)

    surface = pygame.transform.flip(surface, True, True)
    rect = surface.get_rect()
    for event in pygame.event.get():
        if event.type == pygame.QUIT: sys.exit(0)
        if event.type == KEYUP or event.type == KEYDOWN:
            if event.key == K_ESCAPE:
                sys.exit(0)
    screen.fill(black)
    screen.blit(surface, rect)
    pygame.display.flip()
    elapsed = (time.time()-start)
    if elapsed > 1:
        print "FPS: ", float(frames)/elapsed
        start = time.time()
        elapsed = 0
        frames = 0
    frames += 1

