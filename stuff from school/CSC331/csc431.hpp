#include "cstdio"
#include "iostream"
#include "cmath"
#include "vector"
#include "cstdlib"
using namespace std;


///
/// CONSTANTS
///

const double Pi=3.1415;
const double PRECISION=1e-6;
const double EPSILON=1e-3;

///
/// class Exception
///

typedef string Exception;

/// EXCEPTIONS
/// OutOfBounds
/// DivisionByZero
/// WrongParameters
/// Instability
/// NoConvergence
/// etc. etc

///
/// class Matrix
///

class Matrix {
public:
  int nrows, ncols;
  vector<double> v;
  Matrix(int nrows=1, int ncols=1) {
    if(nrows<=0 || ncols<=0) throw Exception("InvalidMatrix");
    this->nrows=nrows;
    this->ncols=ncols;
    v.resize(ncols*nrows);
    for(int i=0; i<ncols*nrows; i++) v[i]=0.0;
  }
  double& operator() (int r, int c=0) {
    if(r<0 || r>=nrows || c<0 || c>=ncols) throw Exception("OutOfBounds");
    return v[r*ncols+c];
  }
  const double& operator() (int r, int c=0) const {
    if(r<0 || r>=nrows || c<0 || c>=ncols) throw Exception("OutOfBounds");
    return v[r*ncols+c];
  }
  void swap_rows(int i, int j) {
    if(i<0 || i>=nrows || j<0 || j>=nrows) throw Exception("OutOfBounds");
    double tmp;
    for(int c=0; c<ncols; c++) {
      tmp=(*this)(i,c); 
      (*this)(i,c)=(*this)(j,c); 
      (*this)(j,c)=tmp;
    }
  }
};

ostream& operator<<(ostream& os, const Matrix& A) {
  os << "[ ";
  for(int r=0; r<A.nrows; r++) {
    os << "[ ";
    for(int c=0; c<A.ncols; c++) {
      os << A(r,c);
      if(c!=A.ncols-1) os << ", ";
    }
    os << " ]";
    if(r!=A.nrows-1) os << ", ";
  }
  os << " ]";
  return os;
}

Matrix operator*(const Matrix& A, const Matrix& B) {
  if(A.ncols!=B.nrows) throw Exception("WrongMatrixSize");
  Matrix C(A.nrows, B.ncols);
  for(int i=0; i<A.nrows; i++)
    for(int j=0; j<B.ncols; j++)
      for(int k=0; k<A.ncols; k++)
	C(i,j)+=A(i,k)*B(k,j);
  return C;	
}

Matrix operator+(const Matrix& A, const Matrix& B) {
  Matrix C(A.nrows, A.ncols);
  for(int i=0; i<A.nrows; i++)
    for(int j=0; j<A.ncols; j++)
      C(i,j)=A(i,j)+B(i,j);
  return C;	
}

Matrix operator-(const Matrix& A, const Matrix& B) {
  Matrix C(A.nrows, A.ncols);
  for(int i=0; i<A.nrows; i++)
    for(int j=0; j<A.ncols; j++)
      C(i,j)=A(i,j)-B(i,j);
  return C;	
}

Matrix operator*(double a, const Matrix& B) {
  Matrix C(B.nrows, B.ncols);
  for(int i=0; i<B.nrows; i++)
    for(int j=0; j<B.ncols; j++)
      C(i,j)=a*B(i,j);
  return C;	
}

Matrix inverse(Matrix A) {
  if(A.nrows!=A.ncols) throw Exception("MatrixNotSquared");
  Matrix B(A.nrows, A.ncols);
  double coeff, maxArc;
  int iArc;
  int r,c,i;
  for(r=0; r<B.ncols; r++) B(r,r)=1;

  c=0;

  for(c=0; c<A.ncols; c++) {
    iArc=-1;
    maxArc=0;
    for(r=c; r<A.nrows; r++) {
      if(abs(A(r,c))>maxArc) {
	iArc=r;
	maxArc=abs(A(r,c));
      }
    }
    if(iArc<0) throw Exception("CannotInvert");
    r=iArc;
    A.swap_rows(c,r);
    B.swap_rows(c,r);
    double pivot=A(c,c);
    r=c;
    for(i=0; i<A.ncols; i++) {
      A(r,i)/=pivot;
      B(r,i)/=pivot;
    }
    for(r=0; r<A.nrows; r++) if(r!=c){			
      coeff=A(r,c);
      for(i=0; i<A.ncols; i++) {
	A(r,i)=A(r,i)-coeff*A(c,i);
	B(r,i)=B(r,i)-coeff*B(c,i);
      }
    }

  }
  return B;
}

double norm_1(const Matrix& A) {
  double z,m=0;
  for(int j=0; j<A.ncols; j++) {
    z=0;
    for(int i=0; i<A.nrows; i++) {
      z+=abs(A(i,j));
    }
    if(z>m) m=z;
  }
  return m;
}

double norm_2(const Matrix& A) {
  if(A.ncols!=1) throw Exception("norm_2 only for vectors");
  double m=0;
  for(int i=0; i<A.nrows; i++) {
    m+=A(i)*A(i);
  }
  return sqrt(m);
}

double norm_infinite(const Matrix& A) {
  double z,m=0;
  for(int j=0; j<A.nrows; j++) {
    z=0;
    for(int i=0; i<A.ncols; i++) {
      z+=abs(A(j,i));
    }
    if(z>m) m=z;
  }
  return m;
}

bool operator!=(const Matrix& A, const Matrix& B) {
  return (norm_1(A-B)>PRECISION);
}

bool operator==(const Matrix& A, const Matrix& B) {
  return (norm_1(A-B)<PRECISION);
}


double cond_number(const Matrix& A) {
  return norm_1(A)/norm_1(inverse(A));
}

Matrix transposed(const Matrix& A) {
  Matrix B(A.ncols,A.nrows);
  for(int i=0; i<A.nrows; i++)
    for(int j=0; j<A.ncols; j++)
      B(j,i)=A(i,j);
  return B;
}

Matrix Cholesky(const Matrix& A) {
  if(A!=transposed(A)) throw Exception("NotSymmetric");
  Matrix L=A;
  for(int k=0; k<L.ncols; k++) {
    if(L(k,k)<=0) throw Exception("NotPositiveDefinite");
    L(k,k)=sqrt(L(k,k));
    for(int i=k+1; i<L.nrows; i++)
      L(i,k)/=L(k,k);
    for(int j=k+1; j<L.nrows; j++)
      for(int i=k+1; i<L.nrows; i++)
	L(i,j)-=L(i,k)*L(j,k);
		
  }
  for(int i=0; i<L.nrows; i++) 
    for(int j=i+1; j<L.ncols; j++)
      L(i,j)=0;
  return L;	
}

///
/// Random numbers
///

float uniform() {
  return (float) rand()/RAND_MAX;
}

float normal() {
  static bool stored=0;
  static float y2;
  float y1,v1,v2,s;
  if(stored) {
    stored=0;
    return y2;
  }
  do {
    v1=2.0*uniform()-1;
    v2=2.0*uniform()-1;
    s=v1*v1+v2*v2;
  } while (s>1);
  y1=v1*sqrt(-2.0/s*log(s));
  y2=v2*sqrt(-2.0/s*log(s));
  stored=1;
  return y1;
}  

///
/// example function to generate correlated Gaussian random number
///

void test_GenerateCorrelatedNumbers() {
  Matrix A(2,2);
  A(0,0)=0.001; // sigma^2 of stock AMD
  A(1,1)=0.002; // sigma^2 of stock INTC
  A(0,1)=A(1,0)=0.001; // corr between stock AMD and stock INTC;
  
  Matrix L=Cholesky(A);
  Matrix x(2,1);
  Matrix r(2,1);
  for(int i=0; i<1000; i++) {
    for(int k=0; k<2; k++) x(k,0)=normal();
    r=L*x;
    cout << r(0,0) << ", " << r(1,0) << endl;
  }
}

///
/// Example: Markovitz algorithm for portfolio immunization
///

Matrix Markoviz(Matrix mu, const Matrix& A, float r_bar) {
  Matrix x(A.nrows,1);
  for(int r=0; r<mu.nrows; r++) mu(r,0)-=r_bar;
  x=inverse(A)*mu;
  float x_norm=0;
  for(int r=0; r<mu.nrows; r++) x_norm+=x(r,0);
  for(int r=0; r<mu.nrows; r++) x(r,0)/=x_norm;
  return x;
}

void test_Markoviz() {
  Matrix A(3,3);
  A(0,0)=pow(0.20,2);
  A(1,1)=pow(0.30,2);
  A(2,2)=pow(0.40,2);
  A(0,1)=A(1,0)=0.10*0.20*0.30;
  A(0,2)=A(2,0)=0.25*0.20*0.40;
  A(1,2)=A(2,1)=0.50*0.40*0.30;
  Matrix mu(3,1);
  mu(0,0)=0.10;
  mu(1,0)=0.12;
  mu(2,0)=0.15;
  float r_bar=0.05;
  
  Matrix x=Markoviz(mu,A,r_bar);

  cout << x << endl;

  cout << "return:" << transposed(mu)*x << endl;

  cout << "risk:" << sqrt((transposed(x)*A*x)(0,0)) << endl;
}

///
/// Least squared Fitting algorithm
///

Matrix FitPolynomial(const Matrix& points, int n) {
  Matrix b(points.nrows);
  Matrix A(points.nrows,n);
  for(int i=0; i<points.nrows; i++) {
    for(int j=0; j<n; j++)
      A(i,j)=pow(points(i,0),j);
    b(i)=points(i,1);
  }
  Matrix x=inverse(transposed(A)*A)*transposed(A)*b;
  // OR
  // Matrix L=Cholesky(transposed(A)*A);
  // Matrix x=inverse(transposed(L))*inverse(L)*transposed(A)*b;
  return x;
}

///
/// example: fit fake data
///

float polynomial(float t) {
  return 10+0.3*t+0.5*t*t-0.2*t*t*t+normal()*2;
}

void test_fit1() {
  // generate fake data
  Matrix data(100,2);
  for(int k=0; k<100; k++) {
    data(k,0)=0.1*k;
    data(k,1)=polynomial(data(k,0));
    cout << data(k,0) << ", " << data(k,1) << endl;
  }
  Matrix x=FitPolynomial(data,4);
  cout << x << endl;
}

float exponentials_mixed(float t) {
  return 0.50*exp(0.1*t)+0.25*exp(0.3*t)+0.25*t*t+normal()*2;
}

///
/// example: fit fake data
///

void test_fit2() {
  Matrix data(100,2);
  for(int k=0; k<100; k++) {
    data(k,0)=0.1*k;
    data(k,1)=exponentials_mixed(data(k,0));
    cout << data(k,0) << ", " << data(k,1) << endl;
  }
  Matrix A(100,3);
  Matrix b(100,1);
  for(int k=0; k<100; k++) {
    A(k,0)=exp(0.1*data(k,0));
    A(k,1)=exp(0.3*data(k,0));
    A(k,2)=data(k,0)*data(k,0);
    b(k)=data(k,1);
  }

  Matrix x=inverse(transposed(A)*A)*transposed(A)*b;
  cout << x << endl;

  Matrix L=Cholesky(transposed(A)*A);
  x=inverse(transposed(L))*inverse(L)*transposed(A)*b;
  cout << x << endl;

}

///
/// IO function for reading and writing csv files
///

void matrix2file(const Matrix& A, string filename) {
  FILE* fp=fopen(filename.c_str(),"w");
  for(int r=0; r<A.nrows; r++) {
    for(int c=0; c<A.ncols; c++) {
      if(c!=0) fprintf(fp,",");
      fprintf(fp,"%f",A(r,c));
    }
    fprintf(fp,"\n");
  }	
  fclose(fp);
}

Matrix file2matrix(int nrows, int ncols, string filename) {
  Matrix A(nrows,ncols);
  FILE* fp=fopen(filename.c_str(),"r");
  fseek(fp,0,SEEK_SET);
  for(int r=0; r<A.nrows; r++) {
    for(int c=0; c<A.ncols; c++) {
      string s="";
      while(!feof(fp)) {
	char c=fgetc(fp);
	if((c==',') || (c=='\n')) break;
	if((c!=' ') && (c!='\t') && (c!='\r')) s=s+c;
      }
      A(r,c)=atof(s.c_str());
    }
  }			
  fclose(fp);
  return A;
}

///
/// class Function with solvers
///

class Function {
public:
  virtual double f(double)=0;
  virtual double g(double x) {
    return f(x)+x;
  }
  double f1(double x) {
    double h=EPSILON;
    return (f(x+h)-f(x))/h;
  }
  double f2(double x) {
    double h=EPSILON;
    return (f(x+h)-2.0*f(x)+f(x-h))/(h*h);
  }
  double g1(double x) {
    double h=EPSILON;
    return (g(x+h)-g(x))/h;
  }
  double SolveFixedPoint(double x_guess) {
    double x=x_guess;
    double x_old=x+2.0*PRECISION;
    while(abs(x_old-x)>=PRECISION) {
      cout << x_old << "\t" << x << "\t" << g1(x) << endl;
      if(abs(g1(x))>=1) throw Exception("NoConvergence");
      x_old=x;
      x=g(x);
    }
    return x;		
  }
  double SolveBisection(double a, double b) {
    double fa=f(a);
    double fb=f(b);
    double x, fx;
    if(fa==0) return a;
    if(fb==0) return b;
    if(fa*fb>0) throw Exception("WrongParameters");
		
    for(int k=0; k<20; k++) {
      cout << x << endl;
      x=(a+b)/2;
      fx=f(x);
      if(abs(fx)<PRECISION) {
	return x;
      } else if(fx*fa<0) {
	b=x; fb=fx;
      } else if(fx*fb<0) {
	a=x; fa=fx;
      }
    }
    return x;
  }


  double OptimizeBisection(double a, double b) {
    double fa=f1(a);
    double fb=f1(b);
    double x, fx;
    if(fa==0) return a;
    if(fb==0) return b;
    if(fa*fb>0) throw Exception("WrongParameters");
		
    for(int k=0; k<20; k++) {
      cout << x << endl;
      x=(a+b)/2;
      fx=f1(x);
      if(abs(fx)<PRECISION) {
	return x;
      } else if(fx*fa<0) {
	b=x; fb=fx;
      } else if(fx*fb<0) {
	a=x; fa=fx;
      }
    }
    return x;
  }







  double SolveNewton(double x) {
    double x_old=x+PRECISION;
    double f1x;
    for(int k=0; k<20; k++) {
      cout << x << endl;
      f1x=f1(x);	
      if(abs(f1x)<PRECISION) throw Exception("Instability");
      x_old=x;
      x=x-f(x)/f1x;
      if(abs(x-x_old)<PRECISION) return x;
    }
    throw Exception("NoCovergence");
  }

  double OptimizeNewton(double x) {
    double x_old=x+PRECISION;
    double f2x;
    for(int k=0; k<20; k++) {
      cout << x << endl;
      f2x=f2(x);	
      if(abs(f2x)<PRECISION) throw Exception("Instability");
      x_old=x;
      x=x-f1(x)/f2x;
      if(abs(x-x_old)<PRECISION) return x;
    }
    throw Exception("NoCovergence");
  }

  double SolveNewtonBisection(double a, double b) {
    double fa=f(a);
    double fb=f(b);
    double x, fx;
    if(fa==0) return a;
    if(fb==0) return b;
    if(fa*fb>0) throw Exception("WrongParameters");
    double f1x=0;
    for(int k=0; k<20; k++) {
      cout << x << endl;
      if(abs(f1x)>PRECISION) 
	x=x-fx/f1x;
      if((abs(f1x)<=PRECISION) || (x<=a) || (x>=b)) 
	x=(a+b)/2;
      fx=f(x);
      f1x=f1(x);
      if(abs(fx)<PRECISION) {
	return x;
      } else if(fx*fa<0) {
	b=x; fb=fx;
      } else if(fx*fb<0) {
	a=x; fa=fx;
      }
    }
    return x;
  }
  double OptimizeNewtonBisection(double a, double b) {
    double f1a=f1(a);
    double f1b=f1(b);
    double x, f1x;
    if(f1a==0) return a;
    if(f1b==0) return b;
    if(f1a*f1b>0) throw Exception("WrongParameters");
    double f2x=0;
    for(int k=0; k<20; k++) {
      cout << x << endl;
      if(abs(f1x)>PRECISION) 
	x=x-f1x/f2x;
      if((abs(f2x)<=PRECISION) || (x<=a) || (x>=b)) 
	x=(a+b)/2;
      f1x=f1(x);
      f2x=f2(x);
      if(abs(f1x)<PRECISION) {
	return x;
      } else if(f1x*f1a<0) {
	b=x; f1b=f1x;
      } else if(f1x*f1b<0) {
	a=x; f1a=f1x;
      }
    }
    return x;
  }
  double SolveSecant(double x) {
    double x_old;
    double fx, f1x, f_old;
    x_old=x-0.0001;
    f_old=f(x_old);
    for(int k=0; k<20; k++) {
      fx=f(x);
      f1x=(fx-f_old)/(x-x_old);	
      if(abs(f1x)<PRECISION) throw Exception("Instability");
      f_old=fx;
      x_old=x;
      x=x-fx/f1x;
      if((k>1) && (abs(x-x_old)<PRECISION)) return x;
    }
    throw Exception("NoConvergence");
  }
  double OptimizeSecant(double x) {
    double x_old;
    double f1x, f2x, f1_old;
    x_old=x-0.0001;
    f1_old=f1(x_old);
    for(int k=0; k<20; k++) {
      cout << x << endl;
      f1x=f1(x);
      f2x=(f1x-f1_old)/(x-x_old);	
      if(abs(f2x)<PRECISION) throw Exception("Instability");
      f1_old=f1x;
      x_old=x;
      x=x-f1x/f2x;
      if((k>1) && (abs(x-x_old)<PRECISION)) return x;
    }
    throw Exception("NoConvergence");
  }
  double OptimizeGoldenSection(double a, double b) {
        double t=(sqrt(5.0)-1)/2;
	double x1=a+(1.0-t)*(b-a);
	double x2=a+(t)*(b-a);
	double fa=f(a);
	double fb=f(b);
	double f1=f(x1);
	double f2=f(x2);
	while(abs(b-a)>PRECISION) {
	  cout << (x1-a)/(b-a) << endl;
		if(f1>f2) {
			a=x1;
			fa=f1;	
			x1=x2;
			f1=f2;
			x2=a+(t)*(b-a);
			f2=f(x2);
		} else {
			b=x2;
			fb=f2;
			x2=x1;
			f2=f1;
			x1=a+(1.0-t)*(b-a);
			f1=f(x1);
		}	
	}
	return b;
  }	
  double OptimizeGoldenSection2(double a, double b, double t=0.8) {
	double x1=a+(1.0-t)*(b-a);
	double x2=a+(t)*(b-a);
	double fa=f(a);
	double fb=f(b);
	double f1=f(x1);
	double f2=f(x2);
	while(abs(b-a)>PRECISION) {
	  cout << (x1-a)/(b-a) << endl;
		if(f1>f2) {
			a=x1;
			fa=f1;	
			x1=x2;
			f1=f2;
			x2=x1+(t)*(b-x1);
			f2=f(x2);
		} else {
			b=x2;
			fb=f2;
			x2=x1;
			f2=f1;
			x1=a+(1.0-t)*(x2-a);
			f1=f(x1);
		}	
	}
	return b;
  }	
  double IntegrateNaive(double a, double b) {
	double I, h, Iold=0.0;
	for(int N=2;; N*=2) {
		cout << N << endl;
		Iold=I;
		I=0.0;
		h=(b-a)/N;
		for(int i=0; i<N; i++) {
			I+=h*f(a+i*h);
		}
		if(N!=2 && abs(I-Iold)<PRECISION) return I;
	}
	return I;
  }
  double IntegrateNaive2(double a, double b) {
	double I, h, Iold=0.0;
	for(int N=2;; N*=2) {
		Iold=I;
		I=0.5*f(a);
		h=(b-a)/N;
		for(int i=1; i<N; i++) {
			I+=f(a+i*h);
		}
		I+=0.5*f(b);
		cout << N << " " << I << endl;
		if(N>2 && abs(I-Iold)*h<PRECISION) return h*I;
	}
	return h*I;
  }

  double IntegrateQuadrature(double a, double b, int N) {
	// blows up for large N
	double h=(b-a)/N;
	Matrix A(N,N), c(N), w(N);
	for(int i=0; i<N; i++) {
		for(int j=0; j<N; j++)
			A(i,j)=pow(a+(j+1)*h,i);
		c(i)=(pow(b,i+1)-pow(a,i+1))/(i+1);
	}
	w=inverse(A)*c;
	double I=0.0;
	for(int i=0; i<N; i++) {
		I+=w(i)*f(a+(i+1)*h);
	}
	return I;	
  }
  double IntegrateQuadrature2(double a, double b) {
	// blows up for large n
	double I, Iold;
	for(int n=2; ; n*=2) {
		cout << n << endl;
		Iold=I;
		I=IntegrateQuadrature(a, b, n);
		cout << "I=" << I << endl;
		if(n>2 && abs(I-Iold)<PRECISION) return I;
	}	
	return I;
  }
  int IntegrateAdaptativeQuadratureCounter;
  double IntegrateAdaptativeQuadrature(double a, double b, int n1=3, int n2=4){
	double I1=0,I2=0;
	try {
		I1=IntegrateQuadrature(a,b,n1);
		I2=IntegrateQuadrature(a,b,n2);
	} catch (Exception e) {
		cout << "ERROR n2 is too large\n";
		throw Exception("n2 is too large");
	}
	double m=a+(b-a)/2;
	if(m<=a || m>=b) {
		cout << "warining - precision problem\n";
		return I2;
	}
	if(abs(I1-I2)<PRECISION) return I2;
	IntegrateAdaptativeQuadratureCounter++;
	return IntegrateAdaptativeQuadrature(a,m,n1,n2)+
	       IntegrateAdaptativeQuadrature(m,b,n1,n2);
  }
};

///
/// example of function
///

class MyFunction : public Function {
public: double f(double x) { return x*x*x+x-1; }	
};

///
/// class MultiDimensionalFunction with solvers
///


class MultiDimensionalFunction {
public:
  virtual Matrix f(const Matrix& x)=0;
  Matrix Jacobian(const Matrix& x) {
    double h=EPSILON;
    int n=x.nrows;
    Matrix J(n,n);
    Matrix A(n,1), x_plus_h(n,1);
    x_plus_h=x; 
    for(int j=0; j<n; j++) {
      if(j>0) x_plus_h(j-1)-=h;
      x_plus_h(j)+=h;
      A=f(x_plus_h)-f(x);
      for(int i=0; i<n; i++) J(i,j)=A(i)/h;
    }
    return J;
  }

  Matrix SolveNewton(Matrix x) {
    Matrix x_old(x.nrows,1);
    Matrix J(x.nrows,x.nrows);
    Matrix h(x.nrows,1);
    for(int k=0; k<100; k++) {
      J=Jacobian(x);
      cout << x << endl;
      cout << f(x) << endl;
      if(norm_1(J)<PRECISION) throw Exception("Instability");
      x_old=x;
      h=inverse(J)*f(x);
      fix(h);
      x=x-h;
      if(norm_1(x-x_old)<PRECISION) return x;
    }
    throw Exception("NoConvergence");
  }
  void fix(Matrix& h) {
    double max_jump=10;
    double m=0;
    for(int i=0; i<h.nrows; i++) 
      if(abs(h(i))>m) m=abs(h(i));
    if(m>max_jump) {
      for(int i=0; i<h.nrows; i++) 
	h(i)*=max_jump/m;
    }
  }
};

///
/// Example of multidimensional function
///


class MyMultiDimensionalFunction : public MultiDimensionalFunction {
public: Matrix f(const Matrix& x) { 
  Matrix y(x.nrows,1);
  y(0)=x(0)*x(1)*x(2)+8;
  y(1)=x(1)-x(0)-3.0*x(2); 
  y(2)=x(0)*x(2)+x(1);
  return y;
}	
};

void test_Function() {
  MyFunction myobj;
  try {
    double x=myobj.SolveNewtonBisection(0,1);
    cout << "x=" <<x << endl;
    cout << "f(x)=" << myobj.f(x) << endl;
  } catch(string e) {
    cout << "OOPS:" << e << endl;
  }
}

Matrix OptimizerForQuadraticFunctionWithLinearConstraints(
	Matrix A,
	Matrix b,
	Matrix B,
	Matrix d) {
	// A is NxN
	// b is Nx1
	// B is MxN
	// d is Mx1
	int N=A.nrows;
	int M=B.nrows;
	Matrix A1(N+M,N+M);
	Matrix b1(N+M,1);
	Matrix x1(N+M,1);
	for(int i=0; i<N; i++)
	  for(int j=0; j<N; j++)
	     A1(i,j)=A(i,j);
	for(int i=0; i<M; i++)
	  for(int j=0; j<N; j++)
	     A1(i+N,j)=A1(j,i+N)=B(i,j);
	for(int i=N; i<N+M; i++)
	  for(int j=N; j<N+M; j++)
	     A1(i,j)=0;
	for(int i=0; i<N; i++) b1(i)=-b(i);
	for(int i=0; i<M; i++) b1(i+N)=d(i);
	x1=inverse(A1)*b1;
	Matrix x(N);
	for(int i=0; i<N; i++) x(i)=x1(i);
	return x;
}

class FunctionOfMultipleVariables : public Function {
	private:
		Matrix x_sd, s_sd;
	public:
	double f(double alpha) {
		Matrix x=x_sd+alpha*s_sd;
		return f(x);
	}
	virtual double f(const Matrix& x)=0;
	Matrix gradient(const Matrix& x) {
		double h=EPSILON;
		int n=x.nrows;
		Matrix v(n);
    		Matrix x_plus_h=x; 
	        for(int j=0; j<n; j++) {
	            x_plus_h(j)+=h;
		    v(j)=(f(x_plus_h)-f(x))/h;
		    x_plus_h(j)-=h;
    		}		
		return v;
	}
	Matrix Hessian(const Matrix& x) {
		double h=EPSILON;
		int n=x.nrows;
                Matrix H(n,n);
		Matrix x_plus_hi=x; 
		Matrix x_plus_hi_minus_hj=x;
		Matrix x_minus_hj=x; 
		double tmp;
                for(int i=0; i<n; i++) {
      			x_plus_hi(i)+=h;	
      			x_plus_hi_minus_hj(i)+=h;
			for(int j=0; j<n; j++) {
	      			x_plus_hi_minus_hj(j)-=h;
				x_minus_hj(j)-=h;
				H(i,j)=(f(x_plus_hi)-f(x_plus_hi_minus_hj)-f(x)+f(x_minus_hj))/(h*h);
	      			x_plus_hi_minus_hj(j)+=h;
				x_minus_hj(j)+=h;				
			}
      			x_plus_hi(i)-=h;	
      			x_plus_hi_minus_hj(i)-=h;
		   }
		return H;
	}
	Matrix OptimizeSteepestDescent(const Matrix& x0) {
		x_sd=x0;
		Matrix x_old=x_sd;
		double alpha;
		for(int k=0; k<100; k++) {				
			s_sd=gradient(x_sd);			
			try {
				alpha=OptimizeSecant(0.0);
			} catch(Exception e) {
			  cout << "oops, not sure if converges!\n";
				break;
			}
			x_old=x_sd;
			x_sd=x_sd+alpha*s_sd;
			if(norm_2(x_sd-x_old)<PRECISION) break;
		}
		return x_sd;
	}

  Matrix OptimizeNewton(Matrix x) {
    Matrix x_old;
    Matrix g;
    Matrix H;
    for(int k=0; k<100; k++) {
      cout << x << endl;
      g=gradient(x);
      H=Hessian(x);
      if(norm_1(H)<PRECISION) throw Exception("Instability");
      x_old=x;
      x=x-inverse(H)*g;	
      if(norm_1(x-x_old)<PRECISION) return x;
    }
    throw Exception("NoCovergence");
  }
  Matrix OptimizeNewtonWithLinearContrants(Matrix x, Matrix B, Matrix d) {
	// contraint is Bx-d=0
    Matrix x_old;
    Matrix b;
    Matrix A;
    for(int k=0; k<100; k++) {
      cout << x << endl;
      b=gradient(x);
      A=Hessian(x);
      if(norm_1(A)<PRECISION) throw Exception("Instability");
      x=OptimizerForQuadraticFunctionWithLinearConstraints(A,b,B,d);
      if(norm_1(x-x_old)<PRECISION) return x;
    }
    throw Exception("NoCovergence");
  }

};

void test_MultiDimensionalFunction() {
  MyMultiDimensionalFunction myobj;
  try {
    Matrix x(3,1);
    x(0)=1; 
    x(1)=-1;
    x(2)=2;
    x=myobj.SolveNewton(x);
    cout << "x=" << x << endl;
    cout << "f(x)=" << myobj.f(x) << endl;
  } catch(string e) {
    cout << "OOPS:" << e << endl;
  }
}

void test_IO() {
  Matrix A(2,2);
  A(0,0)=1;
  A(0,1)=2;
  A(1,0)=3;
  A(1,1)=4;
  matrix2file(A,"test.csv"); // saves in csv
  Matrix B=file2matrix(2,2,"test.csv"); // reads csv
  cout << B << endl;
}

