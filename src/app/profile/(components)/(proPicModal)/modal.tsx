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
            <h3>Edit picture</h3>
            <img src="close.png" className={styles.close} onClick={handleClose}></img>
            <div className={styles.usersPicture}>
                <img src={imageLink} className={styles.usersPicture} ></img>
            </div>
            <input className={styles.input} placeholder="Place a link here" value={inputLink} onChange={handleUpdate} ></input>
            <div>
            <button className={styles.btn} onClick={()=>setImageLink(inputLink)} >Preview image</button>
            <button  className={styles.btn} onClick={handleImgSave}>Set image</button>
            </div>
        </div>
    </div>
)
return ReactDOM.createPortal(
    ModalContent,
    document.body
)}

