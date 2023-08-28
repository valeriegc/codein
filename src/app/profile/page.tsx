"use client"
import styles from "./(components)/(profile)/Profile.module.css"
import ConnectionBox from "./(components)/(connections)/connectionBox"
import ProfileBox from "./(components)/(profile)/profileBox"
import ConnectCard from "./(components)/(connections)/connectionCard"
import NavBar from "./(components)/(navbar)/navBar"
import CvBox from "./(components)/(cv)/cvBox"
import EmploymentCard from "./(components)/(cv)/employmentCard"
import React, { useState } from "react"
import { ProfileContext } from "./profileContext"

export default function ProfilePage(){
    const [editEnable, setEditEnable] = useState(false) 
    const [buttonText, setButtonText] = useState("Allow edit")

    function editDemo(){
        if (!editEnable) {
        setEditEnable(true)
        setButtonText("Prevent edit")}
        else {
            setEditEnable(false)
            setButtonText("Allow edit")
        }
    }
    return (
    <ProfileContext.Provider value={editEnable}>
    <div className={styles.pageFrame}>
    <button onClick={editDemo}>{buttonText}</button>
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
    </ProfileContext.Provider>
)}