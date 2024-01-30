import React from "react";
import styles from "./NewDeals.module.scss";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusSign.svg";

// improve the deals container
const NewDeals = () => {
  return (
    <div className={styles.newDeals}>
      <div className={styles.heading}>New deals</div>
      <div className={styles.deals}>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Fruit2Go</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Marshall's MKT</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>CCNT</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Joana Mini-market</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Little Brazil Vegan</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Target</div>
        </div>
        <div className={styles.deal}>
          <PlusIcon />
          <div className={styles.dealText}>Organic Place</div>
        </div>
      </div>
    </div>
  );
};

export default NewDeals;
