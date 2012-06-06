// Be sure to link with -lfreenect_sync
#include <stdlib.h>
#include <stdio.h>
#include <opencv/cv.h>
#include <opencv/highgui.h>
#include <libfreenect_sync.h>

#include <cv.h>
#include <cxcore.h>
#include <highgui.h>
using namespace cv;

#include <stdlib.h>
#include <iostream>
using namespace std;

// used to keep track of data in quadtree
typedef struct NODE {
  bool hasChildren() {
    if (q1 == NULL) return false;
    return true;
  }

  NODE * q1;
  NODE * q2;
  NODE * q3;
  NODE * q4;

  int x1; 
  int y1; 
  int x2; 
  int y2;

  int level;


} NODE;


#define NUM_NODES 1000000
int nodeIndex = 0;
NODE * nodeData[NUM_NODES];

void initializeNodeMemory() {
  // allocate some data for nodes
  for (int i = 0; i < NUM_NODES; i++) {
    nodeData[i] = new NODE;
    nodeData[i]->q1 = nodeData[i]->q2 = nodeData[i]->q3 = nodeData[i]->q4 = NULL;
  }
}

NODE * getNode() {
  return nodeData[nodeIndex++];
}

void deleteNodes() {
  for (int i = 0; i < nodeIndex; i++) {
    nodeData[i]->x1 = 0;
    nodeData[i]->y1 = 0;
    nodeData[i]->x2 = 0;
    nodeData[i]->y2 = 0;
    nodeData[i]->level = 0;
    nodeData[i]->q1 = nodeData[i]->q2 = nodeData[i]->q3 = nodeData[i]->q4 = NULL;
  }
  nodeIndex = 0;
}


#define LOWER_THRESHOLD 100
#define UPPER_THRESHOLD 700
#define AREA_THRESHOLD .75
#define RECURSION_DEPTH_LIMIT 7
// split the image into quadrants if the number of pixels in the threshold is less than 75%
NODE * splitIntoQuadrants(long * data, int step, int x1, int y1, int x2, int y2, int level = 0) {
  if (level > RECURSION_DEPTH_LIMIT)
    return NULL;

  // prepare this level of the quadtree
  NODE * n = getNode();
  n->x1 = x1;
  n->y1 = y1;
  n->x2 = x2;
  n->y2 = y2;
  n->level = level;

  // count the number of pixels in the threshold
  int pixels_in_threshold = 0;
  for (int x = x1; x < x2; x++)
    for (int y = y1; y < y2; y++)
      if ((data[x + y * step]%2048) > LOWER_THRESHOLD && (data[x + y * step]%2048) < UPPER_THRESHOLD)
        pixels_in_threshold++;

  //cout << "Pixels in threshold " << pixels_in_threshold << endl;

  int area = (x2-x1)*(y2-y1);
  if (pixels_in_threshold/(float)area < AREA_THRESHOLD) {
    // split the node into quadrants
    n->q1 = splitIntoQuadrants(
          data, 
          step, 
          x1, 
          y1, 
          x1 + ((x2 - x1) / 2), 
          y1 + ((y2 - y1) / 2), 
          level+1);

    n->q2 = splitIntoQuadrants(
        data, 
        step, 
        x1 + ((x2 - x1) / 2),
        y1, 
        x2, 
        y1 + ((y2 - y1) / 2),
        level+1);

    n->q3 = splitIntoQuadrants(
        data, 
        step, 
        x1, 
        y1 + ((y2 - y1) / 2),
        x1 + ((x2 - x1) / 2),
        y2, 
        level+1);

    n->q4 = splitIntoQuadrants(
        data, 
        step, 
        x1 + ((x2 - x1) / 2),
        y1 + ((y2 - y1) / 2),
        x2, 
        y2, 
        level+1);
  }

  return n;
};



void visualizeQuadtree(CvMat * img, NODE * root) {
  int levels[7] = {0, 36, 36*2, 36*3, 36*4, 36*5, 36*6};
  //cout << "level " << root->level << endl;
  if (root->hasChildren()) {
    //cout << "Recurring\n";
    visualizeQuadtree(img, root->q1);
    visualizeQuadtree(img, root->q2);
    visualizeQuadtree(img, root->q3);
    visualizeQuadtree(img, root->q4);
  } else {
    for (int x = root->x1; x < root->x2; x++)
      for (int y = root->y1; y < root->y2; y++) {
        //img->data[x*img->step + y] = root->level*50;
        CV_MAT_ELEM( *img, unsigned char, x, y ) = levels[root->level];
      }
  }
}


int main() {   
  //CvSize sz = cvSize(640,480);
  //IplImage *image = cvCreateImageHeader(cvSize(640,480), 16, 1);
  initializeNodeMemory();
  
  //cv::Mat matt = cv::CreateMat(640, 480, CV_8UC1);
  //cv::Mat matt = imgMat(image);
  CvMat* matt = cvCreateMat(320, 240, CV_8UC1);

  while (cvWaitKey(10) < 0) {
    long *data;
    unsigned int timestamp;
    //freenect_sync_get_video((void**)(&data), &timestamp, 0, FREENECT_VIDEO_RGB);

    freenect_sync_get_depth((void**)(&data), &timestamp, 0, FREENECT_DEPTH_11BIT);
    /*
    for (int i = 0; i < 320; i++)
      for (int j = 0; j < 240; j++)
        CV_MAT_ELEM( *matt, unsigned char, i, j ) = data[i + j*320]%2048;
        */
        //cout << data[i + j*320]%2048 << endl;
        
    int widthStep = 320;
    NODE * n = splitIntoQuadrants(data, widthStep, 0, 0, 320, 240);

    //cvSetData(image, data, image->widthStep);
    visualizeQuadtree(matt, n);


    //cvConvertScale(image, image, 32, 0);

    //cvCvtColor(image, image, CV_RGB2BGR);
    /*
    for (int row = 0; row < 480; row++) {
      for (int col = 0; col < 640; col++) {
        CV_MAT_ELEM(*matt, unsigned char, col, row) = 255;
      }
    }
    */
    cvShowImage("RGB", matt);

    //NODE * n = getNode();
    //delete n;
    deleteNodes();
  }

  freenect_sync_stop();
  cvFree(&matt);
  return EXIT_SUCCESS;
}


