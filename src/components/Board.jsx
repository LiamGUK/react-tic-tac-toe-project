import { useState } from "react";
import PropTypes from "prop-types";
import BoardRow from "../layout/BoardRow";
import Square from "./Square";
import { calculateWinner } from "../utils/calculateWinner";

let status;

function Board({ xIsNext, squares, onPlay }) {
  const [moveNum, setMoveNum] = useState(0);
  const { winner, winSquares } = calculateWinner(squares);
  // const moveRef = useRef(0);

  const moveTotal = squares.length;

  if (winner) {
    status = "Winner: " + winner;
  } else if (moveNum === moveTotal) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || winner) return; // Guard clause to prevent overwriting square if already has 'X' or 'O' set

    const nextSquare = squares.slice();
    // Updates array and replaces with string 'X' or 'O' and position square was clicked on
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");

    onPlay(nextSquare);
    setMoveNum((curMove) => curMove + 1);
    // moveRef.current = moveRef.current + 1;
    //setXIsNext(!xIsNext); // Toggles boolean value between  true and false
  }

  return (
    <>
      <div className="status">{status}</div>
      <BoardRow>
        {Array.from({ length: 9 }, (_, i) => i).map((num) => (
          <Square
            key={`square-${num + 1}`}
            value={squares[num]}
            onSquareClick={() => handleClick(num)}
            winningSquares={winSquares}
            index={num}
          />
        ))}
      </BoardRow>
    </>
  );
}

Board.propTypes = {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array,
  onPlay: PropTypes.func,
};

export default Board;
