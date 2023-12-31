'use client'
import styles from './signInModal.module.css'
import React, { FormEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SignInProviders from './providers'
import { signIn } from 'next-auth/react'


export default function SignInModal() {
  const [create, setCreate] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleSignin = async(event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
      const formData = new FormData(event.currentTarget)
      console.log(formData)
      const email = formData.get("email")?.toString()
      const password = formData.get("password")?.toString()
      console.log("Email:", email, "password" , password)
      signIn("credentials", {redirect:false,email,password})
  }

  const handleCreate = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: formData
      })

    const data = await response.json()
    }
    catch (error) {
      console.error(error)
    }

  }

  const ModalContent = (
    <div className={styles.background}>
      {!create && (
        <div className={styles.modal}>
          <div>
            <img src="signin.png" className={styles.icon}></img>
            <h2 className={styles.headline}>
              Sign in today and start connecting.
            </h2>
          </div>
          <form onSubmit={handleSignin} className={styles.form}>
          <input
            name="email"
            className={styles.inputSI}
            placeholder="Email"
          ></input>
          <input
            className={styles.inputSI}
            name="password"
            placeholder="Password"
            type="password"
          ></input>
             <button type="submit"  className={styles.btnProviders}>
      Sign in
    </button>
          </form>
          <SignInProviders></SignInProviders>
          <button
            onClick={() => setCreate(true)}
            className={styles.btnCreateAcc}
          >
            Dont have an account yet?
          </button>
        </div>
      )}
      {create && (
        <div className={styles.modal}>
          <div className={styles.topBox}>
            <img
              src="back.png"
              className={styles.backIcon}
              onClick={() => setCreate(false)}
            ></img>
            <img src="create.png" className={styles.icon}></img>
            <h2 className={styles.headline}>Create an account</h2>
          </div>
          <p>
            Fill in your Name, Email, Password and confirmation password. You
            can also directly register via Facebook, Github or Google.
          </p>
          <SignInProviders></SignInProviders>
          <form onSubmit={handleCreate} className={styles.form}>
            <label className={styles.label}>First and last name</label>
            <input name="name" className={styles.input}></input>
            <label className={styles.label}>Email address</label>
            <input name="email" className={styles.input}></input>
            <label className={styles.label}>Password</label>
            <input
              name="password"
              type="password"
              className={styles.input}
            ></input>
            <label className={styles.label}>Confirmation Password</label>
            <input name="confirmPass" type="password" className={styles.input}></input>
            <button type="submit" className={styles.btnRegister}>
              Register with email and password
            </button>
          </form>
        </div>
      )}
    </div>
  )
  return ReactDOM.createPortal(ModalContent, document.body)
}
