import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/PersonalInformation.module.scss'
import ProgressBar from '@/components/ProgressBar'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/progressContext'
import ButtonNav from '@/components/ButtonNav'
import { useState } from 'react'

export default function personalInformation() {
  const router = useRouter()

  const [resumeName, setResumeName] = useState('')

  const { progress, setProgress } = useAppContext()

  function handleChange(e: any) {
    setResumeName(e.target.files[0].name)
  }

  return (
    <section className={styles.main}>
      <Header />
      <ProgressBar />
      <div className={styles.container}>
        <form className={styles.firstName}>
          <label>First Name:</label>
          <input />
        </form>
        <form className={styles.lastName}>
          <label>Last Name:</label>
          <input />
        </form>

        <form className={styles.lastName}>
          <label>Email Address:</label>
          <input />
        </form>

        <form className={styles.lastName}>
          <label>Street Address:</label>
          <input />
        </form>

        <form className={styles.lastName}>
          <label>City:</label>
          <input />
        </form>

        <form className={styles.lastName}>
          <label>State:</label>
          <input />
        </form>

        <form className={styles.lastName}>
          <label>Phone:</label>
          <input />
        </form>

        <form action="" className={styles.uploadContainer}>
          

            <input type="file" id="file" name="file" className={styles.input} onChange={handleChange}/>
            <label htmlFor='file' className={styles.label}>Upload Resume</label>
            <p>{resumeName}</p>
          
          
          
        </form>
      </div>

      <ButtonNav />
    </section>
  )
}
