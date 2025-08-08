import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { navData } from './json'
import Guide from './components/Guide'
import { traincard, hotelcard, globalcard } from './json'
import Recent from './components/Recent'
import { trip, temple, mountain, Man } from './json'
import Destination from './components/Destination'
import { popular,popularcard1,popularcard2,popularcard3,popularcard4,popularcard5,popularcard6 } from './json'

function App() {
  return (
    <>
      <Navbar nav = {navData}/>
      <section className="travel-area">
        <div className="group">
          <Guide image={traincard.image} heading={traincard.heading} paragraph={traincard.paragraph} />
          <Guide image={hotelcard.image} heading={hotelcard.heading} paragraph={hotelcard.paragraph} />
          <Guide image={globalcard.image} heading={globalcard.heading} paragraph={globalcard.paragraph} />
        </div>
      </section>
      <section className="trips">
        <div className="groupes">
          <Recent title={trip.title} />
          <Recent image={temple.image} heading={temple.heading} paragraph={temple.paragraph} />
          <Recent image={mountain.image} heading={mountain.heading} paragraph={mountain.paragraph} />
          <Recent image={Man.image} heading={Man.heading} paragraph={Man.paragraph} />
        </div>
      </section>
      <section className="destination">
        <div className="container">
          <Destination heading={popular.heading} description={popular.description} />
          
        </div>
      </section>
    </>
  )
}

export default App
