export const SYMBOL_X = "X";
export const SYMBOL_O = "O";
export const startCells = Array(9).fill(null);
export const checkWinner = (cells) => {
  const winPatterns = [
    [0, 1, 2], // строки
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // столбцы
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // диагонали
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return pattern;
    }
  }
};
