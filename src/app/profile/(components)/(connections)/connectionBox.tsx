import styles from "./ConnectionBox.module.css"
import ConnectCard from "./connectionCard";
import { userObject } from "../../userInfo";

type connectProps = {
    children: React.ReactNode; 
  };

export default function ConnectionBox (props:connectProps) {
    return(
        <div className={styles.connectionsContainer}>
            <h1 className={styles.connectionHeaders}>Connections</h1>
            <div className={styles.cardsContainer}>
            {userObject.Connections.map((user) => (
            <ConnectCard name={user.Name} company={user.Company}></ConnectCard>))}
            </div>
        </div>
        
    )
}