import React from "react";
import styles from "./process.module.css";
import introVideo from "../../assets/video.mp4";

function process() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>The <span className={styles.headProcess}>Process </span>We Follow</div>
      {/* video wrap */}
      <div className={styles.videoWrap}>
        <video
          className={styles.video}
          src={introVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}

export default process;
