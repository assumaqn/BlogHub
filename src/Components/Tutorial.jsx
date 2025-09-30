import blogPosts from "../data/blogPosts.json";
import styles from "./Tutorial.module.css";
import Card from "./Card";

function Tutorial() {
  return (
    <div className={styles.tutorial}>
      {blogPosts
        .filter((post) => post.category === "Tutorial")
        .map((post) => (
          <Card key={post.id} post={post} />
        ))}
    </div>
  );
}

export default Tutorial;
