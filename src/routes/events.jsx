import React from "react";
//import { Link } from 'react-router-dom';
import { EventsList } from "../utils/events";
import EventDetails from "./eventDetails";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "../components/commonComponents/footer";

const Events = (props) => {
  const setEventIndex = props.setEventIndex;

  const changeEventIndex = (event_id) => {
    setEventIndex(event_id);
    console.log(event_id);
  };

  return (
    <div className="pt-20">
      <div className="text-4xl font-semibold flex w-fit mx-auto">
        <h1 className="text-gray-700">Eve</h1>
        <h1 className="text-sky-700 underline">nts</h1>
      </div>

      <div className="grid grid-cols-1 lsm:grid-cols-2 md:grid-cols-3 mx-10 py-10 overflow-hidden">
        {EventsList.map((chosen_event) => {
          return (
            <Link to="/eventdetails#top">
              <div
                onClick={() => changeEventIndex(chosen_event.id)}
                className="bg-green-500 mb-20 rounded-2xl relative overflow-hidden cursor-pointer hover:scale-105 duration-200  w-fit mx-auto shadow-2xl shadow-sky-700"
              >
                <div className="w-fit lsm:w-48 sm:w-60 md:w-52 slg:w-60 lg:w-fit ">
                  <img
                    className="mx-auto w-fit "
                    src={chosen_event.image}
                    alt=""
                  />
                </div>

                <div className="  absolute bottom-9 w-full text-center  ">
                  <h1 className=" text-center text-xl bg-sky-700 bg-opacity-80 text-white">
                    {chosen_event.title}
                  </h1>
                </div>

                <div className="absolute top-0 w-full text-center   ">
                  <h1 className="text-center text-xl bg-sky-700 bg-opacity-80 text-white rounded-t-2xl">
                    {chosen_event.date}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
