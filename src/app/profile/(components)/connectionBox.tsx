import styles from "./ConnectionBox.module.css"
import ConnectCard from "./connectionCard";

type connectProps = {
    children: React.ReactNode; 
  };

export default function ConnectionBox (props:connectProps) {
    return(
        <div className={styles.connectionsContainer}>
            <h1 className={styles.connectionHeader}>Connections</h1>
            <div className={styles.cardsContainer}>
            <ConnectCard></ConnectCard>
            </div>
        </div>
        
    )
}