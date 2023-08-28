import { createContext, useContext } from "react";
import { User } from "./(interfaces)/interfaces";
export const EditProfileContext = createContext<true|false>(false)
export const UserDetailContext = createContext<User|undefined>(undefined)

export function useUserDetailContext() {
    const userObject = useContext(UserDetailContext)
    if (userObject === undefined){
        throw new Error("useUserDetailContext must be used with UserDetailContext")
    }
    return userObject
}