import React from "react";
import styles from "./QuaterGoal.module.scss";
import { ReactComponent as GoalAchieved } from "../../assets/figures/quaterGoal.svg";
import { ReactComponent as GotoIcon } from "../../assets/icons/goto.svg";

const QuaterGoal = () => {
  return (
    <div className={styles.quaterGoal}>
      <div className={styles.heading}>Quarter goal</div>
      <div className={styles.stats}>
        <div>
          <GoalAchieved />
        </div>{" "}
      </div>
      <div className={styles.allGoalsGoToWrapper}>
        <div className={styles.allGoalsGoTo}>
          <span className={styles.allGoals}> All Goals</span>
          <GotoIcon />
        </div>
      </div>
    </div>
  );
};

export default QuaterGoal;
