import React from "react";
import { NavLink } from "react-router-dom";

export function Hero() {
  return (
    <>
      <div className="relative isolate z-0 bg-[#caf0f8]  px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Learn to Code
            </h1>
            <p className="mt-6 text-lg font-semibold leading-8 text-green-950">
              With the world's largest web developer site.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              {/* <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-[#ff9e00] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button> */}
              <NavLink to="/html/html_introduction">
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-[#ff9e00] shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
