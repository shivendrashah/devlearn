import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "HTML Tutorial",
    items: [
      { title: "HTML Introduction", pathname: "html_introduction" },
      { title: "HTML Basic", pathname: "html_basic" },
      { title: "HTML Elements", pathname: "html_elements" },
      { title: "HTML Attributes", pathname: "html_attributes" },
      { title: "HTML Headings", pathname: "html_headings" },
      { title: "HTML Paragraphs", pathname: "html_paragraphs" },
      { title: "HTML Styles", pathname: "html_styles" },
      { title: "HTML Formatting", pathname: "html_formatting" },
      { title: "HTML Quotations", pathname: "html_quotations" },
      { title: "HTML Comments", pathname: "html_comments" },
      { title: "HTML Colors", pathname: "html_colors" },
      { title: "HTML CSS", pathname: "html_css" },
      { title: "HTML Links", pathname: "html_links" },
      { title: "HTML Images", pathname: "html_images" },
      { title: "HTML Favicon", pathname: "html_favicon" },
      { title: "HTML Tables", pathname: "html_tables" },
      { title: "HTML Lists", pathname: "html_lists" },
      { title: "HTML Classes", pathname: "html_classes" },
      { title: "HTML Id", pathname: "html_id" },
      { title: "HTML Iframes", pathname: "html_iframes" },
      { title: "HTML Head", pathname: "html_head" },
      { title: "HTML Layout", pathname: "html_layout" },
      { title: "HTML Responsive", pathname: "html_responsive" },
    ],
  },

  {
    title: "HTML Forms",
    items: [
      { title: "HTML Forms", pathname: "html_forms" },
      { title: "HTML Form Attributes", pathname: "html_form_attributes" },
      { title: "HTML Form Elements", pathname: "html_form_elements" },
      { title: "HTML Input Types", pathname: "html_input_types" },
      { title: "HTML Input Attributes", pathname: "html_input_attributes" },
      {
        title: "HTML Input Form Attributes",
        pathname: "html_input_types_attributes",
      },
    ],
  },

  {
    title: "HTML Graphics",

    items: [
      { title: "HTML Cavas", pathname: "html_canvas" },
      { title: "HTML SVG", pathname: "html_svg" },
    ],
  },
];

export function HTMLSideBar() {
  const location = useLocation();

  const [selectedComponent, setSelectedComponent] =
    useState("HTML Introduction");


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
                        // onClick={() =>
                        //   handleComponent(item.title, item.pathname)
                        // }
                        // className="text-black"
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
