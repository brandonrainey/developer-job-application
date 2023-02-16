import React from 'react'
import styles from '@/styles/ProgressBar.module.scss'
import { useAppContext } from '@/context/progressContext'


export default function ProgressBar() {
  const {progress, setProgress} = useAppContext()

  return (
    <div className={styles.container}>
        <div className={progress >= 1 ? styles.progress : ''}><p>Part 1</p></div>
        <div className={progress >= 2 ? styles.progress : ''}><p>Part 2</p></div>
        <div className={progress >= 3 ? styles.progress : ''}><p>Part 3</p></div>
    </div>
  )
}
