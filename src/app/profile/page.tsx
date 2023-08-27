"use client"
import styles from "./Profile.module.css"
import ConnectionBox from "./(components)/(connections)/connectionBox"
import ProfileBox from "./(components)/profileBox"
import ConnectCard from "./(components)/(connections)/connectionCard"
import NavBar from "./(components)/navBar"
import CvBox from "./(components)/(cv)/cvBox"
import EmploymentCard from "./(components)/(cv)/employmentCard"


export default function ProfilePage(){
    return (
    <div>
        <NavBar></NavBar>
        <div className={styles.profilePageContainer}>
        <div>
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