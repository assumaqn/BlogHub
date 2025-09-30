import styles from "./Performance.module.css";
import blogPosts from "../data/blogPosts.json";
import Card from "./Card";
function Performance() {
  return (
    <div className={styles.performance}>
      {blogPosts
        .filter((post) => post.category === "Performance")
        .map((post) => (
          <Card key={post.id} post={post} />
        ))}
    </div>
  );
}

export default Performance;
