import React from "react";
import styles from "./Customers.module.scss";

const Customers = () => {
  return (
    <div className={styles.customers}>
      <div className={styles.heading}>
        <div className={styles.mainHeading}>Customers</div>
        <div className={styles.sortHeading}>
          <span className={styles.sortby}>Sort by</span>
          <span className={styles.newest}>Newest</span>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.customer}>
          <div className={styles.customerImage}></div>
          <div className={styles.customerDetails}>
            <div className={styles.customerName}>Chris Friedkly</div>
            <div className={styles.customerSubHeading}>
              Supermarket Villanova
            </div>
          </div>
        </div>
        <div className={styles.customer}>
          <div className={styles.customerImage}></div>
          <div className={styles.customerDetails}>
            <div className={styles.customerName}>Maggie Johnson</div>
            <div className={styles.customerSubHeading}>Oasis Organic Inc.</div>
          </div>
        </div>
        <div className={styles.customer}>
          <div className={styles.customerImage}></div>
          <div className={styles.customerDetails}>
            <div className={styles.customerName}>Gael Harry</div>
            <div className={styles.customerSubHeading}>
              New York Finest Fruits
            </div>
          </div>
        </div>
        <div className={styles.customer}>
          <div className={styles.customerImage}></div>
          <div className={styles.customerDetails}>
            <div className={styles.customerName}>Jenna Sullivan</div>
            <div className={styles.customerSubHeading}>Walmart</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
      <div className={styles.buttonText}>All customers</div>

      </div>
    </div>
  );
};

export default Customers;
