import styles from './ConnectionCard.module.css'

export default function ConnectCard({ name, company }) {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.pic}></div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.intro}>{company}</div>
      </div>
      <button className={styles.btn}>+ Contact</button>
    </div>
  )
}
