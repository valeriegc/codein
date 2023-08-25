import styles from "./ConnectionCard.module.css"

export default function ConnectCard({name, company}){
   return (<div className={styles.connectCardWrap}>
      <div className={styles.connectPic}></div>
      <div className={styles.connectDetails}>
      <div className={styles.connectName}>{name}</div>
      <div className={styles.connectIntro}>{company}</div>
      </div>
      <button className={styles.connectBtn}>+ Contact</button>
   </div>)
}