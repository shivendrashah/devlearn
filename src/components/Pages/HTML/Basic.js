import React from "react";

import { Footer } from "../../Footer/Footer";

const HTMLBasic = () => {
  return (
    <div className=" mr-auto ml-[15rem] max-w-7xl">
      <main className="">
        <article>
          <div className="px-5 sm:px-12 pt-3.5 max-w-4xl ms-0 2xl:mx-auto">
            <h1 className="mdx-heading mt-0 text-primary -mx-.5 text-5xl font-display font-bold leading-tight">
              Understanding HTML Basics
            </h1>
          </div>
          <div className=" px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <div className=" ms-0 2xl:mx-auto">
                <div className="font-display text-xl text-primary leading-relaxed">
                  <p className="my-2">
                    HTML (Hypertext Markup Language) is the standard language
                    used to create web pages. It provides the basic structure
                    and content for a webpage.
                  </p>
                </div>
                <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card rounded-2xl text-base  my-8 bg-[#e4e6e8] ">
                  <h3 className="text-primary  mt-0 mb-3 leading-tight text-2xl text-primary font-bold my-6">
                    Key Concepts
                  </h3>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1">
                      Elements and Tags: HTML uses elements (or tags) to define
                      different parts of a webpage.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Attributes: They provide additional information about
                      elements and are defined within the opening tag.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Document Structure: HTML documents are organized in a
                      nested tree-like structure.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Text Content: This includes headings, paragraphs, lists,
                      etc.
                    </li>
                  </ul>
                </div>
                <h2 className="mdx-heading text-3xl leading-10 text-primary font-bold my-6">
                  Basic HTML Tags
                </h2>
                <p className="whitespace-pre-wrap my-4">
                  Here are some of the most commonly used HTML tags:
                </p>
                <ul className="list-disc ml-8 my-4">
                  <li className="leading-relaxed mb-2">
                    <code>&lt;html&gt;</code>: Represents the root of an HTML
                    document.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;head&gt;</code>: Contains meta-information about
                    the document.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;title&gt;</code>: Sets the title of the document
                    (displayed in the browser's title bar or tab).
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;body&gt;</code>: Contains the visible content of
                    the document.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,{" "}
                    <code>&lt;h3&gt;</code>: Define headings of different
                    levels.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;p&gt;</code>: Represents a paragraph of text.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;a&gt;</code>: Creates hyperlinks.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;ul&gt;</code>: Represents an unordered list.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;li&gt;</code>: Represents a list item.
                  </li>
                </ul>
                <p className="whitespace-pre-wrap p-4 pb-8">
                  These are just a few of the many HTML tags available for
                  structuring content on a webpage. Learning and understanding
                  these basics will provide a solid foundation for web
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

export default HTMLBasic;
