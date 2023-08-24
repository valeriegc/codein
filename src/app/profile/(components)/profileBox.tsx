import styles from "../Profile.module.css"

export default function ProfileBox () {
    return(
<div className={styles.profileBox}>
<div className={styles.backgroundPicBox}>
    <div className={styles.profilePicBox}>
        <div className={styles.personHead}></div>
        <div className={styles.personBody}></div>
    </div>
    <h1 className={styles.name}>John Doe</h1>
</div>
<div className={styles.personalInfo}>
<p>Currently empoyed or studying at: </p>
<p>Stack:</p>
<p>Languages:</p>
<p>Other interests:</p>
</div>
</div>)}