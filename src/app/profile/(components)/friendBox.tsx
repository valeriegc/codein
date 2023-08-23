import styles from "../Profile.module.css"
import ConnectCard from "./connectionCard";

type connectProps = {
    children: React.ReactNode; // 👈️ type children
  };

export default function ConnectionBox (props:connectProps) {
    return(
        <div className={styles.friendContainer}>
            <h1 className={styles.connectionHeader}>Connections</h1>
            <ConnectCard></ConnectCard>
        </div>
        
    )
}