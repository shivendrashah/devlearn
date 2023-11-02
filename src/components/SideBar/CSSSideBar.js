import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "CSS Tutorial",
    items: [
      { title: "CSS Introduction", pathname: "css_introduction" },
      { title: "CSS Syntax", pathname: "css_syntax" },
      { title: "CSS Selectors", pathname: "css_selectors" },
      { title: "CSS How To", pathname: "css_how_to" },
      { title: "CSS Comments", pathname: "css_comments" },
      { title: "CSS Colors", pathname: "css_colors" },
      { title: "CSS Background", pathname: "css_bg" },
      { title: "CSS Borders", pathname: "css_borders" },
      { title: "CSS Margins", pathname: "css_margins" },
      { title: "CSS Padding", pathname: "css_padding" },
      { title: "CSS Box Model", pathname: "css_box_model" },
      { title: "CSS Outline", pathname: "css_outline" },
    ],
  },

  {
    title: "CSS Advanced",
    items: [
      { title: "CSS Rounded Corners", pathname: "css_rounded_corners" },
      { title: "CSS Border Images", pathname: "css_border_images" },
      { title: "CSS Backgrounds", pathname: "css_backgrounds" },
      { title: "CSS Gradients", pathname: "css_gradients" },
      { title: "CSS Shadows", pathname: "css_shadows" },
      { title: "CSS Text Effects", pathname: "css_texteffects" },
    ],
  },

  {
    title: "CSS Grid",

    items: [
      { title: "Grid Intro", pathname: "grid_intro" },
      { title: "Grid Container", pathname: "grid_container" },
      { title: "Grid Item", pathname: "grid_item" },
    ],
  },
];

export function CSSSideBar() {
  const location = useLocation();

  return (
    <>
      <aside className=" pt-8 pb-[6rem] z-[10] fixed flex h-screen min-w-[15rem] flex-col overflow-y-auto border-r bg-[#caf0f8] px-5">
        <div className=" flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              {sidebarItems.map((heading) => (
                <div key={heading.title}>
                  <h3 className="px-3 text-s font-semibold uppercase text-gray-900 ">
                    {heading.title}
                  </h3>

                  {heading.items.map((item) => (
                    <div
                      className="flex transform items-center rounded-lg px-3 py-2 text-[#d8f3dc] transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                      key={item.title}
                    >
                      <NavLink
                        to={item.pathname}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? " text-red-800 font-semibold"
                              : "text-[#081c15]"
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>

      <Outlet />
    </>
  );
}
