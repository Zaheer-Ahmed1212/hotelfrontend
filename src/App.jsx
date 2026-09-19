import { useState } from 'react'
import Home from './assets/pages/Home'
import Stay from './assets/pages/Stay'
import { Route, Routes } from 'react-router-dom'
import TheHouse from './assets/pages/TheHouse'
import Experiences from './assets/pages/Experiences'
import Journal from './assets/pages/Journal'
import Navbar from './assets/Components/Navbar'
import FindAStay from './assets/pages/FindAStay'
import TheTable from './assets/Components/TheTable'
import TheQuietRoom from './assets/Components/TheQuietRoom'
import Outward from './assets/Components/Outward'
import LocalHour from './assets/Components/LocalHour'
import JournalArticle from './assets/pages/JournalArticle'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/stays' element={ <Stay/>} />
    <Route path='/house' element={ <TheHouse/>} />
    <Route path='/experiences' element={ <Experiences/>} />
    <Route path='/journal' element={ <Journal/>} />
    <Route path='//journal/:slug' element={ <JournalArticle/>} />
    <Route path='/findstay' element={ <FindAStay/>} />
    <Route path='/experiences/thetable' element={ <TheTable/>} />
    <Route path='/experiences/quietroom' element={ <TheQuietRoom/>} />
    <Route path='/experiences/outward' element={ <Outward/>} />
    <Route path='/experiences/localhour' element={ <LocalHour/>} />

    </Routes>
    </>
  )
}

export default App
