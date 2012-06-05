#include <iostream>
#include <fstream>
#include <stdlib.h>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

typedef long long unsigned int ullong; // pronounced ooh-long
int R = 6; // the length of each row

// functions to get, set and shift bits by rows & columns
// and one function to print a long

ullong shift(ullong a, int r, int c) {
  return a << (r*R + c);
}

ullong get(ullong a, int r, int c) {
  return (a & (1LL << (r*R + c))) > 0;
}

ullong set(ullong a, int r, int c, bool val=true) {
  return (a | (1LL << (r*R + c)));
}

ullong rot90(ullong a) {
  int maxRow = 0;
  for (int r = 0; r < R; r++) {
    for (int c = 0; c < R; c++) {
      if (get(a, r, c))
        maxRow = r;
    }
  }

  ullong b = 0LL;
  for (int r = 0; r < R; r++) {
    for (int c = 0; c < R; c++) {
      if (get(a, r, c))
        b = b | set(b, c, maxRow-r);
    }
  }

  return b;
}

void print(ullong a) {
  for (int r = 0; r < R; r++) {
    for (int c = 0; c < R; c++) {
      if (get(a, r, c))
        cout << "#";
      else
        cout << ".";
    }
    cout << endl;
  }
}


#define NUM_PIECES 7
vector<ullong> pieceData[NUM_PIECES];

ullong best = 0LL;

ullong theOne = 0LL;

int groupsize = 3;

vector<int> curPieces;

vector<pair<int, int> > dimensions;

bool isBetterThanBest(ullong state) {
  /*
  if (state > best)
    return true;
  else
    return false;
  */
  for (int r = 0; r < R; r++) {
    for (int c = 0; c < R; c++) {
      if (get(best, r, c) > get(state, r, c)) {
        return false;
      }
      if (get(best, r, c) < get(state, r, c)) {
        return true;
      }
    }
  }
  // if we reach this point, they are the same anyway, so, whatever
  return true;
}

//void solve(ullong a, next);
// an integer called best that stores the best solution we've got
// a group size of 3
// a function called solve which takes some params
//   1) a state parameter
//   2) a next parameter which starts at 0 and tells us which index from curPieces to work with

void solve(ullong state=0LL, int next=0, ullong shape=0LL) {
  if (next == groupsize) {
    /*
    if (state == theOne) {
      if (isBetterThanBest(state))
        cout << "Found it and it's better than best!!\n";
      else
        cout << "theOne is not better than the best\n";
    }
    */
    
    if (!isBetterThanBest(state))
      return;
    shape = state;
    state = 0LL;
  }

  if (next == 2*groupsize) {
    /*
    if (state == theOne) {
      cout << "WE'RE ALMOST THERE!!!\n";
    }
    */

    if (state == shape && isBetterThanBest(state)) {
      best = state;
      //print(state);
      //cout << "------\n";

    }
    return ;
  }

  int pieceInd = curPieces[next];
  int height = dimensions[pieceInd].first;
  int width = dimensions[pieceInd].second;
  for (int rotation = 0; rotation < pieceData[pieceInd].size(); rotation++) {
    ullong piece = pieceData[pieceInd][rotation];
    //cout << "rotation#" << rotation << endl;
    for (int shiftR = R-height-1; shiftR >= 0; shiftR--) {
      for (int shiftC = R-width-1; shiftC >= 0; shiftC--) {
        ullong b = shift(piece, shiftR, shiftC);
        //print(b);
        //cout << "------------\n";
        if (next >= groupsize) {
          if ((shape & b) == b && (state & b) == 0LL) {
            /*
            print(state);
            print(b);
            print(state | b);
            cout << "------------\n";
            */
            solve(state | b, next+1, shape);
          }
        } else {
          if ((state & b) == 0LL) {
            // start working from this state
            /*
            print(state);
            print(b);
            print(state | b);
            cout << "------------\n";
            */
            solve(state | b, next+1, shape);
          }
        }
      }
    }

    // for each piece, shift the piece until
    //print(pieceData[i][rotation]);

    height ^= width;
    width ^= height;
    height ^= width;
  }
}

int main() {
  string pieceStrings[NUM_PIECES][2] = {
    {"####", "...."},
    {"###.", "#..."},
    {"###.", ".#.."},
    {"###.", "..#."},
    {"##..", ".##."},
    {"##..", "##.."},
    {".##.", "##.."}
  };

  //vector<ullong> pieceData[NUM_PIECES]; // each vector contains rotations

  for (int i = 0; i < NUM_PIECES; i++) {
    pieceData[i].push_back(0LL);
    for (int r = 0; r < 2; r++) {
      for (int c = 0; c < 4; c++) {
        if (pieceStrings[i][r][c] == '#')
          pieceData[i][0] = set(pieceData[i][0], r, c);
      }
    }
  }

  // create the rotations for each piece
  for (int i = 0; i < NUM_PIECES; i++) {
    // one rotation for the horizontal bar
    if (i == 0) {
      pieceData[i].push_back(rot90(pieceData[i][0]));
    }

    // 4 rotations for l pieces & t piece
    if (i >= 1 && i <= 3) {
      pieceData[i].push_back(rot90(pieceData[i][0]));
      pieceData[i].push_back(rot90(rot90(pieceData[i][0])));
      pieceData[i].push_back(rot90(rot90(rot90(pieceData[i][0]))));
    }

    // 2 rotations for the snake pieces
    if (i == 4 || i == 6) {
      pieceData[i].push_back(rot90(pieceData[i][0]));
    }
  }

  for (int i = 0; i < NUM_PIECES; i++) {
    int maxCol = 0;
    int maxRow = 0;
    for (int r = 0; r < R; r++) {
      for (int c = 0; c < R; c++)
      if (get(pieceData[i][0], r, c)) {
        if (r > maxRow)
          maxRow = r;
        if (c > maxCol)
          maxCol = c;
      }
    }
    dimensions.push_back(pair<int, int>(maxRow, maxCol));
  }

  // some tests
  //ullong piece = pieceData[0][0];
  //if (piece < shift(piece, 1, 3))
    //cout << "WTF!" << endl;
  //cout << piece << endl << shift(piece, 1, 3) << endl;

  ifstream fin("top.in");

  theOne = theOne | pieceData[0][0] | shift(pieceData[0][0], 1, 1) | shift(pieceData[0][0], 2, 2);

  // read in data sets
  int sets;
  fin >> sets;

  for (int i = 0; i < sets; i++) {
    string group1, group2;
    fin >> group1 >> group2;
    curPieces.clear();
    //cout << group1 << " " << group2 << endl;
    for (int j = 0; j < groupsize; j++)
      curPieces.push_back(-1 * ('A'-group1[j]));
    for (int j = 0; j < groupsize; j++)
      curPieces.push_back(-1 * ('A'-group2[j]));
    cout << i+1 << endl;
    //for (int j = 0; j < curPieces.size(); j++)
      //cout << curPieces[j] << endl;
    best = 0LL;
    solve();
    if (best == 0LL)
      cout << "No solution\n";
    else
      print(best);
    //cout << "---------------" << endl;
  }
}

