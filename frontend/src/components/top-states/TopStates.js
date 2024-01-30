import React from "react";
import styles from "./TopStates.module.scss";

const TopStates = () => {
  return (
    <div className={styles.topStates}>
      <div className={styles.heading}>Top states</div>
      <div className={styles.bar}>
        <div className={styles.barText}>NY</div>
        <div className={styles.barNumber}>120K</div>
      </div>
      <div className={styles.bar} style={{width: 229}}>
        <div className={styles.barText}>MA</div>
        <div className={styles.barNumber}>80K</div>
      </div>
      <div className={styles.bar} style={{width: 207}}>
        <div className={styles.barText} >NH</div>
        <div className={styles.barNumber}>70K</div>
      </div>
      <div className={styles.bar} style={{width: 150}}>
        <div className={styles.barText}>OR</div>
        <div className={styles.barNumber}>50KK</div>
      </div>
    </div>
  );
};

export default TopStates;
