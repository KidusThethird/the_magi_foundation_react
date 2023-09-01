import React from 'react'
import Hero from '../components/homePageComponents/hero'
import About from '../components/homePageComponents/about'
import Blog from '../components/homePageComponents/blogs'
import Advertisment from '../components/homePageComponents/advertisement'
import BreakBanner from '../components/homePageComponents/break-banner'
import OurVenue from '../components/homePageComponents/ourVenue'
import Testimonial from '../components/homePageComponents/testimonial'
import ContactUsForm from '../components/commonComponents/contactUsForm'

import SponsorShip from '../components/homePageComponents/sponsorShip'


 const home = () => {
  return (
    <>
    <Hero />
    <About />
    <Blog />
    <Advertisment />
    <BreakBanner />
    <SponsorShip />
    <OurVenue />
    <Testimonial />
    <ContactUsForm />
   
 
    </>

  )
}

export default home