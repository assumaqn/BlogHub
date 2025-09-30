import styles from "./NotFound.module.css";
function NotFound({ message }) {
  return (
    <div className={styles.notfound}>
      <p>{message}</p>
    </div>
  );
}

export default NotFound;
