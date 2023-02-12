import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Information from '../components/Information'
import MarketDiffForm from '../components/DocumentForm'

import Topbar from '../components/Topbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    

    <div className="  font-['Itim']">
      <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </div>
        <Topbar/>
        <Information/>
        
    </div>
  )
}

export default Home
