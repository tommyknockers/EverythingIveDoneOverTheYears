#include <stdio.h>
#include "cv.h"
#include "highgui.h"
#include <vector>
#include <algorithm>
#include <iostream>

#include <sys/time.h>
#include <time.h>

using namespace std;

typedef struct {
    int x;
    int y;
    int width;
    double avgVal;
} Region;

bool regionSort(Region r1, Region r2) {
    return r1.avgVal < r2.avgVal;
}

double avgValOfRegion(Region region, IplImage * image) {
    int totalValue = 0;
    int numPixels = region.width * region.width * image->nChannels;
    uchar * data = (uchar *)image->imageData;
    for (int i = region.x; i < region.x + region.width; i++)
        for (int j = region.y; j < region.y + region.width; j++)
            for (int k = 0; k < image->nChannels; k++) {
                totalValue += data[i*image->widthStep+j*image->nChannels+k];
            }

    return (double)totalValue/(double)numPixels;
}

void replaceRegion(Region srcRegion, Region destRegion, IplImage * srcImage, IplImage * destImage) {
    uchar * srcData = (uchar *)srcImage->imageData;
    uchar * destData = (uchar *)destImage->imageData;
    for (int x = 0; x < srcRegion.width; x++)
        for (int y = 0; y < srcRegion.width; y++)
            for (int k = 0; k < srcImage->nChannels; k++) {
                destData[(x+destRegion.x)*destImage->widthStep+(y+destRegion.y)*destImage->nChannels+k] = srcData[(x+srcRegion.x)*srcImage->widthStep+(y+srcRegion.y)*srcImage->nChannels+k];
            }
}
 
int main( int argc, char **argv )
{
    CvCapture *capture = 0;
    IplImage  *frame = 0; // stores the frame from the webcam
    int       key = 0;
    
    // load the big advertisements
    IplImage * bigad = 0;
    bigad = cvLoadImage("image-map.png", CV_LOAD_IMAGE_COLOR);
    if (bigad == 0) {
        fprintf( stderr, "Cannot load advertisement!\n");
        return 1;
    }

    // get ready to split the big advertisement into regions
    int height, width, step, channels;
    height = bigad->height;
    width = bigad->width;
    step = bigad->widthStep;
    channels = bigad->nChannels;
    uchar * data;
    data = (uchar *)bigad->imageData;
    
    // invert the image
    /*
    for (i = 0; i < height; i++) 
        for (j = 0; j < width; j++)
            for (k = 0; k < channels; k++) {
                data[i*step+j*channels+k] = 255-data[i*step+j*channels+k];
            }
    */
    // create the little advertisements
    vector<Region> regions;
    for (int x = 0; x < height; x+=10)
        for (int y = 0; y < width; y+=10) {
            Region region;
            region.x = x;
            region.y = y;
            region.width = 10;
            // calculate average of region
            region.avgVal = avgValOfRegion(region, bigad);
            regions.push_back(region);
        }
    // sort the regions based on their avg value
    sort (regions.begin(), regions.end(), regionSort);

    /* initialize camera */
    capture = cvCaptureFromCAM( 0 );
 
    /* always check */
    if ( !capture ) {
        fprintf( stderr, "Cannot open initialize webcam!\n" );
        return 1;
    }
 
    /* create a window for the video */
    cvNamedWindow( "result", CV_WINDOW_AUTOSIZE );
    
    struct timeval tv;
    gettimeofday(&tv, NULL);
    int frames = 0;
    int start = tv.tv_sec;
    while( key != 'q' ) {
        /* get a frame */
        frame = cvQueryFrame( capture );
        // put blobs of color in place of image
        for (int y = 0; y < frame->height; y++)
            for (int x = 0; x < frame->width; x++) {
                for (int k = 0; k < frame->nChannels; k++) {
                    float pixelPercent = (float)frame->imageData[y*frame->widthStep+x*frame->nChannels+k]/255.0;
                    //cout << pixelPercent;
                    for (float p = 0.0; p <= 1.0; p+=0.2) {
                        if (pixelPercent < p) {
                            frame->imageData[y*frame->widthStep+x*frame->nChannels+k] = 255.0*p;
                            break;
                        }
                    }
                }
            }

        // Loop through parts of frame here & replace them with equivalent advertisements
        for (int y = 0; y < height; y+= 10) {
            for (int x = 0; x < width; x+= 10) {
                // for every 10x10 region in image from webcam, calculate avg value of image
                Region region;
                region.x = x;
                region.y = y;
                region.width = 10;
                region.avgVal = avgValOfRegion(region, frame);

                // then, find closest image from the big advertisement
                int bigAdRegionIndex = 0;
                int right = regions.size();
                int left = 0;
                int previous_center = -1;
                double search = region.avgVal;
                if (search < regions[0].avgVal)
                    bigAdRegionIndex == 0;
                while (1) {
                    //cout << "Arr\n";
                    int center = (left + right) / 2;
                    double candidate = regions[center].avgVal;
                    if (search == candidate) {
                        bigAdRegionIndex = center;
                        break;
                    }
                    if (center == previous_center) {
                        bigAdRegionIndex = center;
                        break;
                    }
                    if (search < candidate) {
                        right = center;
                    } else {
                        left = center;
                    }
                    previous_center = center;
                }
                // replace 
                replaceRegion(regions[bigAdRegionIndex], region, bigad, frame);
            }
        }

 
        /* always check */
        if( !frame ) break;
       
        /* display current frame */
        //cvShowImage( "result", frame );
        cvShowImage( "result", frame );
 
        /* exit if user press 'q' */
        key = cvWaitKey( 10 );
        frames += 1;
        if (frames % 50 == 0) {
            gettimeofday(&tv, NULL);
            int time = tv.tv_sec;
            cout << "FPS: " << (float)frames/(float)(time-start) << "\n";
        }
    }
 
    /* free memory */
    cvDestroyWindow( "result" );
    cvReleaseCapture( &capture );
 
    return 0;
}

