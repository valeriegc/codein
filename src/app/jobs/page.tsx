'use client'
import NavBar from '../profile/(components)/(navbar)/navBar'
import styles from './jobs.module.css'
import { jobsObj } from './jobsObj'
import { useState } from 'react'

export default function Jobs() {
  const [job, setJob] = useState(jobsObj[0])

  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <div className={styles.wrap}>
        <div className={styles.list}>
          <div className={styles.head}>
          <img src="search.png" className={styles.icon}></img>
          <input className={styles.search} />
          </div>
          <div className={styles.itemWrap}>
            {jobsObj.map((job) => (
              <button className={styles.item} onClick={()=>setJob(job)} >
                <div>{job.Position}</div>
                {job.Location}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.post}>
          <h2>
            {job.Position} at {job.Firm}
          </h2>
          <p>{job.Location}</p>
          <p>{job.Description}</p>
          <p>Start date: {job.StartDate}</p>
          <p>Post date: {job.PostDate}</p>
          <button className={styles.applyBtn}>Apply here</button>
        </div>
      </div>
    </div>
  )
}
