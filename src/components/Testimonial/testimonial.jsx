import React from "react";
import styles from "./testimonial.module.css";
import user from "../../assets/user.jpg";


const testimonials = [
  {
    name: "Guy Hawkins",
    role: "Creative Director at Amazon",
    text:
      "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices, keeping me on top of my tasks.",
  },
  {
    name: "Divyas",
    role: "Product Designer at Stock",
    text:
      "As a busy professional, this to-do app is a lifesaver. A true game-changer!",
  },
  {
    name: "Bessie Cooper",
    role: "UX Designer at Tokopedia",
    text:
      "As a busy professional, this to-do app is a lifesaver. It effortlessly syncs across all my devices.",
  },
  {
    name: "Darrell Steward",
    role: "Senior Manager at Google",
    text:
      "This app ensures I stay productive, no matter where I am.",
  },
  {
    name: "Ronald Richards",
    role: "Product Designer at Stock",
    text:
      "As a busy professional, this to-do app is a lifesaver. A true game-changer!",
  },
  {
    name: "Darlene Robertson",
    role: "Product Designer at Stock",
    text:
      "The customizable views and efficient prioritization keep me on top of my goals.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.wrapper}>
      {/* Badge */}
      <span className={styles.badge}>Testimonial</span>

      {/* Heading */}
      <h2 className={styles.heading}>
        From Aspiration to <span>Achievement</span> Our Success Stories
      </h2>

      <p className={styles.subheading}>
        Explore the inspiring journeys of Upskillway learners as they turn skills
        into careers and dreams into achievements.
      </p>

      {/* Cards */}
      <div className={styles.cardsWrapper}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index % 3 === 1 ? styles.active : styles.inactive
            }`}
          >
            <div className={styles.header}>

             
              <img src={user} alt="" className={styles.avatar} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>

            <p className={styles.text}>“{item.text}”</p>

            <div className={styles.stars}>★★★★★</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className={styles.viewMore}>View More →</button>
    </section>
  );
}
