import React, { useEffect, useState } from "react";
import { AdvertisementList } from "../../utils/advertisement";
import { motion } from "framer-motion";

import Ad2Image2 from "../../assets/images/advertisement/eventpic002.jpg";
import AdVideo from "../../assets/images/advertisement/video/eventvid002.mp4";
//import './TextAnimation.css';

const Advertisement = () => {
  return (
    <div>
      {AdvertisementList.map((ad) => {
        const datesCharacters = ad.date.split("");

        return (
          <div
            key={ad.id}
            className="slg:grid grid-cols-3 shadow-xl shadow-sky-300 mx-5 md:mx-20 rounded-2xl bg-gradient-to-b slg:bg-gradient-to-r from-sky-700 to-gray-300"
          >
            <div className="col-span-2 flex flex-col p-2 md:p-10 w-full justify-evenly space-y-3 md:space-y-0">
              <h1 className="text-3xl font-semibold text-white">{ad.title}</h1>
              <h1 className="text-lg text-yellow-400 font-semibold">
                {ad.miniTitle}
              </h1>

              <div className="typing-animation">
                {datesCharacters.map((character, index) => (
                  <motion.span
                    key={ad.date}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    //   transition={{ duration: 5, delay: 5, repeat: Infinity, repeatDelay: 1 }}
                    className="text-2xl sm:text-3xl lg:text-5xl text-white font-bold"
                  >
                    {character}
                  </motion.span>
                ))}
              </div>

              <p className="text-white">Location: {ad.location}</p>
              <p className="text-lg font-semibold text-yellow-300">
                {ad.description}
              </p>
            </div>

            <div className="col-span-1 p-5 md:p-10">
              <motion.img
                initial={{ y: 0 }}
                animate={{
                  y: [-10, 10, -10], // Floating animation along the y-axis
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="rounded-3xl w-1/2 slg:w-full mx-auto"
                src={ad.images[0]}
                alt=""
              />
            </div>
          </div>
        );
      })}

      {/* <div className=" w-full flex">
        <div className=" w-fit mx-auto">
          <div className="my-10 w-fit ">
            <video controls className="px-7 md:h-1/2 md:w-1/2  md:mx-auto ">
              <source src={AdVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Advertisement;
