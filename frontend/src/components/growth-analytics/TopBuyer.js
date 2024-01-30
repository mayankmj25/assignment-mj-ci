import React from "react";
import styles from "./TopBuyer.module.scss";
import buyerImage from '../../assets/profile-images/user2.png'

const TopBuyer = () => {
  return (
    <div className={styles.topBuyer}>
      <div className={styles.heading}>Top buyer</div>
      <div className={styles.content}>
        <img src={buyerImage} alt="buyer" />
        <div className={styles.textContent}>
          <div className={styles.buyerName}>Maggie Johnson</div>
          <div className={styles.buyerOrg}>Oasis Organic Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default TopBuyer;
