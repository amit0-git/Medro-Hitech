import React from "react";
import styles from "./discover.module.css";


import promoVideo from "../../assets/boy.mp4";

export default function DiscoverCertification() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={styles.badge}>certifications</span>

          <h1 className={styles.title}>
            discover <br />
            <span>certification</span>
          </h1>

          <p className={styles.description}>
            Turn your interest into expertise with our industry-recognized
            certification courses. Whether you’re a beginner or a working
            professional, these programs are designed to help you build
            job-ready skills and get certified by trusted institutions.
          </p>

          <div className={styles.gains}>
            <h4>What you’ll gain:</h4>
            <ul>
              <li>Globally recognized certificates</li>
              <li>Hands-on real-world projects</li>
              <li>Expert mentorship</li>
              <li>Career-focused skills</li>
            </ul>
          </div>

          <button className={styles.cta}>
            Explore certificate programs
            <span className={styles.arrow}>→</span>
          </button>
        </div>

        {/* Right Video */}
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={promoVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
