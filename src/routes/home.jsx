import React from 'react'
import Hero from '../components/homePageComponents/hero'
import About from '../components/homePageComponents/about'
import Blog from '../components/homePageComponents/blogs'
import Advertisment from '../components/homePageComponents/advertisement'
import BreakBanner from '../components/homePageComponents/break-banner'
import OurVenue from '../components/homePageComponents/ourVenue'
import Testimonial from '../components/homePageComponents/testimonial'
import ContactUsForm from '../components/commonComponents/contactUsForm'

import SponsorShipSample from '../components/homePageComponents/sponsorShipsample'


 const home = (props) => {
  const setBlogIndex = props.setBlogIndex;
  return (
    <>
    <Hero />
    <About />
    <Blog setBlogIndex={setBlogIndex}/>
    <Advertisment />
    <BreakBanner />
    <SponsorShipSample />
    <OurVenue />
    <Testimonial />
    <ContactUsForm />
   
 
    </>

  )
}

export default home