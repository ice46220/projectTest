import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Information from '../components/Information'
import MarketDiffForm from '../components/MarketDiffForm'

import Topbar from '../components/Topbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
    <div className=" ">
      
        <Topbar/>
        <Information/>

        
        
    </div>
  )
}

export default Home
