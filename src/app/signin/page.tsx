import styles from './Signin.module.css'

export default function singIn() {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInForm}>
        <form>
          <div className={styles.formSet}>
            <h1 className={styles.mainHeader}>Sign in</h1>
            <label>Name</label>
            <input className={styles.input_General}></input>
            <label>Password</label>
            <input type="password" className={styles.input_General}></input>
            <button className={styles.formButton}>Submit</button>
            <p className={styles.personDetails}>
              No account yet? Sign up here.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
