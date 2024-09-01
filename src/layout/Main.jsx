import PropTypes from "prop-types";

function Main({ children }) {
  return <div className="container">{children}</div>;
}

// Use propTypes to specify children prop as an element node - React will know what data type to expect (fix prop validation error)
Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
