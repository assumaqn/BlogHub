import Navbar from "../Components/Navbar";
import styles from "./Blog.module.css";
import MiniNav from "../Components/MiniNav";
import Articles from "../Components/Articles";

function Blog({ setSearch }) {
  return (
    <>
      <Navbar />
      <div className={styles.blogContainer}>
        <h2>Blog Articles</h2>
        <p>
          Explore our collection of articles on web development, design, and
          technology
        </p>
        <MiniNav setSearch={setSearch} />

        <Articles />
      </div>
    </>
  );
}

export default Blog;
