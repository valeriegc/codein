import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import styles from './signInModal.module.css'

export default function SignInProviders() {
  const [providers, setProviders] = useState<null | ClientSafeProvider[]>(null)

  useEffect(() => {
    ;(async () => {
      const res = await getProviders()
      if (!res) return
      const finalRes = Object.values(res).filter((r) => r.name !== "Credentials")
      setProviders(finalRes)
    })()
  }, [])
  return (
    <>
      {providers &&
        providers.map((provider) => (
          <div key={provider.name}>
            <button
              className={styles.provBtn}
              onClick={() => signIn(provider.id)}
            ><div className={styles.btnTxt}>
              Sign in with {provider.name}{' '}</div>
              <img
                className={styles.btnLogo}
                src={
                  provider.name == 'GitHub'
                    ? 'gitHub.png'
                    : provider.name == 'Google'
                    ? 'google.png'
                    : 'facebook.png'
                }
              ></img>
            </button>
          </div>
        ))}
    </>
  )
}
