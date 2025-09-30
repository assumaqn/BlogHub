import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Button from "./Button";
function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Dive into our collection of articles and expand your knowledge today.
        </p>

        <Button to="blog">Browse Articles &#8594;</Button>
      </div>
    </section>
  );
}

export default Footer;
//2e6bcc
