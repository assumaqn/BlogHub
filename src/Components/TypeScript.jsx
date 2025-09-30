import styles from "./TypeScript.module.css";
import blogPosts from "../data/blogPosts.json";
import Card from "./Card";
function TypeScript() {
  return (
    <div className={styles.typeScript}>
      {blogPosts
        .filter((post) => post.category === "TypeScript")
        .map((post) => (
          <Card key={post.id} post={post} />
        ))}
    </div>
  );
}

export default TypeScript;
