g++ -ggdb `pkg-config --cflags opencv` -o `basename camshiftdemo.c .c` camshiftdemo.c `pkg-config --libs opencv`

