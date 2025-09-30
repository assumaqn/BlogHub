import { Outlet } from "react-router-dom";
import Card from "./Card";
// import styles from "./Articles.module.css";

function Articles() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Articles;
