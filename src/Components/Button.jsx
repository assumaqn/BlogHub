import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
function Button({ children, onClick, type, to }) {
  return (
    <Link
      className={`${styles.btn} ${styles[type]}`}
      onClick={() => onClick}
      to={`${to}`}
    >
      {children}
    </Link>
  );
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
