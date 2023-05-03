import About from "../components/homepage/About";
import Connect from "../components/homepage/Connect";
import Hero from "../components/homepage/Hero";
import Marketing from "../components/homepage/Marketing";
import WhatYouGet from "../components/homepage/WhatYouGet";

export const metadata = {
  title: "Geleza - Home",
  description:
    "Geleza is the ultimate all-in-one platform for students, professionals, and businesses, offering AI-powered tools that help you work smarter and faster. With features like automated text summarization, content generation, and advanced chat, Geleza empowers creators to optimize their workflow and unlock their full potential. Join us today and experience the future of work!",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Marketing />
      <WhatYouGet />
      <Connect />
    </div>
  );
};

export default Home;
