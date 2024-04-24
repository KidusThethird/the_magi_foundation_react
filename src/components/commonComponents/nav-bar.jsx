import React, { useState } from "react";
import Logo from "../../assets/images/logo/themagilogo1.png";
//import { Link } from 'react-router-dom';
import { List, X, CaretDown } from "@phosphor-icons/react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
const Navbar = (props) => {
  const setCategorySelected = props.setCategorySelected;

  const [dropDownList, setDropDownList] = useState(false);
  const [aboutList, setAboutList] = useState(false);
  const [galleryList, setGalleryList] = useState(false);

  const toggleDropDownList = () => {
    dropDownList ? setDropDownList(false) : setDropDownList(true);
    console.log("print");
  };

  const toggleAboutList = () => {
    aboutList ? setAboutList(false) : setAboutList(true);
  };
  const toggleGalleryList = () => {
    galleryList ? setGalleryList(false) : setGalleryList(true);
  };
  const toDefalult = () => {
    toggleDropDownList();
    setAboutList(false);
    setGalleryList(false);
  };

  return (
    <>
      <div className="fixed z-50 w-full ">
        <div className="flex justify-between px-8 lg:px-0 lg:justify-around bg-blue-900 text-white py-3  ">
          <div className="my-auto flex">
            <img className="w-8" src={Logo} alt="" />
            <a href="/">
              <h1 className=" sm:block sm:text-xl my-auto pl-5 smd:text-2xl font-semibold text-sky-400">
                {" "}
                The Magi Foundation{" "}
              </h1>
            </a>
          </div>

          <div className="hidden lg:flex space-x-10 my-auto  ">
            <Link className="navhover" to="/#top">
              Home
            </Link>

            <div className=" group relative  ">
              <h1 className="cursor-pointer group-hover:navhover">About</h1>
              <div className="hidden group-hover:block absolute w-32  left-0 z-50">
                <div className="flex flex-col px-4 py-1 space-y-2 w-full  bg-blue-900 rounded-b-2xl">
                  <Link className="navhover" to="ourstory#top">
                    Our Story
                  </Link>
                  <Link className="navhover" to="/ourteam#top">
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            <Link className="navhover" to="/events#top">
              Events
            </Link>

            <div className="group relative">
              <h1 className="cursor-pointer navhover">Gallery</h1>
              <div className="hidden group-hover:block absolute w-32  left-0 z-50">
                <div className="flex flex-col px-4 py-1 space-y-2 w-full  bg-blue-900 rounded-b-2xl">
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => setCategorySelected("all")}
                  >
                    All
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => setCategorySelected("school")}
                  >
                    School
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => setCategorySelected("debrebrhan")}
                  >
                    Debrebrhan
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => setCategorySelected("other")}
                  >
                    Other
                  </Link>
                </div>
              </div>
            </div>
            <Link className="navhover" to="/sponsorship#top">
              SponsorShip
            </Link>
            <Link className="navhover" to="/blogs#top">
              Blog
            </Link>
            <Link className="navhover" to="/contact#top">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block bg-sky-600 px-4 py-2 rounded-3xl duration-150 hover:scale-105 hover:font-bold hover:bg-sky-400 ">
            <button>
              <a
                // target="_blank"
                href="/choosedonation"
                //  href="https://www.paypal.com/donate/?hosted_button_id=9V5YC8K6HDLBC"
              >
                {" "}
                Donate
              </a>
            </button>
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => toggleDropDownList()}
          >
            {!dropDownList && <List size={32} />}
            {dropDownList && <X size={32} />}
          </div>
        </div>

        {dropDownList && (
          <motion.div
            initial={{ x: "100%" }} // Initial state (off-screen to the left)
            animate={{ x: dropDownList && 0 }} // Animation state (visible or off-screen)
            transition={{ duration: 0.3 }} // Duration of the animation
            className="w-full flex relative  "
          >
            <div className="w-1/2  smd:w-1/3 overflow-y-auto max-h-[500px] scroll-auto  absolute right-0 rounded-bl-2xl shadow-2xl shadow-blue-700 bg-blue-900 bg-opacity-90 text-white  flex flex-col text-left pl-7 space-y-5 py-5">
              <Link
                className="navhover"
                onClick={() => toDefalult()}
                to="/#top"
              >
                Home
              </Link>
              <div
                onClick={() => toggleAboutList()}
                className="flex  space-x-2"
              >
                <h1 className="cursor-pointer navhover">About</h1>
                <CaretDown className="cursor-pointer my-auto" size={15} />
              </div>
              {aboutList && (
                <motion.div
                  initial={{ y: "-50%" }} // Initial state (off-screen to the left)
                  animate={{ y: aboutList && 0 }} // Animation state (visible or off-screen)
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex flex-col space-y-5"
                >
                  <Link
                    className="navhover"
                    onClick={() => toDefalult()}
                    to="/ourstory#top"
                  >
                    Our Story
                  </Link>
                  <Link
                    className="navhover"
                    onClick={() => toDefalult()}
                    to="/ourteam#top"
                  >
                    Our Team
                  </Link>
                </motion.div>
              )}

              <Link
                className="navhover"
                onClick={() => toDefalult()}
                to="/events#top"
              >
                Events
              </Link>
              <div
                onClick={() => toggleGalleryList()}
                className="flex  space-x-2"
              >
                <h1 className="cursor-pointer navhover">Gallery</h1>
                <CaretDown className="cursor-pointer my-auto" size={15} />
              </div>
              {galleryList && (
                <motion.div
                  initial={{ y: "-50%" }} // Initial state (off-screen to the left)
                  animate={{ y: galleryList && 0 }} // Animation state (visible or off-screen)
                  transition={{ duration: 0.3 }} // Duration of the animation
                  className="ml-4 flex flex-col space-y-5"
                >
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => {
                      setCategorySelected("all");
                      toDefalult();
                    }}
                  >
                    All
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => {
                      setCategorySelected("school");
                      toDefalult();
                    }}
                  >
                    School
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => {
                      setCategorySelected("debrebrhan");
                      toDefalult();
                    }}
                  >
                    Debrebrhan
                  </Link>
                  <Link
                    className="navhover"
                    to="/gallery#top"
                    onClick={() => {
                      setCategorySelected("other");
                      toDefalult();
                    }}
                  >
                    Other
                  </Link>
                </motion.div>
              )}

              <Link
                className="navhover"
                onClick={() => toDefalult()}
                to="/sponsorship#top"
              >
                SponsorShip
              </Link>
              <Link
                className="navhover"
                onClick={() => toDefalult()}
                to="/blogs#top"
              >
                Blog
              </Link>
              <Link
                className="navhover"
                onClick={() => toDefalult()}
                to="/contact#top"
              >
                Contact
              </Link>
              <div>
                <button className="bg-sky-600 px-3 py-1 rounded-2xl hover:bg-sky-500 hover:scale-105 duration-150">
                  <a
                    //  target="_blank"
                    //   href="https://www.paypal.com/donate/?hosted_button_id=9V5YC8K6HDLBC"
                    href="/choosedonation"
                  >
                    {" "}
                    Donate
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
