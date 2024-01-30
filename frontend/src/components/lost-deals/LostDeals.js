import React from 'react'
import styles from './LostDeals.module.scss'
import {ReactComponent as RevenueGrowth} from '../../assets/icons/revenuesIcon.svg'
const LostDeals = () => {
  return (
    <div className={styles.lostDeals}>
        <div className={styles.heading}>Lost deals</div>
        <div className={styles.stats}>
            <div className={styles.lostDealStat}>4%</div>
            <div><RevenueGrowth /></div>
        </div>
        <div className={styles.lostDealText}>You closed 96 out of 100 deals</div>
        <div className={styles.lostDealReportWrapper}>
        <div className={styles.lostDealReport}>All deals</div>
        </div>
        
    </div>
  )
}

export default LostDeals;