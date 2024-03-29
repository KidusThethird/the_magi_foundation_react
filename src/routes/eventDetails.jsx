import React, { useEffect, useState } from "react";
import { EventsList } from "../utils/events";
import { Link } from "react-router-dom";
import Footer from "../components/commonComponents/footer";

const EventDetails = (props) => {
  const eventIndex = props.eventIndex;
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    EventsList.map((event) => {
      console.log(eventIndex);
      if (event.id == eventIndex) {
        console.log("true");
        setTitle(event.title);
        setDate(event.date);
        setDescription(event.description);
        setImage(event.image);
        setSubTitle(event.subtitle);
      }
    });
  }, []);

  return (
    <>
      <div className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 mx-2 my-5 md:my-0 md:mx-10 bg-gradient-to-r from-sky-700 to-purple-500 rounded">
          <div className="pl-3">
            <img
              className="mx-auto  rounded-xl overflow-hidden"
              src={image}
              alt=""
            />
          </div>

          <div className="text-white px-5 py-5">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h1 className="font-bold py-3">{date}</h1>
            <h1 className="py-2 text-gray-300">{subTitle}</h1>
            <h1>{description}</h1>
            <Link to="/events">
              <button
                className="mt-5  bg-sky-700 px-3 py-1   h-fit rounded-2xl shadow-xl
                hover:bg-sky-500 duration-150"
              >
                More Events
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
