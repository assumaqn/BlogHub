import Navbar from "../Components/Navbar";
import styles from "./Contact.module.css";
import Form from "../Components/Form";

function Contact() {
  return (
    <section className={styles.contactSection}>
      <Navbar />
      <div className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>
          Have a question or feedback? We'd love to hear from you. Send us a
          message and we'll respond as soon as possible.
        </p>
        <Form />
        <OtherWay />
      </div>
    </section>
  );
}

function OtherWay() {
  return (
    <div className={styles.otherWay}>
      <h3>Other Ways to Reach Us</h3>
      <div className={styles.contactMethods}>
        <div className={styles.method}>
          <h4>Email</h4>
          <p>hello@bloghub.com</p>
        </div>
        <div className={styles.method}>
          <h4>Follow Us</h4>
          <p>@bloghub on social media</p>
        </div>
        <div className={styles.method}>
          <h4>Office Hours</h4>
          <p>Mon-Fri, 9am-5pm EST</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
