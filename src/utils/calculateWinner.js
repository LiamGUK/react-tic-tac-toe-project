// As just a simple JS utility function returning a value can write logic in normal js file.

export function calculateWinner(squares) {
  // console.log(squares);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log(lines[i]);
      return { winner: squares[a], winSquares: lines[i] };
    }
  }
  return { winner: null, winSquares: null };
  // return null;
}
