"use client"
import styles from "./(components)/(profile)/Profile.module.css"
import ConnectionBox from "./(components)/(connections)/connectionBox"
import ProfileBox from "./(components)/(profile)/profileBox"
import ConnectCard from "./(components)/(connections)/connectionCard"
import NavBar from "./(components)/(navbar)/navBar"
import CvBox from "./(components)/(cv)/cvBox"
import EmploymentCard from "./(components)/(cv)/employmentCard"
import React, { useState } from "react"
import { EditProfileContext,UserDetailContext } from "./profileContext"

export let userObject = {
    Name: "Valerie Knape",
    Connections: [
      { Name: "Alexander Kolberg", Company: "ProductMind" },
      { Name: "Natalie Paminger", Company: "Expedia Group" },
    ],
    Employment: "Expedia Group",
    Stack: "Svelte, NextJS, FrontEnd",
    Languages: "HTML5, CSS, JavaScript, Go",
    Interests: "Languages, cooking, travelling and color theory",
    Experience: [
      {
        EmployerRole: "Call center Program Associate",
        Timeframe: "2022-11-2023-05",
        Description:
          "Through PowerBi was responsible for maintaining and upgrading the technicalities a company-used online store for employees.",
      },
    ],
  };

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
    <EditProfileContext.Provider value={editEnable}>
    <UserDetailContext.Provider value={userObject}>
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
    </UserDetailContext.Provider>
    </EditProfileContext.Provider>
  
)}