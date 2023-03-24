import { ImageType, LinkType, SuncelBlock } from "@suncel/nextjs";
import { Image, Link, Text } from "@suncel/nextjs/components";
import React from "react";

type Heroprops = {
  title: string;
  text: string;
  link: LinkType;
  sale: LinkType;
  linkLabel: string;

  image: ImageType;
};

const Hero: SuncelBlock = ({ title, text, link, linkLabel, image }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <Text
            slug="title"
            value={title}
            tagName="h1"
            className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white"
          />

          <Text
            slug="text"
            value={text}
            tagName="p"
            className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          />
          <Link
            {...link}
            className="inline-flex   items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <Text slug="linkLabel" value={linkLabel} tagName="span" />
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            {...link}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <Text slug="sale" value={linkLabel} tagName="sale" />
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            slug="image"
            alt="img temp"
            {...image}
            className="w-96 h-96 ring-2 ring-blue-500 rounded-full"
            height={96}
            width={96}
            priority
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
  defaultProps: {
    link: {
      href: "https://mysite.com",
    },
    sale: {
      href: "https://sales.com",
    },
    image: {
      src: "https://next-suncel-736qmh16o-fhub-1.vercel.app/me.jpg",
      alt: "my profile",
    },
  },
  editor: {
    settings: [
      {
        type: "link",
        slug: "link",
        name: "profile Link",
      },
      {
        type: "image",
        slug: "image",
        name: "image",
      },
    ],
  },
};
