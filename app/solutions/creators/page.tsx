import React from "react";
import Chat from "../Chat";
import Docs from "../Docs";
import Header from "../Header";
import Features from "./Features";
import Play from "./Play";

export const metadata = {
  title: "Geleza - For Creators",
  description:
    "Take your content creation to the next level with Geleza AI tools for content creators. Our suite of AI-powered tools, including content creation, editing, and optimization features, will help you create better content and grow your audience.",
};

const CreatorSolutions = () => {
  return (
    <div>
      <Header
        title="For Creators"
        description="Create better content and grow your audience with Geleza AI tools. The Ultimate Suite for Creators"
      />
      <Play />
      <Features />
      <Docs />
      <Chat />
    </div>
  );
};

export default CreatorSolutions;
