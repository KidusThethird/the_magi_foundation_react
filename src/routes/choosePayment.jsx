import React from "react";

import Footer from "../components/commonComponents/footer";
import StripePricingTable from "../components/otherComponents/stripeTable";

export default function ChoosePayment() {
  return (
    <div>
      <div className="w-full flex py-11 md:py-28">
        <div className="my-14 w-full   space-y-5">
          <div className="w-3/4 mx-auto">
            <div className="font-semibold">
              <h1 className="text-center text-2xl py-2">
                With just $10 a month, you can make a huge difference.{" "}
              </h1>
              <p className="text-center">
                {" "}
                This small amount covers all educational expenses for one child
                for an entire Year. Your subscription will ensure that these
                children have access to the education they deserve, giving them
                hope for a brighter future.
              </p>{" "}
              <p className="text-center">
                Your generosity truly matters. To make a difference today,
                simply click the "Donate Now" button below and set up your $10
                monthly autopay subscription. Together, we can change lives.
                Thank you for your kindness and compassion.
              </p>
            </div>
          </div>
          {/* <div className="flex mx-auto w-full">
            <div className="w-fit mx-auto">
              <a
                target="_blank"
                href="https://buy.stripe.com/fZecQS8W1dac3xC28a"
              >
                <h1 className="text-purple-600 bg-gray-300 p-4 text-2xl font-bold rounded-2xl  hover:bg-purple-600 hover:text-white duration-150 ">
                  Subscribe Now
                </h1>
              </a>
            </div>
          </div> */}

          <div className="py-5">
            <StripePricingTable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
