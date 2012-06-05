#include <iostream>
#include <vector>

using namespace std;

int main() {
  int boardSize;
  int queenLines;
  int k, x, y, s, t;
  cin >> boardSize;
  while (boardSize != 0) {
    cin >> queenLines;
    vector<int> rows;
    vector<int> cols;
    vector<int> leftDiags;
    vector<int> rightDiags;
    for (int i = 0; i < boardSize; i++) {
      rows.push_back(0);
      cols.push_back(0);
    }
    for (int i = 0; i < boardSize*2-1; i++) {
      leftDiags.push_back(0);
      rightDiags.push_back(0);
    }
    for (int i = 0; i < queenLines; i++) {
      cin >> k >> x >> y >> s >> t;
      for (int j = 0; j < k; j++) {
        int xPos = x + j*s;
        int yPos = y + j*t;
        cols[xPos-1]++;
        rows[yPos-1]++;
        leftDiags[(xPos+yPos)-2]++;
        rightDiags[((boardSize-xPos+1)+yPos)-2]++;
      }
    }
    
    int collisions = 0;
    for (int i = 0; i < boardSize; i++) {
      if (rows[i] >= 2)
        collisions += rows[i]-1;
      if (cols[i] >= 2)
        collisions += cols[i]-1;
    }
    for (int i = 0; i < boardSize*2-1; i++) {
      if (leftDiags[i] >= 2)
        collisions += leftDiags[i]-1;
      if (rightDiags[i] >= 2)
        collisions += rightDiags[i]-1;
    }
    cout << collisions << endl;

    cin >> boardSize;
  }
  return 0;
}

