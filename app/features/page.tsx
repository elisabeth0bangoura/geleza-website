import React from "react";

export const metadata = {
  title: "Geleza - Features",
  description:
    "Explore the rich features of Geleza and find out how our AI-powered platform can streamline your workflow, boost productivity, and help you achieve your goals.",
};

export const revalidate = 10000;

const FeaturesPage = async () => {
  const response = await fetch("https://platform.geleza.app/api/menu");
  const menuItems = await response.json();

  return (
    <div className="w-full mx-auto max-w-7xl py-10 px-5">
      <h1 className="text-center text-white font-bold mb-2 text-2xl">
        Zeda Chat
      </h1>
      <div className="mb-8 flex items-center justify-center">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-4xl mb-16">
        <h1 className="text-center text-gray-700 md:text-5xl  text-3xl font-black">
          Meet the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Best AI Platform
          </span>{" "}
          Supercharged With +{menuItems.length} Features.
        </h1>
        <p className="text-center text-gray-900 mt-5 text-xl">
          Geleza has everything you need to take your business, studies, or
          creative work to the next level.
        </p>
        <a
          className="px-20 py-3 text-white bg-gradient-to-br from-blue-500 rounded-full via-blue-700 to-purple-700 font-normal mt-8 text-xl"
          href={"https://platform.geleza.app"}
        >
          Start For Free
        </a>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
        {menuItems.map((item: any) => (
          <li className="border border-gray-300 px-5 py-8 rounded-none">
            <h6 className="text-xl">{item.emoji}</h6>
            <h2 className="my-3  text-lg font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
      {/* <Menu items={groupedItems} /> */}
    </div>
  );
};

export default FeaturesPage;
