import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "React Basics",
    items: [
      { title: "Introduction to React", pathname: "react_intro" },
      { title: "JSX and Components", pathname: "react_jsx_components" },
      { title: "Props and State", pathname: "react_props_state" },
      { title: "Component Lifecycle", pathname: "react_lifecycle" },
      { title: "Handling Events", pathname: "react_events" },
      {
        title: "Conditional Rendering",
        pathname: "react_conditional_rendering",
      },
      { title: "Lists and Keys", pathname: "react_lists_keys" },
      { title: "Forms and Controlled Components", pathname: "react_forms" },
      { title: "Styling in React", pathname: "react_styling" },
    ],
  },

  {
    title: "React Hooks",
    items: [
      { title: "useState Hook", pathname: "react_usestate" },
      { title: "useEffect Hook", pathname: "react_useeffect" },
      { title: "useContext Hook", pathname: "react_usecontext" },
      { title: "useReducer Hook", pathname: "react_usereducer" },
      { title: "Custom Hooks", pathname: "react_custom_hooks" },
    ],
  },

  {
    title: "Routing in React",
    items: [
      { title: "React Router", pathname: "react_router" },
      { title: "Nested Routes", pathname: "react_nested_routes" },
      { title: "Route Parameters", pathname: "react_route_parameters" },
      {
        title: "Programmatic Navigation",
        pathname: "react_programmatic_navigation",
      },
    ],
  },

  {
    title: "State Management",
    items: [
      { title: "Context API", pathname: "react_context_api" },
      { title: "Redux", pathname: "react_redux" },
      { title: "MobX", pathname: "react_mobx" },
    ],
  },

  {
    title: "Advanced Topics",
    items: [
      { title: "Higher Order Components (HOCs)", pathname: "react_hocs" },
      { title: "Render Props", pathname: "react_render_props" },
      { title: "Error Boundaries", pathname: "react_error_boundaries" },
      { title: "Code Splitting", pathname: "react_code_splitting" },
      { title: "Server-Side Rendering (SSR)", pathname: "react_ssr" },
    ],
  },
];

export function ReactSideBar() {
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
