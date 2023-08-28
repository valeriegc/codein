"use client"
import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css"
import { useState } from "react";

export default function Modal({onClose,handleImg}){
    const handleClose = (e) => {
        e.preventDefault(),
        onClose()
    }
    const [imageLink,setImageLink] = useState("") 
    const [inputLink, setInputLink] = useState("")
    
    const handleUpdate = (event) =>{
    setInputLink(event.target.value)
    }

    const handleImgSave = (e) => {
        handleImg(imageLink)
        handleClose(e)
    }

const ModalContent = (
    <div className={styles.background}>
        <div className={styles.modal}>
            <h3 className={styles.modalHeader}>Edit picture</h3>
            <img src="close.png" className={styles.closeButton} onClick={handleClose}></img>
            <div className={styles.usersPicture}>
                <img className={styles.usersPicture} src={imageLink}></img>
            </div>
            <input onChange={handleUpdate} value={inputLink} placeholder="Place a link here" className={styles.linkInput}></input>
            <div>
            <button onClick={()=>setImageLink(inputLink)} className={styles.addButton}>Preview image</button>
            <button onClick={handleImgSave} className={styles.addButton}>Set image</button>
            </div>
        </div>
    </div>
)
return ReactDOM.createPortal(
    ModalContent,
    document.body
)}

