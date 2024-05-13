import React from 'react'
import Navbar from '../../components/Navbar/NavbarElements'
import UpcomingEvent from '../../components/UpcomingEvents'
import ClosedEvent from '../../components/ClosedEvents'
import Footer from '../../components/Footer'

const Events = () => {
  return (
    <div>
        <Navbar/>
        <UpcomingEvent/>
        <ClosedEvent/>
        <Footer/>
    </div>
  )
}

export default Events