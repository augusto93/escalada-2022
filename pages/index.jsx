/* next default */
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

/* CSS */
import styles from '../styles/Home.module.css'

/* components */
import ButtonVideo from '../components/ButtonVideo'
import TextFooter from '../components/TextFooter'
import LogoFooter from '../components/LogoFooter'
import Objectives from '../components/Objectives'
import LogoHeader from '../components/LogoHeader'
import Topic from '../components/Topic'
import VidTopic from '../components/VidTopic'
import Mountain from '../components/Mountain'
import Climbing from '../components/Climbing'
import TextClimbing from '../components/TextClimbing'
import PortraitScreen from '../components/PortraitScreen'
import ButtonPod from '../components/ButtonPod'
import Background from '../components/Background'

export default function Home() {

  const [isOpen, setOpen] = useState(false)
  const [anoAtivo, setAnoAtivo] = useState(0)

  const [videoOpen, setVideoOpen] = useState (false)

  const [textOpen, setTextOpen] = useState(false)
  const [indexText, setIndexText] = useState(0)

  return (
    <div className={styles.container}>

      <Head>
        <title>Escalada Eneva 2022</title>
        <meta name="description" content="Plataforma criada na Agência 1000 em Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VidTopic videoOpen={videoOpen} setVideoOpen={setVideoOpen} />
      <Topic isOpen={isOpen} setOpen={setOpen} anoAtivo={anoAtivo} setAnoAtivo={setAnoAtivo} />
      <TextClimbing textOpen={textOpen} setTextOpen={setTextOpen} indexText={indexText} setIndexText={setIndexText} />
      <PortraitScreen />
      <Background />

      <main className={styles.main}>
        <div className={styles.header}>
          <LogoHeader/>
        </div>

        <div className={styles.objectives} >
          {/* <Objectives isOpen={isOpen} setOpen={setOpen} anoAtivo={anoAtivo} setAnoAtivo={setAnoAtivo} /> */}
        </div>

        <div className={styles.climbing}>
          <Climbing textOpen={textOpen} setTextOpen={setTextOpen} indexText={indexText} setIndexText={setIndexText} />
        </div>

        <div className={styles.mountain}>
          <Mountain />
        </div>

        <footer className={styles.footer}>
          <TextFooter />
          {/* <ButtonVideo videoOpen={videoOpen} setVideoOpen={setVideoOpen} /> */}
          {/* <Link href='https://bit.ly/3LF8ur1'> <a target="_blank"> <ButtonPod /> </a> </Link> */}
          <LogoFooter />
        </footer>

      </main>
    </div>
  )
}
