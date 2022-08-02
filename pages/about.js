import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Hero from '../components/about/Hero'
import MySlides from '../components/about/MySlides'
import WeStandFor from '../components/about/WeStandFor'
import Footer from '../components/Footer'
import Discover from '../components/home/Discover'
import Navbar from '../components/Navbar'

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

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
            <Navbar navOpen={navOpen} handleNav={handleNav} about={true} />
            <Hero handleNav={handleNav} />
            <MySlides />
            <WeStandFor />
            <Discover hide={true} />
            <Footer />
        </Box>
    )
}

export default About