"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import styles from "./signInModal.module.css"


export function SignInBtn() {
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
export function SignUpBtn() {
    const {data:session, status} = useSession()

    if (status==="loading") {
        return <>...</>
    }

    if (status==="authenticated"){
        <Link href={"/profile"}></Link>
    }
    return (<button onClick={()=>signIn()} className={styles.btnProvidersReg} >Register with Facebook, Google or Github</button>)
}
