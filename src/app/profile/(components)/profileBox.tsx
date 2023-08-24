import styles from "../Profile.module.css"
import { userObject } from "../userInfo"
export default function ProfileBox () {
    return(
<div className={styles.profileBox}>
<div className={styles.backgroundPicBox}>
    <div className={styles.profilePicBox}>
        <div className={styles.personHead}></div>
        <div className={styles.personBody}></div>
    </div>
    <h1 className={styles.name}>{userObject.Name}</h1>
</div>
<div className={styles.personalInfo}>
<h2>{userObject.Employment} </h2>
<p>{userObject.Stack}</p>
<p className={styles.languages}>{userObject.Languages}</p>
<p className={styles.interests}>{userObject.Interests}</p>
</div>
</div>)}