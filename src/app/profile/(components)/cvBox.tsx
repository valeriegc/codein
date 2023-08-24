import styles from "./CvBox.module.css"
import EmploymentCard from "./employmentCard";

type employmentProps = {
    children: React.ReactNode; 
  };
export default function CvBox(props:employmentProps) {
return(<div className={styles.cvWrap}>
    <h1 className={styles.cvHeader}>Experience</h1>
    <div className={styles.cardFrame}>
    <EmploymentCard></EmploymentCard>
    </div>
</div>)}