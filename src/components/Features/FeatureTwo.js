import React from "react";
import { LuDollarSign } from "react-icons/lu";

const content = [
  {
    title: "Structured Learning Paths",
    content:
      "Our platform offers meticulously curated learning paths for HTML, CSS, JavaScript, and React. Whether you're a beginner or looking to deepen your skills, our step-by-step approach ensures a smooth learning journey.",
  },
  {
    title: "Mobile-Friendly Learning",
    content:
      "Learn anytime, anywhere. Our platform is fully responsive, ensuring that you can access your courses and projects from your computer, tablet, or mobile device.",
  },
  {
    title: "Regular Updates and New Content",
    content:
      "Stay up-to-date with the latest trends and technologies in web development. We continuously update our content to reflect industry best practices and emerging technologies.",
  },
  {
    title: "Lifetime Access to Content",
    content:
      "Once you're enrolled in a course, you have lifetime access to the content. Revisit lessons, refresh your knowledge, and stay current with the ever-evolving web development landscape.",
  },
];

export function FeatureTwo() {
  return (
    <div className="mx-auto pt-4 pb-10  px-4 sm:px-6 lg:px-8  bg-white">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          DEVLEARN helps you build beautiful website
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          We believe our platform offers a comprehensive and engaging learning
          experience that sets us apart from the rest.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {content.map((item) => (
          <div key={item.title}>
            {/* <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <LuDollarSign className="h-9 w-9 text-gray-700" />
            </div> */}
            <h3 className="mt-8 text-lg font-semibold text-black">
              {item.title}
            </h3>
            <p className="mt-4 text-sm text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
