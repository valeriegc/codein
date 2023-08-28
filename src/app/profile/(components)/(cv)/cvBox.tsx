import styles from "./CvBox.module.css"
import EmploymentCard from "./employmentCard";
import { userObject } from "../../page";
import { useContext } from "react";
import { EditProfileContext } from "../../profileContext";

type employmentProps = {
    children: React.ReactNode; 
  };

export default function CvBox(props:employmentProps) {
  const enableEdit = useContext(EditProfileContext)

return(<div className={styles.wrap}>
  {enableEdit &&
    <img src="edit.png" className={styles.editIcon}></img>}
    <h1 className={styles.header}>Experience</h1>
    <div className={styles.cardFrame}>
  {userObject.Experience.map((user) => (
    <EmploymentCard role={user.EmployerRole} description={user.Description} time={user.Timeframe}></EmploymentCard>
  ))}
    </div>
</div>)}