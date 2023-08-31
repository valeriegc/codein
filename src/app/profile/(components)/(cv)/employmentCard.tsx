import styles from './CvBox.module.css'
import { Experience } from '../../(interfaces)/interfaces'

export default function EmploymentCard({
  role,
  timeframe,
  description,
}: Experience) {
  return (
    <div className={styles.employmentCard}>
      <h3 className={styles.companyName}>{role}</h3>
      <p className={styles.employmentTime}>{timeframe}</p>
      <div className={styles.jobRole}>{description}</div>
    </div>
  )
}
