import React from 'react'
import styles from './TopYear.module.scss'

const TopYear = () => {
  return (
    <div className={styles.topYear}>
    <div className={styles.heading}>Top year</div>
    <div className={styles.content}>
      <div className={styles.year}>2023</div>
      <div className={styles.stats}>96K sold so far</div>
    </div>
  </div>
  )
}

export default TopYear