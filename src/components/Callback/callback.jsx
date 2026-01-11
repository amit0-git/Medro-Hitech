import React from "react";
import styles from "./callback.module.css";
import CallbackImg from "../../assets/callback.png";

export default function RequestCallback() {
  return (
    <section className={styles.wrapper}>
      {/* Top Illustration */}
      <div className={styles.top}>
       

        {/* Image / Illustration Placeholder */}
        <div className={styles.imagePlaceholder}>
          <img src={CallbackImg} alt="" />
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Form */}
      <form className={styles.form}>
        <div className={styles.grid}>
          {/* Left column */}
          <div className={styles.field}>
            <label>First Name</label>
            <input type="text" placeholder="Your First Name" />
          </div>

          <div className={styles.field}>
            <label>Last Name</label>
            <input type="text" placeholder="Your Last Name" />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="Select your email" />
          </div>

          <div className={styles.field}>
            <label>Contact number</label>
            <div className={styles.phone}>
              <span className={styles.code}>+91</span>
              <input type="tel" placeholder="Select Contact number" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Select year of graduation</label>
            <select>
              <option>Select year of graduation</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Select work of experience</label>
            <select>
              <option>Select work of experience</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Select Program</label>
            <select>
              <option>Select Program</option>
            </select>
          </div>
        </div>

        {/* Policy */}
        <p className={styles.policy}>
          By providing your contact details, you agree to our{" "}
          <span>privacy policy</span>
        </p>

        {/* CTA */}
        <button type="submit" className={styles.cta}>
          Request a Callback
        </button>
      </form>
    </section>
  );
}
