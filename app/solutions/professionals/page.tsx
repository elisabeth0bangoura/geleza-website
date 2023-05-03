import React from "react";
import Chat from "../Chat";
import Header from "../Header";
import Docs from "../Docs";
import Features from "./Features";
// import PrepPal from "./PrepPal";

export const metadata = {
  title: "Geleza - For Professionals",
  description:
    "Discover the best AI tools for professionals on Geleza. Our platform offers advanced solutions to help you maximize your productivity and streamline your workflow.",
};

const ProfessionalSolution = () => {
  return (
    <div>
      <Header
        title="For Professionals"
        description="Boost your productivity and streamline your workflow with Geleza's powerful AI tools for professionals."
      />
      {/* <PrepPal /> */}
      <Features />
      <Docs />
      <Chat />
    </div>
  );
};

export default ProfessionalSolution;
