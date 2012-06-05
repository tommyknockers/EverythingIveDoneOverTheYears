#include <iostream>
#include <vector>

using namespace std;

long long gcd(long long, long long);
vector<long long> denominators;

int main() {
  long long N, D;
  cin >> N >> D;
  while (N != 0 && D != 0) {
    // first reduce the fraction
    long long g = gcd(N,D);
    N /= g;
    D /= g;
    long long oldN = N;
    long long oldD = D;
    
    // do some stuff
    while (N > 0) {
      int start = 2;

      if (denominators.size() > 0)
        start = denominators[denominators.size()-1];


      for (long long i = start; i < 1000001L; i++) {
        if (i == 1000000) {
          //cout << "Increment denominator" << endl;
          denominators[denominators.size()-1]++;
          break;
        }

        //cout << i << endl;
        long long b = i;
        //cout << "Our current fraction is > " << N << "/" << D << endl;
        if (N*b >= D) {
          //cout << "N*b is " << N*b << endl;
          //cout << "D*b is " << D*b << endl;
          //cout << "We're gonna subtract 1/" << i << endl;
          oldN = N;
          oldD = D;
          N = N * b;
          //cout << "Our current fraction is > " << N << "/" << D*b << endl;
          //cout << "Subtracting > " << D << endl;
          N -= D;
          D = D * b;

          g = gcd(N,D);
          N /= g;
          D /= g;
          if (D < 1000000)
            denominators.push_back(i);
          else {
            N = oldN;
            D = oldD;
            //cout << "Nevermind!" << endl;
            continue;
          }

          //cout << "Our current fraction is > " << N << "/" << D << endl;
          break;
        }
      }
    }

    for (int i = 0; i < denominators.size(); i++) {
      cout << denominators[i];
      if (i < denominators.size()-1)
        cout << " ";
    }
    cout << endl;

    cin >> N >> D;
    denominators.clear();
  }
  return 0;
}


long long gcd(long long a, long long b) {
  long long c;
  while (1) {
    c = a%b;
    if (c == 0)
      return b;
    a = b;
    b = c;
  }
}


