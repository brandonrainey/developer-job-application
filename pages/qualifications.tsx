import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'
import React from 'react'
import { useAppContext } from '@/context/progressContext'
import ButtonNav from '@/components/ButtonNav'
import styles from '@/styles/Qualification.module.scss'

export default function Qualifications() {
    const {progress, setProgress} = useAppContext()

  return (
    <article className={styles.main}>
        <Header />
        <ProgressBar />
        <ButtonNav />
    </article>
  )
}
