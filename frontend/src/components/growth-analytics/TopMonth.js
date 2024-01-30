import React from "react";
import styles from "./TopMonth.module.scss";

const TopMonth = () => {
  return (
    <div className={styles.topMonth}>
      <div className={styles.heading}>Top month</div>
      <div className={styles.content}>
        <div className={styles.month}>November</div>
        <div className={styles.year}>2019</div>
      </div>
    </div>
  );
};

export default TopMonth;
