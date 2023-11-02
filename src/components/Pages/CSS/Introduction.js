import React from "react";
import { Footer } from "../../Footer/Footer";

const CSSIntroduction = () => {
  return (
    <div className="mr-auto ml-[15rem] max-w-7xl">
      <main>
        <article>
          <div className="px-5 sm:px-12 pt-3.5 max-w-4xl ms-0 2xl:mx-auto">
            <h1 className="mdx-heading mt-0 text-primary -mx-.5 text-5xl font-display font-bold leading-tight">
              Getting Started with CSS
            </h1>
          </div>
          <div className="px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="ms-0 2xl:mx-auto">
                <div className="font-display text-xl text-primary leading-relaxed">
                  <p className="my-2">
                    CSS (Cascading Style Sheets) is a stylesheet language used
                    to control the presentation and layout of web pages. It
                    allows you to style the elements of your HTML document to
                    achieve a desired look and feel.
                  </p>
                </div>
                <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card rounded-2xl shadow-inner-border text-base my-8 bg-[#e4e6e8]">
                  <h3 className="text-primary mt-0 mb-3 leading-tight text-2xl text-primary font-bold my-6">
                    Key Concepts
                  </h3>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1">
                      Selectors: CSS uses selectors to target HTML elements and
                      apply styles to them.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Properties and Values: CSS rules consist of properties
                      (e.g., color, font-size) and their corresponding values.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Cascading and Specificity: CSS rules can be inherited,
                      overridden, or combined based on their specificity.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Box Model: Understanding how elements are rendered as
                      boxes (content, padding, border, margin) is crucial for
                      layout.
                    </li>
                  </ul>
                </div>
                <h2 className="mdx-heading text-3xl leading-10 text-primary font-bold my-6">
                  Applying CSS Styles
                </h2>
                <p className="whitespace-pre-wrap my-4">
                  CSS styles can be applied using different methods, including
                  inline styles, internal style sheets, and external style
                  sheets. It's common to use external style sheets to separate
                  the presentation from the structure of your web page.
                </p>
                <p className="whitespace-pre-wrap p-4 pb-8">
                  With CSS, you have the power to transform a simple HTML
                  document into a visually appealing and well-organized web
                  page.
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

export default CSSIntroduction;
