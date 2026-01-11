import React from "react";
import styles from "./refer.module.css";
import Bluetooth from "../../assets/bluetooth.png";
import Watch from "../../assets/watch.png";
import Mac from "../../assets/mac.jpg";
import Refer from "../../assets/refer.png"

export default function ReferEarn() {
  return (
    <div className={styles.container}>
      {/* heading */}
      <div className={styles.heading}>
        <span className={styles.line} />
        <div>
          Refer <span>&</span> Earn
        </div>
        <span className={styles.line} />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <img src={Mac} alt="" className={styles.leftTopImg} />
          </div>
           <div className={styles.leftBottom}>
            <img src={Refer} alt="" className={styles.leftBottomImg} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <img className={styles.rightTopImg} src={Bluetooth} alt="" />
          </div>
          <div className={styles.rightBottom}>
            <img src={Watch} alt="" className={styles.rightBottomImg} />
          </div>
        </div>
      </div>
      {/* CTA */}
      <button className={styles.cta}>Refer now →</button>
    </div>
  );
}
