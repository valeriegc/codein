import { SignInBtn, SignUpBtn } from "./authButtons"
import styles from "./signInModal.module.css"
import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom'

export default function SignInModal(){

const [create, setCreate] = useState(false)
useEffect(()=>{
    document.body.style.overflow="hidden"
    return () => {document.body.style.overflow="unset"}
},[])

const ModalContent = (
        <div className={styles.background}>
            {!create &&
            <div className={styles.modal}>
                <div>
                <img src="signin.png" className={styles.icon}></img>
                <h2 className={styles.headline}>Sign in today and start connecting.</h2></div>
                <input name="currentEmail"className={styles.inputSI} placeholder="Email"></input>
                <input className={styles.inputSI} name="currentPassword" placeholder="Password"></input>
                <SignInBtn></SignInBtn>
                <button onClick={()=> setCreate(true)} className={styles.btnCreateAcc}>Dont have an account yet?</button>
            </div>}
            { create &&
        <div className={styles.modal}>
                <div className={styles.topBox}>
                <img src="back.png" className={styles.backIcon} onClick={()=> setCreate(false)}></img>
                <img src="create.png" className={styles.icon}></img>
                <h2 className={styles.headline}>Create an account</h2></div>
                <p>Fill in your Name, Email, Password and confirmation password. You can also directly register via Facebook, Github or Google.</p>
                <SignUpBtn></SignUpBtn>
                <form className={styles.form}>
                    <label className={styles.label}>First and last name</label>
                    <input name="name" className={styles.input}></input>
                    <label className={styles.label}>Email address</label>
                    <input name="email" className={styles.input}></input>
                    <label className={styles.label}>Password</label>
                    <input name="password" type="password" className={styles.input}></input>
                    <label className={styles.label}>Confirmation Password</label>
                    <input name="confirmPass" className={styles.input}></input>
                    <button className={styles.btnRegister}>Register with email and password</button>
                </form>
            </div>
            }
        </div>
    )
    return ReactDOM.createPortal(ModalContent, document.body)

}