"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./signInModal.module.css"
import { useEffect } from "react"


export function SignInBtn() {

    useEffect(()=>{
        document.body.style.overflow="hidden"
        return () => document.body.style.overflow="unset"
    },[])

    const {data:session, status} = useSession()

    if (status==="loading") {
        return <>...</>
    }

    if (status==="authenticated"){
        <Link href={"/profile"}></Link>
    }
    return (<button onClick={()=>signIn()} className={styles.btnProviders} >Sign in with Facebook, Google or Github</button>)
}

export function SignOutBtn(){
    return <button onClick={()=> signOut()}>Sign out</button>
}