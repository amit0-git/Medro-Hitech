import React from "react";
import styles from "./business.module.css";
import businessImage from "../../assets/business_right.png";

export default function BusinessSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.left}>
          <span className={styles.tag}>ENTERPRISES</span>

          <h2 className={styles.title}>
            Upskillway For <span>Business</span>
          </h2>

          <ul className={styles.list}>
            <li>Customized Learning Solutions</li>
            <li>Learn from Subject Matter Experts</li>
            <li>Enterprise Reporting</li>
            <li>Job-Ready employees post-training</li>
          </ul>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>100+</h3>
              <p>Enterprise Partners</p>
            </div>
            <div className={styles.stat}>
              <h3>25,000+ hrs</h3>
              <p>Live Hours Delivered</p>
            </div>
            <div className={styles.stat}>
              <h3>10,000+</h3>
              <p>Employees Upskilled</p>
            </div>
          </div>

         
        </div>

        {/* Right Image Placeholder */}
        <div className={styles.right}>
          <div className={styles.imagePlaceholder}>
            <img src={businessImage} alt="business" className={styles.image} />
          </div>
        </div>

         <button className={styles.cta}>
            Explore Our Solutions →
          </button>
      </div>
    </section>
  );
}
