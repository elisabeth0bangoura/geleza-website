import React from "react";
import FreePlan from "./FreePlan";
import PaidPlan from "./PaidPlan";

export const metadata = {
  title: "Geleza - Pricing Plans",
  description:
    "Discover our pricing plans and choose the one that fits your needs. Geleza offers a flexible and affordable solution for all types of users.",
};

const PricingPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto py-20 max-w-3xl px-5 w-full">
        <div className="mb-8 flex items-center justify-center">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-black text-center">
          Get Started <br /> With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            Geleza{" "}
          </span>
          Today
          <br />{" "}
        </h1>
        <h2 className="text-center text-lg text-white mt-3">
          Affordable Pricing For Your Success!
        </h2>

        <FreePlan />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20"> */}
        <PaidPlan />
        {/* </div> */}
      </div>
    </div>
  );
};

export default PricingPage;
