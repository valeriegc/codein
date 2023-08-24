import styles from "./ConnectionCard.module.css"

export default function ConnectCard(){
   return (<div className={styles.connectCardWrap}>
      <div className={styles.connectPic}></div>
      <div className={styles.connectDetails}>
      <div className={styles.connectName}>John Smith</div>
      <div className={styles.connectIntro}>Introduction to this persons company and their city possibly</div>
      </div>
      <button className={styles.connectBtn}>Contact</button>
   </div>)
}