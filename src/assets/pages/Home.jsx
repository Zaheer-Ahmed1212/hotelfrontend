import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import SignatureStays from '../Components/SignatureStays'
import ArdeaWay from '../Components/ArdeaWay'
import BeyondTheRoom from '../Components/BeyondTheRoom'
import Testomonials from '../Components/Testomonials'
import Statistics from '../Components/Statistics'
import FinalCTA from '../Components/FinalCta'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        
        <Hero/>
        <Intro/>
        <SignatureStays/>
        <ArdeaWay/>
        <BeyondTheRoom/>
        <Testomonials/>
        <Statistics/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Home