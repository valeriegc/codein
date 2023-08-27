"use client"
import styles from "../Profile.module.css"
import { userObject } from "../userInfo"
import Modal from "./modal"
import { useState } from "react"

export default function ProfileBox () {
    const [openModal, setOpenModal] = useState(false)
    return(
<div className={styles.profileBox}>
<div className={styles.backgroundPicBox}>
    <div className={styles.profilePicBox}>
        <div className={styles.personHead}></div>
        <div className={styles.personBody}></div>
    </div>
    <h1 className={styles.name}>{userObject.Name}</h1>
</div>
<img onClick={()=>setOpenModal(true)} src="edit.png" className={styles.editImage}></img>
{openModal &&
            <Modal onClose={() => setOpenModal(false)}>
            </Modal>
        }
<div className={styles.personalInfo}>
<h2>{userObject.Employment} </h2>
<p>{userObject.Stack}</p>
<p className={styles.languages}>{userObject.Languages}</p>
<p className={styles.interests}>{userObject.Interests}</p>
</div>
</div>)}