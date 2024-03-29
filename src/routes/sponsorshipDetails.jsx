import React, { useEffect, useState } from "react";
import { KidsList } from "../utils/kidsToSponsor";
import { motion } from "framer-motion";
import Footer from "../components/commonComponents/footer";

const SponsorshipDetails = (props) => {
  const sponsorShipIndex = props.sponsorShipIndex;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ visibility: loaded ? "visible" : "hidden" }}
        className="pt-10"
      >
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2  bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="mx-auto py-5 px-5">
            <img
              className="w-3/4 mx-auto rounded-2xl shadow-2xl"
              src={KidsList[sponsorShipIndex].image}
              alt=""
            />
          </div>
          <div className="h-full flex">
            <div className="my-auto mx-5 space-y-4 text-white text-lg">
              <h1>
                {" "}
                <span className="font-semibold">Name: </span>{" "}
                {KidsList[sponsorShipIndex].name}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Gender:</span>{" "}
                {KidsList[sponsorShipIndex].gender}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Status:</span>{" "}
                {KidsList[sponsorShipIndex].status}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Class:</span>{" "}
                {KidsList[sponsorShipIndex].class}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">City:</span>{" "}
                {KidsList[sponsorShipIndex].city}
              </h1>

              <h1>
                <span className="font-semibold">Subcity:</span>{" "}
                {KidsList[sponsorShipIndex].subCity}
              </h1>
              <h1>
                <span className="font-semibold">Kebele: </span>
                {KidsList[sponsorShipIndex].kebele}
              </h1>
              <div className="">
                <button className="bg-sky-700 px-3 py-1 rounded-2xl">
                  Sponsor
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default SponsorshipDetails;
