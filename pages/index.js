import { useState } from "react";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Slides from "../components/MySlides";
import Navbar from "../components/Navbar";

export default function Home() {

  const [navOpen, setNavOpen] = useState(false)

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
