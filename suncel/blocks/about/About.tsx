import { SuncelBlock } from "@suncel/nextjs";
import React from "react";

const About: SuncelBlock = ({ }) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src="/me.jpg"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </blockquote>
            <p className="text-lg font-semibold text-black mt-7">
              Jenny Wilson
            </p>
            <p className="mt-1 text-base text-gray-600">
              Project Manager at Microsoft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

About.suncel = {
  slug: "About",
  displayName: "About Block",
};
