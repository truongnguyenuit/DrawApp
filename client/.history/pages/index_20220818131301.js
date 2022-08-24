import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
    <Head>
      <title>Draw App</title>
      <script src="https://kit.fontawesome.com/cd2089affa.js" crossorigin="anonymous"></script>
    </Head>
      Hello world!
      <i className="fa-brands fa-facebook-f text-blue-500"></i>
    </div>
  )
}
