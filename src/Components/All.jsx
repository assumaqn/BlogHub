// import blogPosts from "../data/blogPosts";
import NotFound from "../Pages/NotFound";
import styles from "./All.module.css";
import Card from "./Card";
function All({ post }) {
  return (
    <div className={styles.all}>
      {post.length == 0 && <NotFound message="Article not found" />}
      {post.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default All;
