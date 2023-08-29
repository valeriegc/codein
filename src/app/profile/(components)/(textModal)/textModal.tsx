import styles from "./TextModal.module.css"
import React, { MouseEvent } from "react";
import ReactDOM from "react-dom";
import { useUserDetailContext } from "../../profileContext";


export function TextModal({onClose}){
    const userObject = useUserDetailContext()
    const handleClose = (e:MouseEvent<HTMLImageElement>) => {
        e.preventDefault(),
        onClose()
    }


const ModalContent = (
    <div className={styles.background}>
        <div className={styles.modal}>
        <h3>Edit profile information</h3>
        <form className={styles.form}>
        <label>Current employer</label>
        <input placeholder={userObject.Employment}className={styles.input}></input>
        <label>Stack</label>
        <input placeholder={userObject.Stack}className={styles.input}></input>
        <label>Programming languages</label>
        <input placeholder={userObject.Languages}className={styles.input}></input>
        <label>Interests</label>
        <input placeholder={userObject.Interests}className={styles.input}></input>
        <button className={styles.formBtn}>Save changes</button>
        </form>
        <img src="close.png" className={styles.close} onClick={handleClose}></img>
        </div>
    </div>
)
return ReactDOM.createPortal(
    ModalContent,
    document.body
)}
