import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import { useRouter } from 'next/router'

export default function Home() {
const router = useRouter()

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
        <button onClick={() => router.push('/personal-information')}>Start</button>
      </main>
    </>
  )
}

//salary
//where did you hear
//work in us
//date calendar
//