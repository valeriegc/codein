import styles from "./NavBar.module.css"

export default function NavBar(){
    return(
        <div className={styles.navBarContainer}>
            <div className={styles.navBarWrap}>
                <div className={styles.codeInLogo}>CodeIn.</div>
                <div className={styles.buttonContainer}>
                    <div className={styles.iconFrame}>
                    <img className={styles.iconClass}src= "people.png"></img>
                    <p className={styles.iconText}>People</p>
                    </div>
                    <div className={styles.iconFrame}>
                    <img  className={styles.iconClass} src= "jobs.png"></img>
                    <p className={styles.iconText}>Jobs</p>
                    </div>
                    <div className={styles.iconFrame}>
                    <img className={styles.iconClass} src= "resources.png"></img>
                    <p className={styles.iconText}>Resources</p>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.iconFrame}>
                    <img className={styles.profileIcon}src="messages.png"></img>
                    </div>
                    <div className={styles.iconFrame}>
                    <img className={styles.profileIcon} src="userLogo.png"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}