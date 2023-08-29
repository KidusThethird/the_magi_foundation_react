import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Blog from '../components/blogs'
import Advertisment from '../components/advertisement'
import BreakBanner from '../components/break-banner'
import OurVenue from '../components/ourVenue'
import Testimonial from '../components/testimonial'
import ContactUsForm from '../components/contactUsForm'


 const home = () => {
  return (
    <>
    <Hero />
    <About />
    <Blog />
    <Advertisment />
    <BreakBanner />
    <OurVenue />
    <Testimonial />
    <ContactUsForm />
 
    </>

  )
}

export default home