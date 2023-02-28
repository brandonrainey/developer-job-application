import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProgressBar from '@/components/ProgressBar'
import { useAppContext } from '@/context/progressContext'
import PersonalInformation from '@/components/PersonalInformation'

export default function Home() {
const router = useRouter()

const {progress, setProgress} = useAppContext()

function handleStart() {
  router.push('/personal-information')
  setProgress(1)
}
  return (
    <>
      <Head>
        <title>Frontend Developer Application</title>
        <meta name="description" content="re-imagined frontend developer application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <article>
          <p>Description of position</p>
        </article>
        <PersonalInformation />
        <button onClick={handleStart}>Start</button>
      </main>
    </>
  )
}

//salary
//where did you hear
//work in us
//age, citizen
//date calendar




//, race, , gender
//disability, veteran,


//linkedin, github, skills
//captcha