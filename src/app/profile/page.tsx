"use client"
import styles from "./(components)/(profile)/Profile.module.css"
import ConnectionBox from "./(components)/(connections)/connectionBox"
import ProfileBox from "./(components)/(profile)/profileBox"
import ConnectCard from "./(components)/(connections)/connectionCard"
import NavBar from "./(components)/(navbar)/navBar"
import CvBox from "./(components)/(cv)/cvBox"
import EmploymentCard from "./(components)/(cv)/employmentCard"


export default function ProfilePage(){
    return (
    <div className={styles.pageFrame}>
        <NavBar></NavBar>
        <div className={styles.container}>
        <div className={styles.leftContainer}>
        <ProfileBox></ProfileBox>
        <CvBox>
        <EmploymentCard></EmploymentCard>
        </CvBox>
        </div>
        <ConnectionBox>
        <ConnectCard></ConnectCard>
        </ConnectionBox>
        </div>
    </div>
)}