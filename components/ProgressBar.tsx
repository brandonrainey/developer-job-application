import React from 'react'
import styles from '@/styles/ProgressBar.module.scss'



export default function ProgressBar() {
  return (
    <div className={styles.container}>
        <div><p>Part 1</p></div>
        <div className={styles.secondBox}><p>Part 2</p></div>
        <div>Part 3</div>
    </div>
  )
}
