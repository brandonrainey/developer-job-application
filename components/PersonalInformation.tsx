import React from 'react'
import styles from '@/styles/PersonalInformation.module.scss'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/progressContext'
import { useState } from 'react'

export default function personalInformation() {
  
  const [resumeName, setResumeName] = useState('')

  function handleChange(e: any) {
    setResumeName(e.target.files[0].name)
  }

  return (
    <section className={styles.main}>
      
      <div className={styles.container}>
        <form className={styles.firstName}>
          <label>First Name:</label>
          <input placeholder='First Name'/>
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
          <label>Phone:</label>
          <input />
        </form>

        <form action="" className={styles.uploadContainer}>
          <input
            type="file"
            id="file"
            name="file"
            className={styles.input}
            onChange={handleChange}
            accept=".pdf"
          />
          <label htmlFor="file" className={styles.label}>
            Upload Resume
          </label>
          <p>{resumeName}</p>
        </form>
      </div>

      
    </section>
  )
}
