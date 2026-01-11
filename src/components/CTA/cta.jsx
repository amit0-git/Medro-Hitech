import styles from "./cta.module.css";

const stats = [
  { value: "170%", label: "Average Salary Hike" },
  { value: "15,000+", label: "Students Trained" },
  { value: "400+", label: "Hiring Partners" },
  { value: "4.8/5", label: "Student Rating" },
];

function cta() {
  return (
    <div className={styles.container}>
      {stats.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.value}>{item.value}</h3>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default cta;
