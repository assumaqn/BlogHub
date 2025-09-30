import styles from "./Design.module.css";
import blogPosts from "../data/blogPosts.json";
import Card from "./Card";
function Design() {
  return (
    <div className={styles.design}>
      {blogPosts
        .filter((post) => post.category === "Design")
        .map((post) => (
          <Card key={post.id} post={post} />
        ))}
    </div>
  );
}

export default Design;
