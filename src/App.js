import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './routes/home';
import Navbar from './components/commonComponents/nav-bar';
import OurStory from './routes/ourStory';
import OurTeam from './routes/ourTeam';
import Events from './routes/events';
import Footer from './components/commonComponents/footer';
import EventDetails from './components/eventComponents/eventDetails';
import { useState } from 'react';



function App() {

const [eventIndex, setEventIndex] = useState("001");

  return (
  

<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/ourstory' element={<OurStory />}/>
    <Route path='/ourteam' element={<OurTeam />}/>
    <Route path='/events' element={<Events  setEventIndex={setEventIndex}/>}/>
    <Route path='/eventdetails' element={<EventDetails  eventIndex={eventIndex} />} />
  </Routes>



{/*  
  <Footer />
*/}

</Router>

  );
}

export default App;
