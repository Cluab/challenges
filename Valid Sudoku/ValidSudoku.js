function ValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    const rows = new Set();
    for (let j = 0; j < 9; j++) {
      const number = board[i][j];
      if (number == '.') continue;
      if (rows.has(number)) return false;
      else {
        rows.add(number);
      }
    }
  }

  for (let j = 0; j < 9; j++) {
    const column = new Set();
    for (let i = 0; i < 9; i++) {
      const number = board[i][j];
      if (number == '.') continue;
      if (column.has(number)) return false;
      column.add(number);
    }
  }

  for (let box = 0; box < 9; box++) {
    const miniBox = new Set();
    const startRow = Math.floor(box / 3) * 3;
    const startColumn = (box % 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
      for (let column = startColumn; column < startColumn + 3; column++) {
        const number = board[row][column];
        if (number == '.') continue;
        if (miniBox.has(number)) return false;
        miniBox.add(number);
      }
    }
  }
  return true;
}

console.log(
  ValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
