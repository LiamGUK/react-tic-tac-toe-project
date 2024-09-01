// import { useState } from "react";
import PropTypes from "prop-types";

let win;

function Square({ value, onSquareClick, winningSquares, index }) {
  if (winningSquares) {
    win = winningSquares.some((square) => square === index);
  }

  return (
    <button
      onClick={onSquareClick}
      className={`square ${win ? "square-win" : ""}`}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
  winningSquares: PropTypes.array,
  index: PropTypes.number,
};

export default Square;
