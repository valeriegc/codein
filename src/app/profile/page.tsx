'use client'
import styles from './(components)/(profile)/Profile.module.css'
import ConnectionBox from './(components)/(connections)/connectionBox'
import ProfileBox from './(components)/(profile)/profileBox'
import ConnectCard from './(components)/(connections)/connectionCard'
import NavBar from './(components)/(navbar)/navBar'
import CvBox from './(components)/(cv)/cvBox'
import EmploymentCard from './(components)/(cv)/employmentCard'
import React, { useState } from 'react'
import { EditProfileContext } from './profileContext'
import SignInModal from './(components)/signIn/signinModal'
import { useSession } from 'next-auth/react'


export let userObject = {
  Name: 'Valerie Knape',
  Connections: [
    { Name: 'Alexander Kolberg', Company: 'ProductMind' },
    { Name: 'Natalie Paminger', Company: 'Expedia Group' },
  ],
  Employment: 'Expedia Group',
  Stack: 'Svelte, NextJS, FrontEnd',
  Languages: 'HTML5, CSS, JavaScript, Go',
  Interests: 'Languages, cooking, travelling and color theory',
  Experience: [
    {
      role: 'Call center Program Associate',
      timeframe: '2022-11-2023-05',
      description:
        'Through PowerBi was responsible for maintaining and upgrading the technicalities a company-used online store for employees.',
    },
  ],
}

export const UserInfoContext = React.createContext({
  userInfo: userObject,
  setUserInfo: () => {},
})

export default function ProfilePage() {
  const {data: session, status} = useSession()
  const [userInfo, setUserInfo] = useState(userObject)
  const value = { userInfo, setUserInfo }

  const [buttonText, setButtonText] = useState('Allow edit')
  const [editEnable, setEditEnable] = useState(false)

  function editDemo() {
    if (!editEnable) {
      setEditEnable(true)
      setButtonText('Prevent edit')
    } else {
      setEditEnable(false)
      setButtonText('Allow edit')
    }
  }

  return (
    <EditProfileContext.Provider value={editEnable}>
      <UserInfoContext.Provider value={value}>
        {status !== "authenticated" &&
        <SignInModal></SignInModal>}
        <div className={styles.pageFrame}>
          <button onClick={editDemo}>{buttonText}</button>
          <NavBar></NavBar>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <ProfileBox></ProfileBox>
              <CvBox>
                <EmploymentCard></EmploymentCard>
              </CvBox>
            </div>
            <ConnectionBox>
              <ConnectCard></ConnectCard>
            </ConnectionBox>
          </div>
        </div>
      </UserInfoContext.Provider>
    </EditProfileContext.Provider>
  )
}
