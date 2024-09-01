import PropTypes from "prop-types";

function BoardRow({ children }) {
  return <div className="board-row">{children}</div>;
}

BoardRow.propTypes = {
  children: PropTypes.node,
};

export default BoardRow;
