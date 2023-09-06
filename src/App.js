import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './routes/home';
import Navbar from './components/commonComponents/nav-bar';
import OurStory from './routes/ourStory';
import OurTeam from './routes/ourTeam';
import Events from './routes/events';
import Footer from './components/commonComponents/footer';
import EventDetails from './routes/eventDetails';
import { useState } from 'react';
import Gallery from './routes/gallery';
import SponsorShip from './routes/sponsorShip';
import SponsorshipDetails from './routes/sponsorshipDetails';
import Blogs from './routes/blogs';
import BlogDetails from './routes/blogDetails';
import Contact from './routes/contact';




function App() {

const [eventIndex, setEventIndex] = useState("001");
const [sponsorShipIndex, setSponsorShipIndex] = useState ('0');
const [blogIndex , setBlogIndex] = useState('0');

//image category Selection
const [categorySelected , setCategorySelected] = useState("all");

  return (
  

<Router>
  <Navbar setCategorySelected={setCategorySelected}/>
  <Routes>
   
   <Route path='/the_magi_foundation_react/' element={<Home setBlogIndex={setBlogIndex}/>}/>
   <Route path='/the_magi_foundation_react/ourstory' element={<OurStory />}/>
   <Route path='/the_magi_foundation_react/ourteam' element={<OurTeam />}/>
   <Route path='/the_magi_foundation_react/events' element={<Events  setEventIndex={setEventIndex}/>}/>
   <Route path='/the_magi_foundation_react/eventdetails' element={<EventDetails  eventIndex={eventIndex} />} />
   <Route path='/the_magi_foundation_react/gallery' element={<Gallery categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>} />
   <Route path='/the_magi_foundation_react/sponsorship' element={<SponsorShip   setSponsorShipIndex={setSponsorShipIndex}/>}/>
   <Route path='/the_magi_foundation_react/sponsorshipdetails' element={<SponsorshipDetails sponsorShipIndex={sponsorShipIndex} />}/>
   <Route path='/the_magi_foundation_react/blogs' element={<Blogs setBlogIndex={setBlogIndex}/>} />
   <Route path='/the_magi_foundation_react/blogdetails' element={<BlogDetails blogIndex={blogIndex}/>} />
   <Route path='/the_magi_foundation_react/contact' element={<Contact/>} />
   
  </Routes>




  <Footer />


</Router>

  );
}

export default App;
