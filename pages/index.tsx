import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Information from '../components/Information'

import Topbar from '../components/Topbar'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
const Home: NextPage = () => {
  return (
    

    <div className="  font-['Itim']">
      <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </div>
        {/* <Topbar/>
        <Information/> */}
        <Login/>
        
    </div>
  )
}

export default Home
