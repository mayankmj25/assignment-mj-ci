import React from "react";
import styles from "./Customers.module.scss";
import { ReactComponent as GotoIcon } from "../../assets/icons/goto.svg";
import { ReactComponent as Line } from "../../assets/icons/line.svg";
import { ReactComponent as DropDown } from "../../assets/icons/dropdown.svg";

const Customers = () => {
  return (
    <div className={styles.customers}>
      <div className={styles.heading}>
        <div className={styles.mainHeading}>Customers</div>
        <div className={styles.sortHeading}>
          <div>
            <span className={styles.sortby}>Sort by </span>
            <span className={styles.newest}>Newest </span>
          </div>
          <DropDown />
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
        <div className={`${styles.customer} ${styles.specialCustomer}`}>
          <div className={styles.customerImage}></div>
          <div className={styles.customerDetails}>
            <div className={styles.customerName}>Maggie Johnson</div>
            <div className={styles.customerSubHeading}>Oasis Organic Inc.</div>
          </div>
          <div className={styles.customerIcons}>
            <Line />
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
        <span className={styles.buttonText}>All customers</span>
        <GotoIcon />
      </div>
    </div>
  );
};

export default Customers;
