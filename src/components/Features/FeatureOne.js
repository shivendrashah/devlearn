import React from "react";
import { NavLink } from "react-router-dom";
import { LuArrowRight, LuCopy } from "react-icons/lu";

const content = [
  {
    title: "Learn HTML",
    points: [
      { one: "Structured Learning Paths" },
      { two: "Hands-On Projects" },
      { three: "Multimedia Integration" },
    ],
    href: "html/html_introduction",
  },
  {
    title: "Master CSS",
    points: [
      { one: "Styling Techniques" },
      { two: "Responsive Design" },
      { three: "CSS Frameworks" },
    ],
    href: "css/css_introduction",
  },
  {
    title: "Explore JavaScript",
    points: [
      { one: "Programming Fundamentals" },
      { two: "DOM Manipulation" },
      { three: "Asynchronous Programming" },
    ],
    href: "javascript/js_intro",
  },
  {
    title: "Get Started with React",
    points: [
      { one: "Introduction to React" },
      { two: "Component-Based Architecture" },
      { three: "State Management" },
    ],
    href: "react/react_intro",
  },
];

export function FeatureOne() {
  return (
    <div className="px-2 py-2 bg-white md:px-40 md:py-10">
      <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
        DEVLEARN Makes Your Work Easier
      </h1>
      <p className="my-2 text-gray-600">
        All that you need to start your web develop journey
      </p>
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-2 xl:gap-8">
        {content.map((item) => (
          <div
            key={item.title}
            className="bg-[#caf0f8] p-2 mx-8 my-4 border-2 border-blue-900 flex flex-col items-center space-y-3"
          >
            <span className="inline-block rounded-full bg-white p-3 text-black">
              <LuCopy size={20} />
            </span>
            <h1 className="text-xl font-semibold capitalize text-black">
              {item.title}
            </h1>
            <ul key={Math.random()} className="text-sm text-gray-500">
              {item.points.map((point) => (
                <div key={Math.random()}>
                  <li key={point.one}>{point.one}</li>
                  <li key={point.two}>{point.two}</li>
                  <li key={point.three}>{point.three}</li>
                </div>
              ))}
            </ul>
            <NavLink
              to={item.href}
              className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
            >
              <span className="mx-1">Learn More</span>
              <LuArrowRight size={16} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
