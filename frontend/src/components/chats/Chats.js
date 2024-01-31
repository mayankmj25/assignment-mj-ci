import React from 'react'
import styles from './Chats.module.scss'
import userImage1 from '../../assets/profile-images/user2.png'
import userImage2 from '../../assets/profile-images/user3.png'
import userImage3 from '../../assets/profile-images/user4.png'
import userImage4 from '../../assets/profile-images/user5.png'
import { ReactComponent as GotoIcon } from '../../assets/icons/goto.svg'


// remove bg color from 2
// add the active svg
// add the arrow svg in the last line 

const Chats = () => {
  return (
    <div className={styles.chats}>
        <div className={styles.heading}>
        <div className={styles.mainheading}>Chats</div>
        <div className={styles.subheading}>2 unread messages
        </div>
        </div>
        <div className={styles.customers}>
        <div className={styles.chatImage}>
            <img src={userImage1} alt='user1'/>
        </div>
        <div className={styles.chatImage}>
        <img src={userImage2} alt='user1'/>

        </div>
        <div className={styles.chatImage}>
        <img src={userImage3} alt='user1'/>

        </div>
        <div className={styles.chatImage}>
        <img src={userImage4} alt='user1'/>

        </div>
        </div>
        <div className={styles.allMessagesWrapper}>
            <span className={styles.allMessages}>
            All messages
            </span>
            <GotoIcon />
        </div>
    </div>

  )
}

export default Chats