import styles from "./CvBox.module.css"
import EmploymentCard from "./employmentCard";
import { userObject } from "../../userInfo";

type employmentProps = {
    children: React.ReactNode; 
  };
export default function CvBox(props:employmentProps) {
return(<div className={styles.cvWrap}>
    <h1 className={styles.cvHeader}>Experience</h1>
    <div className={styles.cardFrame}>
  {userObject.Experience.map((user) => (
    <EmploymentCard role={user.EmployerRole} description={user.Description} time={user.Timeframe}></EmploymentCard>
  ))}
    </div>
</div>)}