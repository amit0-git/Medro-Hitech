import React from "react";
import styles from "./programs.module.css";
import CourseCard from "../Course card/card";

function programs() {
  return (
    <div className={styles.container}>
      {/* main head */}
      <div className={styles.head}>
        Explore Our <span className={styles.headColor}>Programs</span>
      </div>
      <div className={styles.desc}>
        Find the best Program for your Growth and boosts your Confidence 10x!
      </div>
      {/* cards */}
      <div className={styles.cardContainer}>
        <CourseCard />
        <CourseCard />
        <CourseCard />

        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      {/* navigation */}

      <div className={styles.wrapper}>
        {/* Left Arrow */}
        <button className={styles.iconBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* View All */}
        <button className={styles.viewAll}>
          View All
          <span className={styles.arrowCircle}>↗</span>
        </button>

        {/* Right Arrow */}
        <button className={styles.iconBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              d="M9 18l6-6-6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default programs;
