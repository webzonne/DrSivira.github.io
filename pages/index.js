import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/slider'
import Footer from '../components/Footer'
import About from '../components/About'
import Contacto from '../components/Contacto'
import Banner from '../components/Banner'
import Info from '../components/Info'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider/>
        <Info/>
        <Banner/>
        <About/>
        <Contacto/>
        <Footer/>
      </main>
    </div>
  )
}
