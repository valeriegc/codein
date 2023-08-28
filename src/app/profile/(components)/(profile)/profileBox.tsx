"use client"
import styles from "./Profile.module.css"
import { userObject } from "../../userInfo"
import BGModal from "../(background)/backGroundModal"
import Modal from "../(proPicModal)/modal"
import { useContext, useState } from "react"
import { ProfileContext } from "../../profileContext"

export default function ProfileBox () {
    const editEnable = useContext(ProfileContext)
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
        <div className={styles.bgPic}>
            {editEnable &&
            <img src="editLight.png"  className={styles.editBgImage} onClick={()=> setOpenBgModal(true)}></img>}
            {bgImage !== "" &&
            <img src={bgImage} className={styles.bgPic}></img>}
            <div className={styles.picWrap}>
                <img className={styles.userPhoto} src={profileImage}></img>
                {profileImage =="" &&
                <div>
                <div className={styles.personHead}></div>
                <div className={styles.personBody}></div>
                </div>}
            </div>
        <h1 className={styles.name}>{userObject.Name}</h1>
        </div>
        {editEnable &&
        <img src="edit.png" className={styles.editImage} onClick={()=>setOpenModal(true)} ></img>}
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