import React from 'react'
import Navbar from "../../components/Navbar/NavbarElements";
import OurNews from '../../components/OurNews';
import CoffeNews from '../../components/CoffeeNews';
import Footer from '../../components/Footer';


const News = () => {
  return (
    <div>
        <Navbar/>
        <OurNews/>
        <CoffeNews/>
        <Footer/>
    </div>
  )
}

export default News