import { SignInBtn } from "./authButtons"
import styles from "./signInModal.module.css"
import React, { useState } from "react"
import ReactDOM from 'react-dom'

export default function SignInModal(){

const [create, setCreate] = useState(false)

const ModalContent = (
        <div className={styles.background}>
            {!create &&
            <div className={styles.modal}>
                <div>
                <img src="signin.png" className={styles.icon}></img>
                <h2 className={styles.headline}>Sign in today and start connecting.</h2></div>
                <p>You can sign in easily with one of the providers below
                    or by creating an account with name and password.
                </p>
                <button className={styles.btnCreateAcc} onClick={()=>setCreate(true)}>Create an account</button>
                <SignInBtn></SignInBtn>
            </div>}
            { create &&
        <div className={styles.modal}>
                <div className={styles.topBox}>
                <img src="back.png" className={styles.backIcon} onClick={()=> setCreate(false)}></img>
                <img src="create.png" className={styles.icon}></img>
                <h2 className={styles.headline}>Create an account</h2></div>
                <p>Fill in your Name, Email, Password and confirmation password.</p>
                <form className={styles.form}>
                    <label className={styles.label}>First and last name</label>
                    <input name="name" className={styles.input}></input>
                    <label className={styles.label}>Email address</label>
                    <input name="email" className={styles.input}></input>
                    <label className={styles.label}>Password</label>
                    <input name="password" type="password" className={styles.input}></input>
                    <label className={styles.label}>Confirmation Password</label>
                    <input name="confirmPass" className={styles.input}></input>
                    <button className={styles.btnCreateAcc}>Register</button>
                </form>
            </div>
            }
        </div>
    )
    return ReactDOM.createPortal(ModalContent, document.body)

}