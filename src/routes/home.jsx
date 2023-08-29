import React from 'react'
import Hero from '../components/hero'
import About from '../components/about'
import Blog from '../components/blogs'
import Advertisment from '../components/advertisement'
import BreakBanner from '../components/break-banner'
import OurVenue from '../components/ourVenue'
import Testimonial from '../components/testimonial'
import ContactUsForm from '../components/contactUsForm'
import Footer from '../components/footer'
import SponsorShip from '../components/sponsorShip'


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
    <Footer />
 
    </>

  )
}

export default home