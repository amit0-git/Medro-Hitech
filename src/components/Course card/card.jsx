import styles from "./card.module.css";
import courseImg from "../../assets/data science.png";

function CourseCard() {
  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <img src={courseImg} alt="Data Science" className={styles.image} />
      </div>

     

      {/* Rating */}
      <div className={styles.rating}>
        ⭐ <span>4.8</span> <span className={styles.reviews}>(6)</span>
      </div>

      {/* Course Info */}
      <div className={styles.courseName}>
        Data Science with <br /> Specialization
      </div>

      <p className={styles.duration}>Duration: 8 Months</p>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.outlineBtn}>Download Brochure</button>
        <button className={styles.primaryBtn}>View Program</button>
      </div>
    </div>
  );
}

export default CourseCard;
