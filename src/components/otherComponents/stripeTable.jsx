import React, { useEffect } from "react";

export const StripePricingTable = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return React.createElement("stripe-pricing-table", {
    "pricing-table-id": "prctbl_1P9m8g06dBwhLXyWK8buXsb4",
    "publishable-key":
      "pk_live_51P8azd06dBwhLXyW7ZMeg4GX9efdK0OXEMeaR0cv8dOFKqhgAEwixsECtKm99B19ckJ877l8VpOQ9Y3JaaHZ5rGK00QzcYrgPt",
  });
};

export default StripePricingTable;
