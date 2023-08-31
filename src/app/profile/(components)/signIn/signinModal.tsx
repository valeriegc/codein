import { SignInBtn } from "./authButtons"
import styles from "./signInModal.module.css"
import React from "react"
import ReactDOM from 'react-dom'

export default function SignInModal(){

const ModalContent = (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div>
                <img src="signin.png" className={styles.icon}></img>
                <h2 className={styles.headline}>Sign in today and start connecting.</h2></div>
                <p>You can sign in easily with one of the providers below
                    or by creating an account with name and password.
                </p>
                <button className={styles.btnCreateAcc}>Create an account</button>
                <SignInBtn></SignInBtn>
            </div>
        </div>
    )
    return ReactDOM.createPortal(ModalContent, document.body)

}