import React from "react";
import Chat from "../Chat";
import Header from "../Header";
import Features from "./Features";
import PrepPal from "./PrepPal";

export const metadata = {
  title: "Geleza - For Students",
  description:
    "Get ahead with Geleza's AI-powered solutions for students. Our platform offers a suite of AI-powered tools and solutions to help students achieve academic success.",
};

const StudentSolution = () => {
  return (
    <div>
      <Header
        title="For Students"
        description=" Discover a suite of AI-powered tools and solutions to help students achieve academic success."
      />
      <PrepPal />
      <Features />
      <Chat />
    </div>
  );
};

export default StudentSolution;
