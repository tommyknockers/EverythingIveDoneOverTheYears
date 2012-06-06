// Be sure to link with -lfreenect_sync
/*
#include <stdlib.h>
#include <stdio.h>
#include <opencv/cv.h>
#include <opencv/highgui.h>
#include <libfreenect_sync.h>
int main() {   
  IplImage *image = cvCreateImageHeader(cvSize(640,480), 8, 3);
  while (cvWaitKey(10) < 0) {
    long *data;
    unsigned int timestamp;
    freenect_sync_get_depth((void**)(&data), &timestamp, 0, FREENECT_DEPTH_11BIT);
    cvSetData(image, data, image->widthStep);
    cvConvertScale(image, image, 32, 0);
    //cvCvtColor(image, image, CV_RGB2BGR);
    cvShowImage("RGB", image);
  }
  freenect_sync_stop();       
  cvFree(&image);
  return EXIT_SUCCESS;
}
*/

#include <opencv/cv.h>
#include <opencv/highgui.h>
#include <libfreenect.h>

freenect_context *f_ctx;
freenect_device *f_dev;

int main(int argc, char **argv)
{   

    //this will be our image. We get pixel data from the kinect, so we need to convert that to something opencv understands.
    CvSize sz = cvSize(640,480);
    IplImage *image = cvCreateImageHeader(cvSize(640,480), 16, 1);
    
    int i;

    cvNamedWindow( "image",1); 

    //Endless loop
    while (cvWaitKey(10) < 0) {
      long *data;
      uint32_t ts; 
      
      //get the data
      if (freenect_sync_get_depth((void**)&data, &ts, 0, FREENECT_DEPTH_11BIT) !=0){
	  //if the freenect_sync_get_depth returns non zero, there is an error. 
	  //This visualises that error as a white image
	  data[0]=0xffffffffL;
      }

      //set the data as a frame
      cvSetData(image, data, image->widthStep);

      //Convert the image into something pretty
      cvConvertScale(image, image, 32, 0);
      //fiddle
      cvShowImage( "image", image);
    }
}

