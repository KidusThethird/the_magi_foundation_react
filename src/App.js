import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./routes/home";
import Navbar from "./components/commonComponents/nav-bar";
import OurStory from "./routes/ourStory";
import OurTeam from "./routes/ourTeam";
import Events from "./routes/events";
import Footer from "./components/commonComponents/footer";
import EventDetails from "./routes/eventDetails";
import { useState } from "react";
import Gallery from "./routes/gallery";
import SponsorShip from "./routes/sponsorShip";
import SponsorshipDetails from "./routes/sponsorshipDetails";
import Blogs from "./routes/blogs";
import BlogDetails from "./routes/blogDetails";
import Contact from "./routes/contact";
import DHome from "./dashboard/pages/dHome";
import DNavbar from "./dashboard/components/dNavbar";
import ChoosePayment from "./routes/choosePayment";

function App() {
  const [eventIndex, setEventIndex] = useState("001");
  const [sponsorShipIndex, setSponsorShipIndex] = useState("0");
  const [blogIndex, setBlogIndex] = useState("0");

  //image category Selection
  const [categorySelected, setCategorySelected] = useState("all");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {" "}
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home setBlogIndex={setBlogIndex} />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourteam" element={<OurTeam />} />

          {
            <Route
              path="/events"
              element={<Events setEventIndex={setEventIndex} />}
            />
          }
          <Route
            path="/eventdetails"
            element={<EventDetails eventIndex={eventIndex} />}
          />
          <Route
            path="/gallery"
            element={
              <Gallery
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
              />
            }
          />
          <Route
            path="/sponsorship"
            element={<SponsorShip setSponsorShipIndex={setSponsorShipIndex} />}
          />
          <Route
            path="/sponsorshipdetails"
            element={<SponsorshipDetails sponsorShipIndex={sponsorShipIndex} />}
          />
          <Route
            path="/blogs"
            element={<Blogs setBlogIndex={setBlogIndex} />}
          />
          <Route
            path="/blogdetails"
            element={<BlogDetails blogIndex={blogIndex} />}
          />
          <Route path="/choosedonation" element={<ChoosePayment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Dashboard links*/}
        <Route path="/dashboard" element={<DNavbar />}>
          <Route path="/dashboard" element={<DHome />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
