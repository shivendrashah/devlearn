import React from "react";
import { Footer } from "../../Footer/Footer";

const HTMLElements = () => {
  return (
    <div className=" mr-auto ml-[15rem] max-w-7xl">
      <main>
        <article>
          <div className="px-5 sm:px-12 pt-3.5 max-w-4xl ms-0 2xl:mx-auto">
            <h1 className="mdx-heading mt-0 text-primary -mx-.5 text-5xl font-display font-bold leading-tight">
              Understanding HTML Elements
            </h1>
          </div>
          <div className=" px-5 sm:px-12">
            <div className="max-w-7xl mx-auto">
              <div className=" ms-0 2xl:mx-auto">
                <div className="font-display text-xl text-primary leading-relaxed">
                  <p className="my-2">
                    HTML elements are the building blocks of web pages. They are
                    represented by tags and can contain content or other
                    elements.
                  </p>
                </div>
                <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card rounded-2xl  text-base  my-8 bg-[#e4e6e8]">
                  <h3 className="text-primary  mt-0 mb-3 leading-tight text-2xl text-primary font-bold my-6">
                    Anatomy of an Element
                  </h3>
                  <p className="leading-relaxed mb-2">
                    An HTML element consists of the following:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1">
                      Opening Tag: This is the beginning of the element and
                      contains the element's name.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Content: This is the actual content of the element.
                    </li>
                    <li className="leading-relaxed mb-1">
                      Closing Tag: This is the end of the element and contains a
                      forward slash before the element's name.
                    </li>
                  </ul>
                </div>
                <h2 className="mdx-heading text-3xl leading-10 text-primary font-bold my-6">
                  Common HTML Elements
                </h2>
                <p className="whitespace-pre-wrap my-4">
                  Here are some common HTML elements along with their
                  descriptions:
                </p>
                <ul className="list-disc ml-8 my-4">
                  <li className="leading-relaxed mb-2">
                    <code>&lt;div&gt;</code>: A generic container for grouping
                    elements.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;span&gt;</code>: A generic inline container for
                    text.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;p&gt;</code>: Represents a paragraph of text.
                  </li>
                  <li className="leading-relaxed mb-2">
                    <code>&lt;img&gt;</code>: Embeds an image in the document.
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
                  <li className="leading-relaxed mb-2">
                    <code>&lt;input&gt;</code>: Represents an input field.
                  </li>
                </ul>
                <p className="whitespace-pre-wrap p-4 pb-8">
                  These are just a few examples of HTML elements. Understanding
                  how to use and combine these elements will allow you to create
                  rich and interactive web pages.
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

export default HTMLElements;
