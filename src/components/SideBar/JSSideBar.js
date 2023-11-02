import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "JavaScript Basics",
    items: [
      { title: "Introduction to JavaScript", pathname: "js_intro" },
      { title: "Variables and Data Types", pathname: "js_variables" },
      { title: "Operators and Expressions", pathname: "js_operators" },
      { title: "Control Flow", pathname: "js_control_flow" },
      { title: "Functions", pathname: "js_functions" },
      { title: "Arrays", pathname: "js_arrays" },
      { title: "Objects", pathname: "js_objects" },
      { title: "Loops", pathname: "js_loops" },
      { title: "Conditional Statements", pathname: "js_conditionals" },
    ],
  },

  {
    title: "JavaScript Advanced",
    items: [
      { title: "Scope and Closures", pathname: "js_scope_closures" },
      { title: "Objects and Prototypes", pathname: "js_objects_prototypes" },
      { title: "Async Programming", pathname: "js_async" },
      { title: "Promises", pathname: "js_promises" },
      { title: "ES6 Features", pathname: "js_es6_features" },
      { title: "Modules in JavaScript", pathname: "js_modules" },
      { title: "Error Handling", pathname: "js_error_handling" },
    ],
  },

  {
    title: "JavaScript DOM Manipulation",
    items: [
      { title: "Introduction to DOM", pathname: "js_dom_intro" },
      { title: "DOM Selection", pathname: "js_dom_selection" },
      { title: "Manipulating DOM Elements", pathname: "js_dom_manipulation" },
      { title: "Events and Event Handling", pathname: "js_events" },
      { title: "Forms and Validation", pathname: "js_forms" },
    ],
  },
];

export function JSSideBar() {
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
