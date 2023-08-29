import styles from "./bgModal.module.css"
import React, { ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom";
import { BGimageChange } from "../(profile)/profileBox";

export default function BGModal({handleBGImg,onClose}:BGimageChange){

    const handleClose = (e:MouseEvent<HTMLImageElement>|MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(),
        onClose()
    }
    const [imageLink,setImageLink] = useState("") 
    const [inputLink, setInputLink] = useState("")
    
    const handleUpdate = (e:ChangeEvent<HTMLInputElement>) =>{
    setInputLink(e.target.value)
    }

    const handleImgSave = (e:MouseEvent<HTMLButtonElement>) => {
        handleBGImg(imageLink)
        handleClose(e)
    }

const ModalContent = (
    <div className={styles.background}>
        <div className={styles.modal}>
            <h3>Edit background picture</h3>
            <img src="close.png" className={styles.close} onClick={handleClose}></img>
            <div className={styles.pic}>
                {imageLink != "" &&
                <img className={styles.pic} src={imageLink}></img>}
            </div>
            <input className={styles.input} placeholder="Place a link here" value={inputLink} onChange={handleUpdate}  ></input>
            <div>
            <button className={styles.btn} onClick={()=>setImageLink(inputLink)}>Preview image</button>
            <button className={styles.btn} onClick={handleImgSave} >Set image</button>
            </div>
        </div>
    </div>
)
return ReactDOM.createPortal(
    ModalContent,
    document.body
)}
