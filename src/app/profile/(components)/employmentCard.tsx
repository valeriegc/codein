import styles from "./CvBox.module.css"

export default function EmploymentCard() {
    return(
<div className={styles.employmentCard}>
<h3 className={styles.companyName}>Company name , role name</h3>
<p className={styles.employmentTime}>####/## - ####/##</p>
<div className={styles.jobRole}>Detailed description of the role and responsibilities here.</div>
</div>)
} 
