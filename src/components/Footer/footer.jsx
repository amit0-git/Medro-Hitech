import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import demoImg from "../../assets/person.png";
import ShortLogo from "../../assets/short_logo.png";
import Social from "../../assets/Social media.svg";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down more than 300px
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img className={styles.logo} src={ShortLogo} alt="" />
        <img className={styles.logo1} src={Social} alt="" />
      </div>

      <div className={styles.container}>
        {/* LEFT SIDE */}

        <div className={styles.left}>
          <div className={styles.linksGrid}>
            <div>
              <h4>Explore</h4>
              <p>What We Offer</p>
              <p>Case Studies</p>
              <p>Blog & Insights</p>
              <p>Resources</p>
              <p>FAQs</p>
            </div>

            <div>
              <h4>Company</h4>
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
              <p>Testimonials</p>
              <p>Pricing</p>
              <p>Career</p>
            </div>

            <div>
              <h4>Legal Links</h4>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Disclaimer</p>
              <p>Copyright</p>
            </div>
          </div>

          <button 
            className={styles.backTop} 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <span>↑</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <span className={styles.badge}>Demo</span>

          <h2>
            Request a<br />
            Demo
          </h2>

          <div className={styles.inputBox}>
            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>

          <img src={demoImg} alt="Demo" className={styles.image} />
        </div>
      </div>

      <div className={styles.credit}>Design by Medro ❤️</div>
    </section>
  );
};

export default Footer;