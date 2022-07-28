import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Info from '../components/Info'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ice-cream-shop</title>
        <meta name="description" content="new ice creams shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <img src='/oreo.jpg' alt = 'home'></img>
      </div>
      <Info/>
    </div>
  )
}
