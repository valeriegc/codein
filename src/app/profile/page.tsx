import styles from "./Profile.module.css"
import ConnectionBox from "./(components)/friendBox"
import ProfileBox from "./(components)/profileBox"
import ConnectCard from "./(components)/connectionCard"

export default function ProfilePage(){
    return (
    <div className={styles.profilePageContainer}>
        <ProfileBox></ProfileBox>
        <ConnectionBox>
        <ConnectCard></ConnectCard>
        </ConnectionBox>
    </div>
)}