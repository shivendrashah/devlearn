import React from "react";
import { Footer } from "../../Footer/Footer";

const ReactIntroduction = () => {
  return (
    <div className="mr-auto ml-[19rem] max-w-7xl">
      <main>
        <article>
          <div className="px-5 sm:px-12 pt-3.5 max-w-4xl ms-0 2xl:mx-auto">
            <h1 className="mdx-heading mt-0 text-primary -mx-.5 text-5xl font-display font-bold leading-tight">
              Getting Started with React
            </h1>
          </div>
          <div className="px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="ms-0 2xl:mx-auto">
                <div className="font-display text-xl text-primary leading-relaxed">
                  <p className="my-2">
                    React is a powerful JavaScript library for building user
                    interfaces. It allows you to create interactive and dynamic
                    UI components that efficiently update in response to data
                    changes. React is widely used for developing modern web
                    applications.
                  </p>
                </div>
                <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card rounded-2xl text-base my-8 bg-[#e4e6e8]">
                  <h3 className="text-primary mt-0 mb-3 leading-tight text-2xl text-primary font-bold my-6">
                    Key Concepts
                  </h3>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1">
                      Components: React applications are built using components,
                      which are reusable UI elements.
                    </li>
                    <li className="leading-relaxed mb-1">
                      JSX (JavaScript XML): JSX is a syntax extension for
                      JavaScript that looks similar to HTML and allows you to
                      write HTML-like code in JavaScript files.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Virtual DOM: React uses a virtual representation of the
                      DOM to optimize rendering and improve performance.
                    </li>
                    <li className="leading-relaxed mb-1">
                      State and Props: Components can have state (internal data)
                      and props (external data passed down from parent
                      components).
                    </li>
                  </ul>
                </div>
                <h2 className="mdx-heading text-3xl leading-10 text-primary font-bold my-6">
                  Creating a React Component
                </h2>
                <p className="whitespace-pre-wrap my-4">
                  Here's an example of a basic React component:
                </p>
                <pre className="bg-[#f0f3f7] p-4 rounded-lg">
                  <code className="language-javascript">
                    {`
                    import React from "react";

                    const HelloWorld = () => {
                      return <div>Hello, World!</div>;
                    };

                    export default HelloWorld;
                    `}
                  </code>
                </pre>
                <p className="whitespace-pre-wrap p-4 pb-8">
                  This component, named "HelloWorld," simply renders the text
                  "Hello, World!" It can be used and reused in other parts of
                  your application.
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

export default ReactIntroduction;
