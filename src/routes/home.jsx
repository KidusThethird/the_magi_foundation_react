import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Blog from '../components/blogs'
import Advertisment from '../components/advertisement'
import BreakBanner from '../components/break-banner'
import OurVenue from '../components/ourVenue'


 const home = () => {
  return (
    <>
    <Hero />
    <About />
    <Blog />
    <Advertisment />
    <BreakBanner />
    <OurVenue />
 
    </>

  )
}

export default home