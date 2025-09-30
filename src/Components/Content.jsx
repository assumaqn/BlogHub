import { useParams } from "react-router-dom";
import styles from "./Content.module.css";

function Content() {
  const { id } = useParams();
  return (
    <div className={styles.content}>
      <p>This is the content page{id} </p>
    </div>
  );
}

export default Content;
