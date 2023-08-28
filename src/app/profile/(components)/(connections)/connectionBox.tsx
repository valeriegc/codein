import styles from "./ConnectionBox.module.css"
import ConnectCard from "./connectionCard";
import { userObject } from "../../userInfo";
import { ProfileContext } from "../../profileContext";
import { useContext } from "react";

type connectProps = {
    children: React.ReactNode; 
  };

export default function ConnectionBox (props:connectProps) {
    const editEnabled = useContext(ProfileContext)

    return(
        <div className={styles.container}>
            {editEnabled &&
            <img src="edit.png" className={styles.editIcon}></img>}
            <h1 className={styles.header}>Connections</h1>
            <div className={styles.cardContainer}>
            {userObject.Connections.map((user) => (
            <ConnectCard name={user.Name} company={user.Company}></ConnectCard>))}
            </div>
        </div>
        
    )
}