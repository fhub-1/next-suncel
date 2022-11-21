import { ImageType, LinkType, SuncelBlock } from "@suncel/nextjs";
import { Text } from "@suncel/nextjs/components";
import React from "react";

type Heroprops = {
  title: string;
  text: string;
  link: LinkType;
  linkLabel: string;
  image: ImageType;
};

const Hero: SuncelBlock = ({ title, text, link, linkLabel, image }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1>Hi 👋 I ’m Joseph kitheka!</h1>
          <Text
            slug="title"
            value={title}
            tagName="h1"
            className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white"
          />
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am a Front - end React Developer with over 3 years of experience
            in the industry. I am passionate about building products that people
            love using the latest technologies. I am also an open source lover
            and I enjoy contributing to projects that are helping to make the
            world a better place.I love to create videos about my experiences
            with different tools and technologies.
          </p>
          <a
            href="#"
            className="inline-flex   items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="w-96 h-96  ring-2 ring-blue-500 rounded-full"
            src="/me.jpg"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

Hero.suncel = {
  slug: "Hero",
  displayName: "hero Block",
  //   defaultProps: {
  //     text: "Hi 👋 I ’m Joseph kitheka!",
  //   },
  editor: {
    settings: [],
  },
};
