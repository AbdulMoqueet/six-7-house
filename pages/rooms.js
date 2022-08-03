import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Hero from '../components/rooms/Hero'
import OurRooms from '../components/rooms/OurRooms'
import Footer from '../components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar'

const Rooms = () => {

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
      <OurRooms />
      <Footer />
    </Box>
  )
}

export default Rooms