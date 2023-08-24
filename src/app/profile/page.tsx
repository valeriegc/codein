import styles from "./Profile.module.css"
import ConnectionBox from "./(components)/connectionBox"
import ProfileBox from "./(components)/profileBox"
import ConnectCard from "./(components)/connectionCard"
import NavBar from "./(components)/navBar"

export default function ProfilePage(){
    return (
    <div>
        <NavBar></NavBar>
        <div className={styles.profilePageContainer}>
        <ProfileBox></ProfileBox>
        <ConnectionBox>
        <ConnectCard></ConnectCard>
        </ConnectionBox>
        </div>
    </div>
)}