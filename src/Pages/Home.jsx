import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import styles from "./Home.module.css";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <Hero />
      </header>
      <main>
        <Feature />
        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>
          Welcome to <span>BlogHub</span>
        </h1>
        <p>
          Discover insightful articles about web development, design, and
          technology. Join our community of developers and designers sharing
          knowledge.
        </p>
        <div className={styles.buttons}>
          <Button to="blog" type="btn-primary">
            Explore Blog &#8594;
          </Button>

          <Button to="Contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
