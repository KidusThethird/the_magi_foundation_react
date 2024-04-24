import React from "react";

export default function ChoosePayment() {
  return (
    <div>
      <div className="w-full flex py-11">
        <div className="my-14 mx-auto  space-y-5">
          <div>
            <h1 className="font-semibold">Choose your donation method</h1>
          </div>
          <div className="flex mx-auto space-x-5">
            <div>
              <a
                target="_blank"
                href="https://www.paypal.com/donate/?hosted_button_id=9V5YC8K6HDLBC"
              >
                <h1 className="text-blue-600 bg-gray-300 p-4 text-2xl font-bold rounded-2xl hover:bg-blue-600 hover:text-white duration-150 ">
                  Paypal
                </h1>
              </a>
            </div>

            <div>
              <a
                target="_blank"
                href="https://donate.stripe.com/dR6046c8d3zC8RW5kk"
              >
                <h1 className="text-purple-600 bg-gray-300 p-4 text-2xl font-bold rounded-2xl  hover:bg-purple-600 hover:text-white duration-150 ">
                  Stripe
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
