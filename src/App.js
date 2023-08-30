import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './routes/home';
import Navbar from './components/commonComponents/nav-bar';
import OurStory from './routes/ourStory';
import OurTeam from './routes/ourTeam';
import Events from './routes/events';
import Footer from './components/commonComponents/footer';



function App() {
  return (
  

<Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/ourstory' element={<OurStory />}/>
    <Route path='/ourteam' element={<OurTeam />}/>
    <Route path='/events' element={<Events />}/>
  </Routes>



{/*  
  <Footer />
*/}

</Router>

  );
}

export default App;
