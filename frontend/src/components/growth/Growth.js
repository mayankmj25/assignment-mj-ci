import React from 'react'
import styles from './Growth.module.scss'

const Growth = () => {
  return (
    <div className={styles.growth}>
        <div className={styles.heading}>
            <div className={styles.headingText}>Growth</div>
            <div className={styles.headingSubText}>Yearly</div>
        </div>
        <div className={styles.chart}>
        </div>

    </div>
  )
}

export default Growth;