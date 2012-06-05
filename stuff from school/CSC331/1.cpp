#include <iostream>
#include <cmath>

using namespace std;

#define _USE_MATH_DEFINES

const float EPSILON = 1e-3;

class Function {
public:
    virtual float f(float) = 0;
    float condition_number(float x) {
        float h = EPSILON;
        float f_prime_x = (f(x+h)-f(x))/h;
        return fabs((x*f_prime_x)/f(x));
    }
};

class Sin : public Function {
public:
    virtual float f(float x) {
        return sin(x);
    }
};

class Cos : public Function {
public:
    virtual float f(float x) {
        return cos(x);
    }
};

class Tan : public Function {
public:
    virtual float f(float x) {
        return tan(x);
    }
};

int main() {
    /*
     * C.N. of sin(1):
     * 
     * 1 * sin`(1) / sin(1) = cot(1) = 1 / tan(1) = 1 / 1.557 = ~0.642093
     */
    Function* s = new Sin();
    cout << "C.N. of sin(1)    = " << s->condition_number(1) << endl; // 0.641593
    
    /*
     * C.N. of cos(0)
     * 
     * 0 * cos`(0) / cos(0) = 0 * 0 / 1 = 0
     */
    Function* c = new Cos();
    cout << "C.N. of cos(0)    = " << c->condition_number(0) << endl; // 0
    
    /*
     * C.N. of tan(PI/2)
     *
     * PI/2 * tan`(PI/2) / tan(PI/2) = PI/2 * infinity / infinity = infinity
     */
    Function* t = new Tan();
    cout << "C.N. of tan(PI/2) = " << t->condition_number(M_PI/2) << endl; // 1570.8
    
    return 0;
}
