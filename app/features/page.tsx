import React from "react";
import menu, { MenuItem } from "./menu";

export const metadata = {
  title: "Geleza - Features",
  description:
    "Explore the rich features of Geleza and find out how our AI-powered platform can streamline your workflow, boost productivity, and help you achieve your goals.",
};

const FeaturesPage = () => {
  const groupedItems = menu.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  type MenuProps = {
    items: Record<string, MenuItem[]>;
  };

  const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
      <div className="my-5">
        {Object.entries(items).map(([groupName, groupItems]) => (
          <div key={groupName} className="mb-6">
            <h2 className="text-xl font-bold mb-3">☑️ {groupName}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-7">
              {groupItems.map((item) => (
                <li className="border border-gray-300 p-5 rounded-2xl">
                  <h6 className="text-2xl">{item.icon}</h6>
                  <h2 className="my-2  text-xl font-medium">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

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
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-4xl mb-10">
        <h1 className="text-center text-gray-700 md:text-5xl  text-3xl font-black">
          Meet the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Best AI Platform
          </span>{" "}
          Supercharged With +{menu.length} Features.
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

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-12">
        {menu.map((item) => {
          return (
            <div className="border border-gray-300 p-5 rounded-2xl">
              <h6 className="text-2xl">{item.icon}</h6>
              <h2 className="my-2 text-2xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div> */}
      <Menu items={groupedItems} />
    </div>
  );
};

export default FeaturesPage;
