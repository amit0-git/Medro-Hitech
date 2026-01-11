import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Chip from "../../assets/Top Chips.svg";
import Card from "../Job Card/card";
import CTA from "../CTA/cta";
import line from "../../assets/line.png"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Navbar />

      {/* svg image */}
      <img src={Chip} alt="Decorative Chips" className={styles.chipImage} />

      <div className={styles.content}>
        Transform Your Career with <br/>Industry-Ready Skills
      </div>
      {/* subcontent */}
      <div className={styles.subcontent}>
        Join 15,000+ professionals who've accelerated their careers through our
        hands-on programs and industry connections.
      </div>

      {/* explore button   */}
      <button className={styles.exploreButton}>Explore Our Programs</button>

      {/* job cards */}
      <div className={styles.cardContainer}>
       
       <Card/>
      </div>
      {/* cta boxes */}
      <CTA />
      <img src={line} alt="" className={styles.line} />
    </section>
  );
}
