"use client"
import styles from "./Profile.module.css"
import { UserInfoContext, userObject } from "../../page";
import BGModal from "../(background)/backGroundModal"
import Modal from "../(proPicModal)/modal"
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { EditProfileContext } from "../../profileContext"
import { TextModal } from "../(textModal)/textModal"

export interface ImageChange {
    handleImg : Dispatch<SetStateAction<string>>,
    onClose: Dispatch<SetStateAction<boolean>>}

export interface BGimageChange {
    handleBGImg : Dispatch<SetStateAction<string>>,
    onClose: Dispatch<SetStateAction<boolean>>
    }

export default function ProfileBox () {
    const editEnable = useContext(EditProfileContext)
    const [profileImage, setNewImage] = useState("")
    const [bgImage, setNewBgImage] = useState("")

    const [openModal, setOpenModal] = useState(false)
    const [openBgModal, setOpenBgModal] = useState(false)
    const [openTextModal, setOpenTextModal] = useState(false)

    const {userInfo, setUserInfo} = useContext(UserInfoContext)

    return(
    <div className={styles.profileBox}>
        <div className={styles.bgPic}>
            {editEnable &&
            <img src="editLight.png"  className={styles.editBgImage} onClick={()=> setOpenBgModal(true)}></img>}
            {editEnable &&
            <img src="edit.png" className={styles.editText} onClick={()=> setOpenTextModal(true)}></img>}
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
        <h1 className={styles.name}>{userInfo.Name}</h1>
        </div>
        {editEnable &&
        <img src="edit.png" className={styles.editImage} onClick={()=>setOpenModal(true)} ></img>}
{openTextModal&&
    <TextModal onClose={()=>setOpenTextModal(false)}></TextModal>}
{openModal &&
            <Modal handleImg={setNewImage} onClose={() => setOpenModal(false)}>
            </Modal>
        }
{openBgModal &&
            <BGModal handleBGImg={setNewBgImage} onClose={()=> setOpenBgModal(false)}></BGModal>
}
        <div className={styles.personalInfo}>
                <h2>{userInfo.Employment} </h2>
                <p>{userInfo.Stack}</p>
                <p className={styles.languages}>{userInfo.Languages}</p>
                <p className={styles.interests}>{userInfo.Interests}</p>
        </div>
       
</div>)}

