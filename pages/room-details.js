import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Map from '../components/roomDetails/Map'
import Details from '../components/roomDetails/Details'
import Hero from '../components/roomDetails/Hero'
import MySlides from '../components/roomDetails/MySlides'
import Gallery from '../components/roomDetails/Gallery'
import Footer from '../components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'

const RoomDetails = () => {

  const [navOpen, setNavOpen] = useState(false)

  const handleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {

    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();

  }, [])


  return (
    <Box>
      <Navbar navOpen={navOpen} handleNav={handleNav} rooms={true} />
      <Hero handleNav={handleNav} />
      <Details />
      <MySlides />
      <Map />
      <Gallery />
      <Footer />
    </Box>
  )
}

export default RoomDetails