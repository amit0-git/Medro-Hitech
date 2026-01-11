import React from "react";
import styles from "./trust.module.css";

// SVG ico
import icon from "../../assets/icons/Group.svg";
import msgIcon from "../../assets/icons/Frame.svg";
import skillIcon from "../../assets/icons/skill.svg";
import guidance from "../../assets/icons/guidance.svg";

import earth from "../../assets/icons/global-search.png";
import peopleIcon from "../../assets/icons/Group.png";

import leftArrow from "../../assets/icons/left.svg";
import rightArrow from "../../assets/icons/right.svg";

import logo from "../../assets/logo.png"

const items = [
  { text: "Certified\nPrograms", icon: icon, position: "topLeft" },
  { text: "Networking\nOpportunities", icon: msgIcon, position: "topRight" },
  { text: "Showcase Skill\nYour Skill", icon: skillIcon, position: "left" },
  {
    text: "Personalised\nGuidance with 24x7 Support",
    icon: guidance,
    position: "right",
  },
  {
    text: "Instructor-led\nLive Teaching",
    icon: icon,
    position: "bottomLeft",
  },
  {
    text: "Placement\nAssistance",
    icon: peopleIcon,
    position: "bottomRight",
  },
  {
    text: "Hands-On\nProjects",
    icon: earth,
    position: "leftBottom",
  },
  {
    text: "Expert\nMentorship",
    icon: peopleIcon,
    position: "rightBottom",
  },
  {
    text: "Flexible\nLearning",
    icon: icon,
    position: "bottomCenter",
  },
];

export default function WhyTrust() {
  return (
    <section className={styles.whyTrust}>
      <h2 className={styles.title}>
        Why Learners Trust <br />Upskill<span>w</span>ay
      </h2>

      <p className={styles.subtitle}>
        Unlock your true potential with Upskillway and explore opportunities
        that fit your skills, passions, and career goals.
      </p>

      <div className={styles.circleWrapper}>
        <div className={styles.centerCircle}>
          <img src={logo} alt="" className={styles.centerCircle}/>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[item.position]}`}
          >
            <img src={item.icon} alt="" className={styles.icon} aria-hidden />

            <div className={styles.text}>
              {item.text.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.leftArrow}>
          <img src={leftArrow} alt="" aria-hidden />
        </div>
        <div className={styles.rightArrow}>
          <img src={rightArrow} alt="" aria-hidden />
        </div>
      </div>
    </section>
  );
}
