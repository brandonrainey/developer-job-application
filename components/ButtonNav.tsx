import React from 'react'
import styles from '@/styles/ButtonNav.module.scss'
import { useRouter } from 'next/router'
import { useAppContext } from '@/context/progressContext'

export default function ButtonNav() {
  const router = useRouter()

  const { progress, setProgress } = useAppContext()

  function handleNext() {
    if (router.asPath == '/personal-information') {
        router.push('/qualifications')
    }
    if (router.asPath == '/qualifications') {
        router.push('/placeholder')
    }

    setProgress(progress + 1)
  }

  function handleBack() {
    if (router.asPath == '/personal-information') {
        router.push('/')
    }
    if (router.asPath == '/qualifications') {
        router.push('/personal-information')
    }
    if (router.asPath == '/stuff') {
        router.push('/qualifications')
    }

    setProgress(progress - 1)
  }

  return (
    <nav className={styles.buttonNav}>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </nav>
  )
}
