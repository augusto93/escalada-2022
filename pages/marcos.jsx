/* next default */
import Head from 'next/head'
import { useState } from 'react'

/* CSS */
import styles from '../styles/Home.module.css'

/* components */
import Objectives from '../components/Objectives'
import LogoHeader from '../components/LogoHeader'
import Topic from '../components/Topic'
import Mountain from '../components/Mountain'
import PortraitScreen from '../components/PortraitScreen'
import Background from '../components/Background'

export default function Home() {

  const [isOpen, setOpen] = useState(false)
  const [anoAtivo, setAnoAtivo] = useState(0)

  const [marksOpen, setMarksOpen] = useState(false)
  const [marksAtivo, setMarksAtivo] = useState(0)

  return (
    <div className={styles.container}>

      <Head>
        <title>Escalada Eneva 2022</title>
        <meta name="description" content="Plataforma criada na Agência 1000 em Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topic isOpen={isOpen} setOpen={setOpen} anoAtivo={anoAtivo} setAnoAtivo={setAnoAtivo} marksOpen={marksOpen} setMarksOpen={setMarksOpen} marksAtivo={marksAtivo} setMarksAtivo={setMarksAtivo} />
      <PortraitScreen />
      <Background />

      <main className={styles.main}>
        <div className={styles.header}>
          <LogoHeader/>
        </div>

        <div className={styles.objectives} >
          <Objectives isOpen={isOpen} setOpen={setOpen} anoAtivo={anoAtivo} setAnoAtivo={setAnoAtivo} />
        </div>
     
        <div className={styles.mountain}>
          <Mountain />
        </div>

      </main>
    </div>
  )
}
