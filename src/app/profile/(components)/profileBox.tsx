"use client"
import styles from "../Profile.module.css"
import { userObject } from "../userInfo"
import BGModal from "./backGroundModal"
import Modal from "./modal"
import { useState } from "react"

export default function ProfileBox () {
    
    const [profileImage, setNewImage] = useState("")
    const [bgImage, setNewBgImage] = useState("")

    function getImage(imageData) {
        setNewImage(imageData)
    }

    function getBgImage(bgData){
        setNewBgImage(bgData)
    }

    const [openModal, setOpenModal] = useState(false)
    const [openBgModal, setOpenBgModal] = useState(false)
    
    return(
    <div className={styles.profileBox}>
        <div className={styles.backgroundPicBox}>
            <img className={styles.editBgImage} src="editLight.png" onClick={()=> setOpenBgModal(true)}></img>
            {bgImage !== "" &&
            <img src={bgImage} className={styles.backgroundPicBox}></img>}
            <div className={styles.profilePicBox}>
                <img className={styles.actualUserPhoto} src={profileImage}></img>
                {profileImage =="" &&
                <div>
                <div className={styles.personHead}></div>
                <div className={styles.personBody}></div>
                </div>}
            </div>
        <h1 className={styles.name}>{userObject.Name}</h1>
        </div>
        <img onClick={()=>setOpenModal(true)} src="edit.png" className={styles.editImage}></img>
{openModal &&
            <Modal handleImg={getImage} onClose={() => setOpenModal(false)}>
            </Modal>
        }
{openBgModal &&
            <BGModal handleBGImg={getBgImage} onClose={()=> setOpenBgModal(false)}></BGModal>
}
        <div className={styles.personalInfo}>
                <h2>{userObject.Employment} </h2>
                <p>{userObject.Stack}</p>
                <p className={styles.languages}>{userObject.Languages}</p>
                <p className={styles.interests}>{userObject.Interests}</p>
        </div>
</div>)}