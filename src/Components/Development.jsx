import styles from "./Development.module.css";
import blogPosts from "../data/blogPosts.json";
import Card from "./Card";
function Development() {
  return (
    <div className={styles.development}>
      {blogPosts
        .filter((post) => post.category === "Development")
        .map((post) => (
          <Card key={post.id} post={post} />
        ))}
    </div>
  );
}

export default Development;
