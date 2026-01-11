import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    id: "01",
    question: "How do I create an account on the job board?",
    answer:
      "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.",
  },
  {
    id: "02",
    question: "How do I apply for a job through the platform?",
    answer:
      "You can apply directly through the platform by selecting a job listing and submitting your profile and resume.",
  },
  {
    id: "03",
    question: "How can I track the status of my job applications?",
    answer:
      "Visit your dashboard to view application status updates in real time.",
  },
  {
    id: "04",
    question: "How do I create an account on the job board?",
    answer:
      "Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.",
  },
  {
    id: "05",
    question:
      "Is there a cost to use the job board, and what features are free?",
    answer:
      "Basic job search and application features are free. Premium services may include advanced filters and featured listings.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState("04");

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Frequently asked Questions</h2>

      <div className={styles.grid}>
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activeId === item.id ? styles.active : ""
            }`}
            onClick={() =>
              setActiveId(activeId === item.id ? null : item.id)
            }
          >
            <div className={styles.question}>
              <div className={styles.left}>
                <span className={styles.number}>{item.id}</span>
                <p>{item.question}</p>
              </div>

              <span className={styles.icon}>
                {activeId === item.id ? "×" : "+"}
              </span>
            </div>

            {activeId === item.id && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <button className={styles.viewMore}>View More →</button>
    </section>
  );
}
