#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <algorithm>
#include <bitset>

using namespace std;

int board[9][9];

int initialDominoes;

void print(int board[9][9]) {
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++)
      cout << board[i][j];
    cout << endl;
  }
}

bool isValid(int board[9][9]) {
  for (int r = 0; r < 9; r++)
    for (int c = 0; c < 9; c++)
      if (board[r][c] == 0)
        return false;

  return true;
}

bool solve(int board[9][9]) {
  if (isValid(board)) {
    print(board);
    return true;
  }

  bool foundOne = false;
  // for every element, if it's blank, compute a list of numbers that can go there
  
  int row, col;
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (board[i][j] == 0 & !foundOne) {
        foundOne = true;
        row = i;
        col = j;
        break; // eventually it'll break out.
      }
    }
  }

  // what numbers have already been used in the row, column and square
  int canUse = 0; // use bits 0-8 inclusive to keep track of what has been seen

  // check all the values in the current row
  for (int c = 0; c < 9; c++) {
    if (board[row][c] != 0) {
      canUse |= (1 << board[row][c]-1);
    }
  }

  // check all the values in the current column
  for (int r = 0; r < 9; r++) {
    if (board[r][col] != 0) {
      canUse |= (1 << board[r][col]-1);
    }
  }

  // check all the values in the current square
  for (int r = 3*(row/3); r < 3*(row/3)+3; r++) {
    for (int c = 3*(col/3); c < 3*(col/3)+3; c++) {
      if (board[r][c] != 0) {
        canUse |= (1 << board[r][c]-1);
      }
    }
  }

  for (int v = 0; v < 9; v++) {
    if (((canUse >> v) & 1) == 0) {
      // means we can use the current value of v as a value on the sudoku board
      board[row][col] = v+1;
      bool ret = solve(board);
      // pass along the message!
      if (ret == true)
        return true;
      board[row][col] = 0;
    }
  }

  return false;
}


int main() {
  ifstream fin("sudominoku.in");
  fin >> initialDominoes;
  int puzzleID = 1;
  while (initialDominoes != 0) {
    cout << "Puzzle " << puzzleID++ << endl;
    for (int i = 0; i < 9; i++)
      for (int j = 0; j < 9; j++)
        board[i][j] = 0;

    for (int i = 0; i < initialDominoes; i++) {
      int val1;
      fin >> val1;
      string location1;
      fin >> location1;
      int row1 = location1[0]-'A';
      int col1 = location1[1]-'1';
      board[row1][col1] = val1;

      int val2;
      fin >> val2;
      string location2;
      fin >> location2;
      int row2 = location2[0]-'A';
      int col2 = location2[1]-'1';
      board[row2][col2] = val2;
    }

    // read in the numbers
    for (int i = 1; i < 10; i++) {
      string location;
      fin >> location;
      int row = location[0]-'A';
      int col = location[1]-'1';
      board[row][col] = i;
    }
    solve(board);
    fin >> initialDominoes;
  }

  return 0;
}

