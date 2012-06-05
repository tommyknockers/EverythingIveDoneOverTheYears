#include <locale>
#include <iostream>
#include <string>

using namespace std;

locale loc;
const collate<char>& coll = use_facet<collate<char> >(loc);

int main() {
  cout << "Comparing hash codes of strings HH2111111222 and JJ2111111112" << endl;
  string string1 = "HH2111111222";
  
  long myhash = coll.hash(string1.data(),string1.data()+string1.length());
  cout << "Hash for " << string1 << " is " << myhash << endl;

  string string2 = "JJ2111111112";
  long myhash2 = coll.hash(string1.data(),string1.data()+string1.length());
  cout << "Hash for " << string2 << " is " << myhash2 << endl;

  if (myhash == myhash2) {
    cout << "They are the same. :(" << endl;
  }
  
  return 0;
}

