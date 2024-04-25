import React from "react";

import CoverImage from "../../assets/images/banner/themagicover.jpeg";

const BreakBanner = () => {
  return (
    <div
      className="mt-20 mb-10  md:grid grid-cols-2 "
      style={{
        backgroundImage: `url(${CoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="  bg-blue-700  bg-opacity-50 py-20 md:py-32 w-full pl-0 md:pl-11 slg:pl-0">
        <div className="mx-auto w-fit   flex   text-4xl slg:text-5xl font-bold space-x-5  ">
          <h1 className="text-white">Support </h1>
          <h1 className=" text-sky-300 underline ">The Cause</h1>
        </div>
        <div className="flex justify-center">
          <h1 className="pt-4 px-4  text-white text-center ">
            Thank you for visiting THE MAGI page and for considering becoming a
            part of our mission to support needy and orphaned children in
            Ethiopia. Your generosity can make a significant difference in the
            lives of these children. With just a $10 monthly autopay
            subscription, you can provide vital support that covers all
            educational expenses for one child for an entire year. From school
            supplies to tuition fees, your contribution ensures that these
            children have access to the education they deserve.
          </h1>
        </div>
      </div>

      <div className=" bg-blue-700 bg-opacity-50 w-full h-full flex pb-12 md:pb-0 ">
        <a
          href="/choosedonation"
          className="bg-white  text-gray-700 font-semibold px-5 py-3 rounded-full m-auto 
        hover:bg-sky-700 hover:text-white duration-200"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default BreakBanner;
