#include <cv.h>
#include <cxcore.h>
#include <highgui.h>
#include <iostream>
using namespace cv;
using namespace std;


float computeAvgColor(Mat * frame, int x1, int y1, int x2, int y2) {
  long long total = 0L;
  for (int y = y1; y < y2; y++)
    for (int x = x1; x < x2; x++) {
      total += 
        frame->data[y*frame->step + x*3] + 
        frame->data[y*frame->step + x*3 + 1] +
        frame->data[y*frame->step + x*3 + 2];
    }

  int cols = x2-x1;
  int rows = y2-y1;
  return total/(float)(cols*rows);
}


typedef struct NODE {
  NODE * q1;
  NODE * q2;
  NODE * q3;
  NODE * q4;

  int x1; 
  int y1; 
  int x2; 
  int y2;

  struct {
    int red;
    int blue;
    int green;
  } avg;

} NODE;


#define THRESHOLD 75
NODE * splitIntoQuadrants(Mat * frame) {
  int rows = frame->rows;
  int cols = frame->cols;
  // when to split an image into quadrants?



};


int main() {
	cv::VideoCapture cap(0);

  //  if camera device is not found
	if (!cap.isOpened()) return -1;

	cv::Mat edge;
	cv::namedWindow("Edge", 1);

  // continuous capturing according to frame rate
	for (;;) {
		cv::Mat frame;
		cap >> frame;

    /*
    for(int y=0; y<frame.rows; y++) {
       uchar* ptr = frame.data + y * frame.step;
       for(int x=0; x<frame.cols*3; x += 1) {
          ptr[x]+=50;
       }
    }
    */

    //cout << computeAvgColor(&frame, 0, 0, frame.cols, frame.rows) << endl;

		imshow("Edge", frame);
		if ( cvWaitKey(30) >= 0 ) break;
	}

	return 0;
}

