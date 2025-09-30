import { Link, NavLink } from "react-router-dom";
import styles from "./MiniNav.module.css";

function MiniNav({ setSearch }) {
  return (
    <nav className={styles.miniNav}>
      <input
        type="search"
        placeholder="Search articles..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        <li>
          <NavLink to="all">All</NavLink>
        </li>
        <li>
          <NavLink to="tutorial">Tutorial</NavLink>
        </li>
        <li>
          <NavLink to="design">Design</NavLink>
        </li>
        <li>
          <NavLink to="development">Development</NavLink>
        </li>
        <li>
          <NavLink to="performance">Performance</NavLink>
        </li>
        <li>
          <NavLink to="typescript">TypeScript</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MiniNav;
