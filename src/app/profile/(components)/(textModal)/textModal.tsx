import styles from "./TextModal.module.css"
import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { UserInfoContext } from "../../page";

export function TextModal({onClose}){

    const {userInfo, setUserInfo} = useContext(UserInfoContext)
    const [newUserInfo, setNewUserInfo] = useState({
        employment: userInfo.Employment,
        stack: userInfo.Stack,
        languages: userInfo.Languages,
        interests: userInfo.Interests
    })

    const handleClose = (e:MouseEvent<HTMLImageElement>) => {
        e.preventDefault(),
        onClose()
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setNewUserInfo({
            ...newUserInfo,
            [e.target.name]:value
        }
        )
    }

    const updateUser = () => {
        const newUser = {
            Name: userInfo.Name,
            Connections: userInfo.Connections,
            Employment: newUserInfo.employment,
            Stack: newUserInfo.stack,
            Languages: newUserInfo.languages,
            Interests: newUserInfo.interests,
            Experience: userInfo.Experience
        }
        setUserInfo(newUser)
        onClose()
    }

const ModalContent = (
    <div className={styles.background}>
        <div className={styles.modal}>
        <h3>Edit profile information</h3>
        <form className={styles.form}>
        <label>Current employer</label>
        <input name="employment" placeholder={userInfo.Employment} className={styles.input} onChange={handleChange}></input>
        <label>Stack</label>
        <input name="stack" placeholder={userInfo.Stack}className={styles.input} onChange={handleChange}></input>
        <label>Programming languages</label>
        <input name="languages" placeholder={userInfo.Languages}className={styles.input} onChange={handleChange}></input>
        <label>Interests</label>
        <input name="interests" placeholder={userInfo.Interests}className={styles.input} onChange={handleChange}></input>
        <button type="button" className={styles.formBtn} onClick={updateUser}>Save changes</button>
        </form>
        <img src="close.png" className={styles.close} onClick={handleClose}></img>
        </div>
    </div>
)
return ReactDOM.createPortal(
    ModalContent,
    document.body
)}
