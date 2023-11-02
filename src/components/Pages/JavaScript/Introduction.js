import React from "react";
import { Footer } from "../../Footer/Footer";

const JavaScriptIntroduction = () => {
  return (
    <div className="mr-auto ml-[19rem] max-w-7xl">
      <main>
        <article>
          <div className="px-5 sm:px-12 pt-3.5 max-w-4xl ms-0 2xl:mx-auto">
            <h1 className="mdx-heading mt-0 text-primary -mx-.5 text-5xl font-display font-bold leading-tight">
              Getting Started with JavaScript
            </h1>
          </div>
          <div className="px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="ms-0 2xl:mx-auto">
                <div className="font-display text-xl text-primary leading-relaxed">
                  <p className="my-2">
                    JavaScript is a versatile programming language that allows
                    you to add interactivity and dynamic behavior to your
                    websites. It is commonly used for creating interactive
                    elements, validating form data, and much more.
                  </p>
                </div>
                <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card rounded-2xl text-base my-8 bg-[#e4e6e8]">
                  <h3 className="text-primary mt-0 mb-3 leading-tight text-2xl text-primary font-bold my-6">
                    Key Concepts
                  </h3>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1">
                      Variables and Data Types: JavaScript has different types
                      of data such as numbers, strings, objects, etc.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Functions: Functions are blocks of reusable code that can
                      be called with different arguments.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Control Flow: This includes loops and conditional
                      statements that control the flow of execution.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Objects and Arrays: These are fundamental data structures
                      used for storing and organizing data.
                    </li>
                  </ul>
                </div>
                <h2 className="mdx-heading text-3xl leading-10 text-primary font-bold my-6">
                  Basic JavaScript Syntax
                </h2>
                <p className="whitespace-pre-wrap my-4">
                  Here are some examples of basic JavaScript syntax:
                </p>
                <pre className="bg-[#f0f3f7] p-4 rounded-lg">
                  <code className="language-javascript">
                    {`
                    // Variables and Data Types
                    let message = "Hello, World!";
                    const PI = 3.14;
                    let number = 42;
                    
                    // Functions
                    function greet(name) {
                      return "Hello, " + name + "!";
                    }
                    
                    // Control Flow
                    if (number > 0) {
                      console.log("Number is positive");
                    } else if (number < 0) {
                      console.log("Number is negative");
                    } else {
                      console.log("Number is zero");
                    }
                    
                    // Objects and Arrays
                    let person = {
                      firstName: "John",
                      lastName: "Doe",
                    };
                    
                    let colors = ["red", "green", "blue"];
                    `}
                  </code>
                </pre>
                <p className="whitespace-pre-wrap p-4 pb-8">
                  This is just a glimpse of JavaScript's capabilities. It's a
                  powerful language that forms the foundation of modern web
                  development.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default JavaScriptIntroduction;
