import Header from '@/components/Header'
import React from 'react'
import styles from '@/styles/PersonalInformation.module.scss'
import ProgressBar from '@/components/ProgressBar'

export default function personalInformation() {
  return (
    <section className={styles.main}>
      <Header />
      <ProgressBar />
      <div className={styles.container}>
        <form className={styles.firstName}>
          <label>First Name:</label>
          <input/>
        </form>
        <form className={styles.lastName}>
          <label>Last Name:</label>
          <input/>
        </form>

        <form className={styles.lastName}>
          <label>Email Address:</label>
          <input/>
        </form>

        <form className={styles.lastName}>
          <label>Street Address:</label>
          <input/>
        </form>

        <form className={styles.lastName}>
          <label>City:</label>
          <input/>
        </form>

        <form className={styles.lastName}>
          <label>State:</label>
          <input/>
        </form>


      </div>
    </section>
  )
}
