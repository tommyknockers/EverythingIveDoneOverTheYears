

barcode = imread('barcode.jpg');
imshow(barcode);
pause;

barcode = rgb2gray(barcode);
barcode = histeq(barcode);
barcode = imresize(barcode, .35, 'bilinear');

imshow(barcode);
pause;

%level = graythresh(barcode);
%bw = im2bw(barcode, level);
h = edge(barcode, 'sobel', [], 'horizontal');

% dilate the horizontal edges vertically to get rid of noise
se = strel('line',20,1);
h = imdilate(h, se);
imshow(h);
pause;

v = edge(barcode, 'sobel', [], 'vertical');
se = strel('line',1,20);
v = imdilate(v, se);
imshow(v);
pause;

regions = ~h & v;
imshow(regions);
pause;

% dilate image to get barcode region
se = strel('line',9,1);

% get the barcode region
regions = imdilate(regions,se);
imshow(regions);
pause;

%regions = imcomplement(regions);

[labels,numLabels]=bwlabel(regions);
imshow(label2rgb(labels, @spring, 'c', 'shuffle'));
pause;


% find largest region
index = 0;
largest_size = 0;
for i = 0:max(unique(labels))
    if sum(sum(regions & (labels == i))) > largest_size
        largest_size = sum(sum(regions & (labels == i)));
        index = i;
    end
end

% show largest region
imshow(regions & (labels == index));
pause;

region = regions & (labels == index);
region = imcomplement(region);

% extract region from original barcode image
[rows, cols] = size(region);
for i = 1:rows
    for j = 1:cols
        if region(i,j) == 1
            barcode(i,j) = 255;
        end
    end
end

imshow(barcode);
pause;

% we now have extracted the barcode

% sharpen it a little bit
yar = fspecial('unsharp');
barcode = imfilter(barcode,yar,'replicate');
imshow(barcode);
pause;

% get the highest/lowest x & y values
x1 = cols;
x2 = 1;
y1 = rows;
y2 = 1;
for i = 1:rows
    for j = 1:cols
        if region(i,j) == 1
            if i < y1
                y1 = i;
            end
            if i > y2
                y2 = i;
            end
            if j < x1
                x1 = j;
            end
            if j > x2
                x2 = j;
            end
        end
    end
end

[r,c] = size(barcode);

for i = 1:r
    for j = 1:c
        if barcode(i,j) >= 194
            barcode(i,j) = 255;
        end
        if barcode(i,j) < 194
            barcode(i,j) = 0;
        end
    end
end

%imshow(barcode);

% COPIED/PASTED FROM http://www.mathworks.com/matlabcentral/fileexchange/21899-recognize-barcode/content/runprogram.m
I=barcode;
I=im2bw(I);             
imshow(I);  
hold on;
[x,y]=ginput(2);        %get data from click mouse
u1=x(1);
u2=y(1);
v1=x(2);
v2=y(2);
line(x,y);              %paint the line between 2 point at click mouse
a = [u1:1:v1];          %find out function line between 2 point
if (u1~=v1) & (u2~=v2)
    g = round(((v2-u2)/(v1-u1))*a + u2 -(u1/(v1-u1)));
elseif (u1==v1)
    a = u1;
end                      
i=1;                    %find the value each pixel that the line go through
h=v1-u1+1;
b=[1:1:h];
for a=u1:v1
    if (I(g,a)==0)
        b(i)=1;
        i=i+1;
    elseif (I(g,a)==1)
        b(i)=0;
        i=i+1;
    end
end
c=b
i=1;                %find number pixels of each line in barcode picture;
s=[1:1:60];
for k=1:60
    j=0;
    if c(i)==0
        while (c(i)==0)&(i<=h)
            j=j+1;
            i=i+1;
            s(k)=j;
        end
    elseif c(i)==1
        while (c(i)==1)&(i<=h)
            j=j+1;
            i=i+1;
            s(k)=j;
        end
    end
end
mau=s(2);       %the first line is the sample for barcode,in another line is ratio with this
q=s./mau;
p=round(q);     
doc1=[1:1:6];   %decode 
k=1;
for i=5:4:25
    if (p(i)==3)& (p(i+1)==2) &(p(i+2)==1) &(p(i+3)==1)
        doc1(k)=0;
    elseif (p(i)==2)& (p(i+1)==2) &(p(i+2)==2) &(p(i+3)==1)
        doc1(k)=1;
    elseif (p(i)==2)& (p(i+1)==1) &(p(i+2)==2) &(p(i+3)==2)
        doc1(k)=2;
    elseif (p(i)==1)& (p(i+1)==4) &(p(i+2)==1) &(p(i+3)==1)
        doc1(k)=3;
    elseif (p(i)==1)& (p(i+1)==1) &(p(i+2)==3) &(p(i+3)==2)
        doc1(k)=4;
    elseif (p(i)==1)& (p(i+1)==2) &(p(i+2)==3) &(p(i+3)==1)
        doc1(k)=5;
    elseif (p(i)==1)& (p(i+1)==1) &(p(i+2)==1) &(p(i+3)==4)
        doc1(k)=6;
    elseif (p(i)==1)& (p(i+1)==3) &(p(i+2)==1) &(p(i+3)==2)
        doc1(k)=7;
    elseif (p(i)==1)& (p(i+1)==2) &(p(i+2)==1) &(p(i+3)==3)
        doc1(k)=8;
    elseif (p(i)==3)& (p(i+1)==1) &(p(i+2)==1) &(p(i+3)==2)
        doc1(k)=9;
    end
    k=k+1;
end
doc2=[1:1:6];
k=1;
for i=34:4:54
    if (p(i)==3)& (p(i+1)==2) &(p(i+2)==1) &(p(i+3)==1)
        doc2(k)=0;
    elseif (p(i)==2)& (p(i+1)==2) &(p(i+2)==2) &(p(i+3)==1)
        doc2(k)=1;
    elseif (p(i)==2)& (p(i+1)==1) &(p(i+2)==2) &(p(i+3)==2)
        doc2(k)=2;
    elseif (p(i)==1)& (p(i+1)==4) &(p(i+2)==1) &(p(i+3)==1)
        doc2(k)=3;
    elseif (p(i)==1)& (p(i+1)==1) &(p(i+2)==3) &(p(i+3)==2)
        doc2(k)=4;
    elseif (p(i)==1)& (p(i+1)==2) &(p(i+2)==3) &(p(i+3)==1)
        doc2(k)=5;
    elseif (p(i)==1)& (p(i+1)==1) &(p(i+2)==1) &(p(i+3)==4)
        doc2(k)=6;
    elseif (p(i)==1)& (p(i+1)==3) &(p(i+2)==1) &(p(i+3)==2)
        doc2(k)=7;
    elseif (p(i)==1)& (p(i+1)==2) &(p(i+2)==1) &(p(i+3)==3)
        doc2(k)=8;
    elseif (p(i)==3)& (p(i+1)==1) &(p(i+2)==1) &(p(i+3)==2)
        doc2(k)=9;
    end
    k=k+1;
end 
