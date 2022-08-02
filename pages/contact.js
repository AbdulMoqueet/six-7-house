import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import Hero from '../components/contact/Hero'
import Location from '../components/contact/Location'
import Map from '../components/contact/Map'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

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
      <Navbar navOpen={navOpen} handleNav={handleNav} contact={true} />
        <Hero handleNav={handleNav} />
        <ContactForm />
        <Location />
        <Map />
        <Footer />
    </Box>
  )
}

export default Contact