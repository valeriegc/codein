import styles from "./CvBox.module.css"

export default function EmploymentCard({role, description,time}) {
    return(
<div className={styles.employmentCard}>
<h3 className={styles.companyName}>{role}</h3>
<p className={styles.employmentTime}>{time}</p>
<div className={styles.jobRole}>{description}</div>
</div>)
} 
