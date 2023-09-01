import { getProviders, signIn } from "next-auth/react"
import { useEffect, useState } from "react";
import styles from "./signInModal.module.css"

export default function SignInProviders() {
const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <>
      {providers &&
       Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className={styles.provBtn} onClick={() => signIn(provider.id)} >
            Sign in with {provider.name} <img className={styles.btnLogo}src={provider.name=="GitHub"? "gitHub.png":provider.name=="Google"? "google.png":"facebook.png"}></img>
          </button>
        </div>
      ))}
    </>
  )
}

