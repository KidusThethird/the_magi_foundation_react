import React from "react";
import Hero from "../components/homePageComponents/hero";
import About from "../components/homePageComponents/about";
import Blog from "../components/homePageComponents/blogs";
import Advertisment from "../components/homePageComponents/advertisement";
import BreakBanner from "../components/homePageComponents/break-banner";
import OurVenue from "../components/homePageComponents/ourVenue";
import Testimonial from "../components/homePageComponents/testimonial";
import ContactUsForm from "../components/commonComponents/contactUsForm";

import SponsorShipSample from "../components/homePageComponents/sponsorShipsample";
import YoutubeSection from "../components/homePageComponents/youtubeSection";
import Footer from "../components/commonComponents/footer";
import ImageSlider from "../components/homePageComponents/imageslide";

const home = (props) => {
  const setBlogIndex = props.setBlogIndex;
  return (
    <>
      <Hero />
      <YoutubeSection />
      <About />
      <Blog setBlogIndex={setBlogIndex} />
      <Advertisment />
      <ImageSlider />
      <BreakBanner />
      <SponsorShipSample />
      <OurVenue />
      <Testimonial />
      <ContactUsForm />
      <Footer />
    </>
  );
};

export default home;
