import React from 'react'
import styles from './Sidebar.module.scss';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as LogoText} from '../../assets/icons/logoText.svg'
import {ReactComponent as Dashboard} from '../../assets/icons/dashboard.svg';
import {ReactComponent as Customers} from '../../assets/icons/customers.svg';
import {ReactComponent as AllReports} from '../../assets/icons/allReports.svg';
import {ReactComponent as Geography} from '../../assets/icons/geography.svg';
import {ReactComponent as Conversations} from '../../assets/icons/conversations.svg';
import {ReactComponent as Deals} from '../../assets/icons/deals.svg';
import {ReactComponent as Export} from '../../assets/icons/export.svg';
import {ReactComponent as ClosedIcon} from '../../assets/icons/closedIcon.svg';
import {ReactComponent as Settings} from '../../assets/icons/settings.svg'
import {ReactComponent as LogOut} from '../../assets/icons/logout.svg'
import userImage from '../../assets/profile-images/user1.png'


// add the closing arrow
// fix the customer
// 

const Sidebar = () => {
  return (
    <div className={styles.sidebar}> 
      <div className={styles.brand}>
        <div className={styles.logo}>
        <Logo />
        <LogoText />
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.search}>
        </div>
        <div className={styles.item}>
          <Dashboard />
          <div className={styles.itemName}>Dashboard</div>
        </div>
        <div className={styles.item}>
        <div><Customers /></div>
        <div className={styles.itemName}>Customers</div>  
        <div className={styles.closedIcon}><ClosedIcon /></div>
        </div>
        <div className={styles.item}>
          <AllReports />
        <div className={styles.itemName}>All reports</div>
        </div>
        <div className={styles.item}>
          <Geography />
        <div className={styles.itemName}>Geography</div>
        </div>
        <div className={styles.item}>
          <Conversations />
        <div className={styles.itemName}>Conversations</div>
        </div>
        <div className={styles.item}>
          <Deals />
        <div className={styles.itemName}>Deals</div>
        </div>
        <div className={styles.item}>
          <Export />
        <div className={styles.itemName}>Export</div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div>
        <img src={userImage} alt="Profile" />
          </div>
          <div className={styles.userInfoTexts}>
            <div className={styles.userName}>Gustavo Xavier</div>
            <div className={styles.userTag}>Admin</div>
          </div>
        </div>
        <div className={styles.userOptions}>
          <div className={styles.item}>
            <div><Settings /></div>
            <div className={styles.itemName}>Settings</div>
          </div>
          <div className={styles.item}>
          <div><LogOut /></div>
            <div className={styles.itemName}>Log Out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;