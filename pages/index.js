import { useState, useEffect } from "react";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Slides from "../components/MySlides";
import Navbar from "../components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  const [navOpen, setNavOpen] = useState(false)

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


  const handleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <div>
      <Navbar navOpen={navOpen} handleNav={handleNav} />
      <Hero handleNav={handleNav} />
      <Slides />
      <Discover />
      <Gallery />
      <Footer />
    </div>
  )
}
