import React from "react";
import styles from "./programs.module.css";

import handIcon from "../../assets/icons/hand.jpg";
import certificate from "../../assets/icons/certificate.svg";
import aiImage from "../../assets/ai1.jpg";
import aiImage3 from "../../assets/ai3.jpg";  
import aiImage4 from "../../assets/ai4.jpg";   
import avtar from "../../assets/avtar.png"   

const features = [
  { text: "Explore different fields", icon: handIcon },
  { text: "Test your skills & interests", icon: handIcon },
  { text: "Get a certificate of participation", icon: certificate },
];

const programs = [
  {
    category: "Design",
    level: "Beginner",
    type: "Crush Course",
    title: "The Complete Graphic Design for Beginners",
    instructor: "Wilson",
    rating: "4.5 Reviews",
    price: "₹0",
    image: aiImage,
  },
  {
    category: "Design",
    level: "Beginner",
    type: "Crush Course",
    title: "The Complete Graphic Design for Beginners",
    instructor: "Wilson",
    rating: "4.5 Reviews",
    price: "₹0",
    image: aiImage,
  },
  {
    category: "Data Science",
    level: "Pro Expert",
    title: "Learning JavaScript With Imagination",
    instructor: "Warren",
    price: "₹0",
     image: aiImage3,
  },
  {
    category: "Business",
    level: "Crush Course",
    title: "Financial Analyst Training & Investing Course",
    instructor: "Robert Fox",
    rating: "4.2 Reviews",
    price: "₹0",
     image: aiImage4,
  },
];

export default function CertificatePrograms() {
  return (
    <section className={styles.wrapper}>
      {/* Badge */}
      <div className={styles.badge}>
        Certificate <span /> Programs
      </div>

      {/* Heading */}
      <h2 className={styles.heading}>
        Every <span>Big Journey</span> Starts with a Small Step
      </h2>

      <p className={styles.subheading}>
        Not sure which program to choose? Take our Free Masterclass
      </p>

      {/* Features */}
      <div className={styles.features}>
        {features.map((item, index) => (
          <div key={index} className={styles.feature}>
            <img
              className={styles.iconPlaceholder}
              src={item.icon}
              alt="hand icon"
            />

            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Program Cards */}
      <div className={styles.cards}>
        {programs.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* Image Placeholder */}
            <div className={styles.imageBox}>
              <div className={styles.aiTag}>AI</div>

              <img
                src={item.image}
                alt={item.title}
                className={styles.courseImage}
              />
            </div>

            {/* Card Content */}
            <div className={styles.cardContent}>
              <span className={styles.category}>{item.category}</span>

              <h3>{item.title}</h3>

              <div className={styles.meta}>
                
                {/* avtar */}
                <img src={avtar} alt="" className={styles.avatarPlaceholder}/>
                
                <span>{item.instructor}</span>
                {item.rating && (
                  <span className={styles.rating}>⭐ {item.rating}</span>
                )}
              </div>

              <div className={styles.footer}>
                <span className={styles.price}>{item.price}</span>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className={styles.viewAll}>
        View All Certificate Programs →
      </button>
    </section>
  );
}
