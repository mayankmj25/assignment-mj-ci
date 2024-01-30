import React from 'react'
import styles from './QuaterGoal.module.scss';
import {ReactComponent as GoalAchieved} from '../../assets/figures/quaterGoal.svg'

const QuaterGoal = () => {
  return (
    <div className={styles.quaterGoal}>
        <div className={styles.heading}>
        Quarter goal
        </div>
        <div className={styles.stats}>
            <div><GoalAchieved /></div>        </div>
        <div className={styles.allGoalsGoToWrapper}>
            <div className={styles.allGoalsGoTo}>
                <div className={styles.allGoals}> All Goals</div>
            </div>
        </div>
    </div>

  )
}

export default QuaterGoal;