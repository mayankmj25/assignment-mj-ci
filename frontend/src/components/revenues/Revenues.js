import React from "react";
import styles from "./Revenues.module.scss";
import { ReactComponent as RevenueGrowth } from "../../assets/icons/revenuesIcon.svg";
import { ReactComponent as GotoIcon } from "../../assets/icons/goto.svg";
const Revenues = () => {
  return (
    <div className={styles.revenues}>
      <div className={styles.heading}>Revenues</div>
      <div className={styles.stats}>
        <div className={styles.revenueStat}>15%</div>
        <div>
          <RevenueGrowth />
        </div>
      </div>
      <div className={styles.revenueText}>Increase compared to last week</div>
      <div className={styles.revenueReportWrapper}>
        <span className={styles.revenueReport}>Revenues report </span>
        <GotoIcon />
      </div>
    </div>
  );
};

export default Revenues;
