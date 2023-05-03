import React from "react";
import Chat from "../Chat";
import Docs from "../Docs";
import Header from "../Header";
import Features from "./Features";
import Grow from "./Grow";

export const metadata = {
  title: "Geleza - For Businesses",
  description:
    "Discover how Geleza's AI solutions can transform your business operations. Streamline processes, reduce costs, and improve efficiency with our powerful tools.",
};

const BusinessSolutions = () => {
  return (
    <div>
      <Header
        title="For Businesses"
        description="Geleza offers a range of AI-powered solutions to help businesses optimize their operations, reduce costs, and improve efficiency."
      />
      <Grow />
      <Features />
      <Docs />
      <Chat />
    </div>
  );
};

export default BusinessSolutions;
