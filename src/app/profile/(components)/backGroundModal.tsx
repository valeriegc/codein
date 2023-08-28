import React from "react";
import ReactDOM from "react-dom";
import styles from "./bgModal.module.css"
import { useState } from "react";

export default function BGModal({handleBGImg,onClose}){

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
        handleBGImg(imageLink)
        handleClose(e)
    }

const ModalContent = (
    <div className={styles.bgBackground}>
        <div className={styles.bgModal}>
            <h3 className={styles.modalHeader}>Edit background picture</h3>
            <img src="close.png" className={styles.bgClose} onClick={handleClose}></img>
            <div className={styles.bgPicture}>
                {imageLink != "" &&
                <img className={styles.bgPicture} src={imageLink}></img>}
            </div>
            <input onChange={handleUpdate} value={inputLink} placeholder="Place a link here" className={styles.bgInput}></input>
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
