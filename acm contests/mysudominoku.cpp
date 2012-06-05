#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int board[9][9];

int initialDominoes;

vector<pair<int, int> > dominoes;

void print(int board[9][9]) {
  for (int i = 0; i < 9; i++) {
#ifdef DEBUG
    if ((i % 3 == 0) && i > 0)
      cout << endl;
#endif

    for (int j = 0; j < 9; j++) {

#ifdef DEBUG
      if ((j % 3 == 0) && j > 0)
        cout << " ";
#endif
      
      if (board[i][j] == 0)
        cout << 'E';
      else
        cout << board[i][j];

    }
    cout << endl;
  }
}

bool isValid(int board[9][9]) {
  for (int i = 0; i < 9; i++)
    for (int j = 0; j < 9; j++)
      if (board[i][j] == 0)
        return false;

  return true;
}


unsigned long getAvailNums(int row, int col, int board[9][9]) {
  unsigned long cantUse = 0;
  // check all the values in the current row
  for (int c = 0; c < 9; c++) {
    if (board[row][c] != 0) {
      cantUse |= (1L << board[row][c]-1);
    }
  }

  // check all the values in the current column
  for (int r = 0; r < 9; r++) {
    if (board[r][col] != 0) {
      cantUse |= (1L << board[r][col]-1);
    }
  }

  // check all the values in the current square
  for (int r = 3*(row/3); r < 3*(row/3)+3; r++) {
    for (int c = 3*(col/3); c < 3*(col/3)+3; c++) {
      if (board[r][c] != 0) {
        cantUse |= (1L << board[r][c]-1);
      }
    }
  }

  return cantUse ^ (unsigned long)-1;
}

void testGetAvailNums(int row, int col, int board[9][9]) {
  print(board);
  unsigned long canUse = getAvailNums(row, col, board);
  cout << "In row: " << row+1 << ", col: " << col+1 << " the #'s are: ";
  for (int i = 0; i < 9; i++) {
    if (canUse & (1 << i))
      cout << i+1 << " ";
  }
  cout << endl;
}


int dominoToIndex(int val1, int val2) {
  int i = 0;
  for (int a = 1; a < 10; a++) {
    for (int b = a + 1; b < 10; b++) {

      if ((a == val1 and b == val2) or
          (a == val2 and b == val1))
          return i;

      i += 1;
    }
  }
  cout << "We returned -1!\n";
  return -1;
}


vector<pair<int, int> > getAvailDoms(unsigned  canUse1, unsigned canUse2, unsigned long used) {
  vector<pair<int, int> > d;
  //canUse1 = canUse1 ^ (unsigned long)(-1);
  //canUse2 = canUse2 ^ (unsigned long)(-1);
  for (int i = 0; i < dominoes.size(); i++) {
    // if this domino has been used already
    if (used & (1L << i))
      continue;
    int a = dominoes[i].first-1;
    int b = dominoes[i].second-1;
    if (canUse1 & (1 << a) && canUse2 & (1 << b)) {
      pair<int, int> yar;
      yar.first = a+1;
      yar.second = b+1;
      d.push_back(yar);
    }
    if (canUse1 & (1 << b) && canUse2 & (1 << a)) {
      pair<int, int> yar;
      yar.first = b+1;
      yar.second = a+1;
      d.push_back(yar);
    }
  }
  return d;
}

void testGetAvailDoms(unsigned  canUse1, unsigned canUse2, unsigned long used) {
  vector<pair<int, int> > d = getAvailDoms(canUse1, canUse2, used);
  cout << "Dominoes available: \n";
  for (int i = 0; i < d.size(); i++) {
    cout << d[i].first << "-" << d[i].second << endl;
  }
}

void testPrintListOfUsedDominoes(unsigned long used) {
  cout << "We used: ";
  for (int i = 0; i < dominoes.size(); i++) {
    if (used & (1L << i))
      cout << dominoes[i].first << "-" << dominoes[i].second << ", ";
  }
  cout << endl;
}

bool solve(int board[9][9], unsigned long used) {
  // find first empty space that can hold part of a vertical or horizontal domino
  // if encounters an empty space that can't be filled
  // we should return false so that the previous function knows to do something different.
  
  if (isValid(board)) {
    print(board);
    //cout << "hooray!!!\n";
    return true;
  }

  // if there's ever an odd number of spaces, return false
  int totalSpaces = 0;
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (board[i][j] == 0)
        totalSpaces++;
    }
  }
  if (totalSpaces % 2 == 1)
    return false;

  // first search the board for squares that can't have any neighbors
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (board[i][j] == 0) {
        int fullEdges = 0;
        int numEdges = 0;
        if (i > 0) {
          numEdges++;
          if (board[i-1][j] != 0)
            fullEdges++;
        }

        if (i < 9) {
          numEdges++;
          if (board[i+1][j] != 0)
            fullEdges++;
        }

        if (j > 0) {
          numEdges++;
          if (board[i][j-1] != 0)
            fullEdges++;
        }

        if (j < 9) {
          numEdges++;
          if (board[i][j+1] != 0)
            fullEdges++;
        }

        // if an empty square is surrounded by pieces, return false because the algorithm messed up
        if (fullEdges == numEdges) {
          return false;
        }
      }
    }
  }

  // look for the first spot we can put a horizontal piece
  int hrow = -1, hcol = -1;
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 8; j++) {
      if (board[i][j] == 0 && board[i][j+1] == 0 && hrow == -1) {
        hrow = i;
        hcol = j;
      }
    }
  }


  if (hrow != -1) {
    //board[hrow][hcol] = 'H';
    //board[hrow][hcol+1] = 'H';
    unsigned canUse1 = getAvailNums(hrow, hcol, board);
    unsigned canUse2 = getAvailNums(hrow, hcol+1, board);

    vector<pair<int, int> > d = getAvailDoms(canUse1, canUse2, used);
#ifdef DEBUG
    cout << "Horiz\n";
    cout << "P1: " << hrow+1 << "," << hcol+1 << " P2: " << hrow+1 << "," << hcol+2 << endl;
    print(board);
    testGetAvailDoms(canUse1, canUse2, used);
    cout << "\n";
#endif
    //return false;

    for (int i = 0; i < d.size(); i++) {
      board[hrow][hcol] = d[i].first;
      board[hrow][hcol+1] = d[i].second;

      unsigned long newUsed = used;
      int dIndex = dominoToIndex(d[i].first, d[i].second);
      newUsed |= (1L << dIndex);
      if (solve(board, newUsed))
        return true;
      else {
        board[hrow][hcol] = 0;
        board[hrow][hcol+1] = 0;
      }
    }
  }

  // look for the first spot we can put a vertical piece
  int vrow = -1, vcol = -1;
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 9; j++) {
      if (board[i][j] == 0 && board[i+1][j] == 0 && vrow == -1) {
        vrow = i;
        vcol = j;
      }
    }
  }

  if (vrow != -1) {
    unsigned  canUse1 = getAvailNums(vrow, vcol, board);
    unsigned  canUse2 = getAvailNums(vrow+1, vcol, board);


    vector<pair<int, int> > d = getAvailDoms(canUse1, canUse2, used);

#ifdef DEBUG
    cout << "Vertical\n";
    cout << "P1: " << vrow+1 << "," << vcol+1 << " P2: " << vrow+1 << "," << vcol+2 << endl;
    print(board);
    testGetAvailDoms(canUse1, canUse2, used);
    cout << "\n";
#endif

    for (int i = 0; i < d.size(); i++) {
      board[vrow][vcol] = d[i].first;
      board[vrow+1][vcol] = d[i].second;

      unsigned long newUsed = used;
      int dIndex = dominoToIndex(d[i].first, d[i].second);
      newUsed |= (1L << dIndex);
      if (solve(board, newUsed))
        return true;
      else {
        board[vrow][vcol] = 0;
        board[vrow+1][vcol] = 0;
      }
    }
  }

  return false;
}



void printUnsignedInt(unsigned long value) {
   const int SHIFT = 8 * sizeof( unsigned long ) - 1;
   const unsigned long MASK = 1L << SHIFT;

   for ( int i = 1; i <= SHIFT + 1; i++ ) 
   {
      cout << ( value & MASK ? '1' : '0' );
      value <<= 1;

      if ( i % 8 == 0 )
         cout << ' ';
   }

   cout << endl;
}


void testDominoToIndex() {
  // test the domino to index function
  /*if (dominoToIndex(1,2) != 1)
    cout << "FUCK!\n";
  if (1 != dominoToIndex(1,2))
      cout << "FUCK!\n";
  if (2 != dominoToIndex(1,3))
      cout << "FUCK!\n";
  if (3 != dominoToIndex(1,4))
      cout << "FUCK!\n";
  if (4 != dominoToIndex(1,5))
      cout << "FUCK!\n";
  if (5 != dominoToIndex(1,6))
      cout << "FUCK!\n";
  if (6 != dominoToIndex(1,7))
      cout << "FUCK!\n";
  if (7 != dominoToIndex(1,8))
      cout << "FUCK!\n";
  if (8 != dominoToIndex(1,9))
      cout << "FUCK!\n";
  if (9 != dominoToIndex(2,3))
      cout << "FUCK!\n";
  if (dominoToIndex(2,4) != 10)
      cout << "FUCK!\n";
  if (dominoToIndex(2,5) != 11)
      cout << "FUCK!\n";
  if (dominoToIndex(2,6) != 12)
      cout << "FUCK!\n";
  if (dominoToIndex(2,7) != 13)
      cout << "FUCK!\n";
  if (dominoToIndex(2,8) != 14)
      cout << "FUCK!\n";
  if (dominoToIndex(2,9) != 15)
      cout << "FUCK!\n";
  if (dominoToIndex(3,4) != 16)
      cout << "FUCK!\n";
  if (dominoToIndex(3,5) != 17)
      cout << "FUCK!\n";
  if (dominoToIndex(3,6) != 18)
      cout << "FUCK!\n";
  if (dominoToIndex(3,7) != 19)
      cout << "FUCK!\n";
  if (dominoToIndex(3,8) != 20)
      cout << "FUCK!\n";
  if (dominoToIndex(3,9) != 21)
      cout << "FUCK!\n";
  if (dominoToIndex(4,5) != 22)
      cout << "FUCK!\n";
  if (dominoToIndex(4,6) != 23)
      cout << "FUCK!\n";
  if (dominoToIndex(4,7) != 24)
      cout << "FUCK!\n";
  if (dominoToIndex(4,8) != 25)
      cout << "FUCK!\n";
  if (dominoToIndex(4,9) != 26)
      cout << "FUCK!\n";
  if (dominoToIndex(5,6) != 27)
      cout << "FUCK!\n";
  if (dominoToIndex(5,7) != 28)
      cout << "FUCK!\n";
  if (dominoToIndex(5,8) != 29)
      cout << "FUCK!\n";
  if (dominoToIndex(5,9) != 30)
      cout << "FUCK!\n";
  if (dominoToIndex(6,7) != 31)
      cout << "FUCK!\n";
  if (dominoToIndex(6,8) != 32)
      cout << "FUCK!\n";
  if (dominoToIndex(6,9) != 33)
      cout << "FUCK!\n";
  if (dominoToIndex(7,8) != 34)
      cout << "FUCK!\n";
  if (dominoToIndex(7,9) != 35)
      cout << "FUCK!\n";
  if (dominoToIndex(8,9) != 36)
      cout << "FUCK!\n";*/

  printUnsignedInt(1L << dominoToIndex(1,2));
  printUnsignedInt(1L << dominoToIndex(1,3));
  printUnsignedInt(1L << dominoToIndex(1,4));
  printUnsignedInt(1L << dominoToIndex(1,5));
  printUnsignedInt(1L << dominoToIndex(1,6));
  printUnsignedInt(1L << dominoToIndex(1,7));
  printUnsignedInt(1L << dominoToIndex(1,8));
  printUnsignedInt(1L << dominoToIndex(1,9));
  printUnsignedInt(1L << dominoToIndex(2,3));
  printUnsignedInt(1L << dominoToIndex(2,4));
  printUnsignedInt(1L << dominoToIndex(2,5));
  printUnsignedInt(1L << dominoToIndex(2,6));
  printUnsignedInt(1L << dominoToIndex(2,7));
  printUnsignedInt(1L << dominoToIndex(2,8));
  printUnsignedInt(1L << dominoToIndex(2,9));
  printUnsignedInt(1L << dominoToIndex(3,4));
  printUnsignedInt(1L << dominoToIndex(3,5));
  printUnsignedInt(1L << dominoToIndex(3,6));
  printUnsignedInt(1L << dominoToIndex(3,7));
  printUnsignedInt(1L << dominoToIndex(3,8));
  printUnsignedInt(1L << dominoToIndex(3,9));
  printUnsignedInt(1L << dominoToIndex(4,5));
  printUnsignedInt(1L << dominoToIndex(4,6));
  printUnsignedInt(1L << dominoToIndex(4,7));
  printUnsignedInt(1L << dominoToIndex(4,8));
  printUnsignedInt(1L << dominoToIndex(4,9));
  printUnsignedInt(1L << dominoToIndex(5,6));
  printUnsignedInt(1L << dominoToIndex(5,7));
  printUnsignedInt(1L << dominoToIndex(5,8));
  printUnsignedInt(1L << dominoToIndex(5,9));
  printUnsignedInt(1L << dominoToIndex(6,7));
  printUnsignedInt(1L << dominoToIndex(6,8));
  printUnsignedInt(1L << dominoToIndex(6,9));
  printUnsignedInt(1L << dominoToIndex(7,8));
  printUnsignedInt(1L << dominoToIndex(7,9));
  printUnsignedInt(1L << dominoToIndex(8,9));

  /*
  if (dominoToIndex(2,1) != 1)
      cout << "FUCK!\n";
  if (dominoToIndex(3,1) != 2)
      cout << "FUCK!\n";
  if (dominoToIndex(4,1) != 3)
      cout << "FUCK!\n";
  if (dominoToIndex(5,1) != 4)
      cout << "FUCK!\n";
  if (dominoToIndex(6,1) != 5)
      cout << "FUCK!\n";
  if (dominoToIndex(7,1) != 6)
      cout << "FUCK!\n";
  if (dominoToIndex(8,1) != 7)
      cout << "FUCK!\n";
  if (dominoToIndex(9,1) != 8)
      cout << "FUCK!\n";
  if (dominoToIndex(3,2) != 9)
      cout << "FUCK!\n";
  if (dominoToIndex(4,2) != 10)
      cout << "FUCK!\n";
  if (dominoToIndex(5,2) != 11)
      cout << "FUCK!\n";
  if (dominoToIndex(6,2) != 12)
      cout << "FUCK!\n";
  if (dominoToIndex(7,2) != 13)
      cout << "FUCK!\n";
  if (dominoToIndex(8,2) != 14)
      cout << "FUCK!\n";
  if (dominoToIndex(9,2) != 15)
      cout << "FUCK!\n";
  if (dominoToIndex(4,3) != 16)
      cout << "FUCK!\n";
  if (dominoToIndex(5,3) != 17)
      cout << "FUCK!\n";
  if (dominoToIndex(6,3) != 18)
      cout << "FUCK!\n";
  if (dominoToIndex(7,3) != 19)
      cout << "FUCK!\n";
  if (dominoToIndex(8,3) != 20)
      cout << "FUCK!\n";
  if (dominoToIndex(9,3) != 21)
      cout << "FUCK!\n";
  if (dominoToIndex(5,4) != 22)
      cout << "FUCK!\n";
  if (dominoToIndex(6,4) != 23)
      cout << "FUCK!\n";
  if (dominoToIndex(7,4) != 24)
      cout << "FUCK!\n";
  if (dominoToIndex(8,4) != 25)
      cout << "FUCK!\n";
  if (dominoToIndex(9,4) != 26)
      cout << "FUCK!\n";
  if (dominoToIndex(6,5) != 27)
      cout << "FUCK!\n";
  if (dominoToIndex(7,5) != 28)
      cout << "FUCK!\n";
  if (dominoToIndex(8,5) != 29)
      cout << "FUCK!\n";
  if (dominoToIndex(9,5) != 30)
      cout << "FUCK!\n";
  if (dominoToIndex(7,6) != 31)
      cout << "FUCK!\n";
  if (dominoToIndex(8,6) != 32)
      cout << "FUCK!\n";
  if (dominoToIndex(9,6) != 33)
      cout << "FUCK!\n";
  if (dominoToIndex(8,7) != 34)
      cout << "FUCK!\n";
  if (dominoToIndex(9,7) != 35)
      cout << "FUCK!\n";
  if (dominoToIndex(9,8) != 36)
      cout << "FUCK!\n";
  */
}



int main() {
  // initialize the dominoes
  for (int i = 1; i < 10; i++) {
    for (int j = i+1; j < 10; j++) {
      pair<int, int> domino;
      domino.first = i;
      domino.second = j;
      dominoes.push_back(domino);
    }
  }
  //cout << "Length: " << dominoes.size() << endl;

  ifstream fin("sudominoku.in");
  fin >> initialDominoes;

  //cout << "derp: " << dominoToIndex(1,3) << endl;

  //testDominoToIndex();
  //return false;
  int puzzleID = 1;
  while (initialDominoes != 0) {
    cout << "Puzzle " << puzzleID++ << endl;

    for (int i = 0; i < 9; i++)
      for (int j = 0; j < 9; j++)
        board[i][j] = 0;

    unsigned long used = 0L;

    for (int i = 0; i < initialDominoes; i++) {
      int val1;
      fin >> val1;
      string location1;
      fin >> location1;
      int row1 = location1[0]-'A';
      int col1 = location1[1]-'1';
      board[row1][col1] = val1;
      //cout << (char)('0' + val1) << endl;

      int val2;
      fin >> val2;
      string location2;
      fin >> location2;
      int row2 = location2[0]-'A';
      int col2 = location2[1]-'1';
      board[row2][col2] = val2;
      //cout << (char)('0' + val2) << endl;

      //int ind = dominoToIndex(val1, val2);
      //cout << "v1: " << val1 << ", v2: " << val2 << endl;
      used |= (1L << dominoToIndex(val1, val2));

      //printUnsignedInt(1L << dominoToIndex(val1, val2));
      //printUnsignedInt(used);

      /*
      1, 1-2
      2, 1-3
      3, 1-4
      4, 1-5
      5, 1-6
      6, 1-7
      7, 1-8
      8, 1-9
      9, 2-3
      10,2-4
      11,2-5
      12,2-6
      13,2-7
      14,2-8
      15,2-9
      16,3-4
      17,3-5
      18,3-6
      19,3-7
      20,3-8
      21,3-9
      22,4-5
      23,4-6
      24,4-7
      25,4-8
      26,4-9
      27,5-6
      28,5-7
      29,5-8
      30,5-9
      31,6-7
      32,6-8
      33,6-9
      34,7-8
      35,7-9
      36,8-9
      */
    }

    // read in the numbers
    for (int i = 1; i < 10; i++) {
      string location;
      fin >> location;
      int row = location[0]-'A';
      int col = location[1]-'1';
      board[row][col] = i;
    }


    //testPrintListOfUsedDominoes(used);
    //return false;
    solve(board, used);
    //return 0;

    fin >> initialDominoes;
  }

  return 0;
}



