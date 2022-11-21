import clsx from "clsx";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/service", label: "Services" },
//   { href: "/contact", label: "contact" },
//   { href: "/blog", label: "Blog" },
// ];

const HeroBlock = () => {
  return (
    <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="font-semibold ">Joseph Kitheka</h1>
      <div className="grow">
        <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Blog</Link>
        </div>
      </div>
      {/* mobile menu */}
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <span className="sr-only">open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Overlay className="inset-0 bg-black opacity-30" />
      {/* panel list showing menu itmes */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-100">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold ">Joseph Kitheka</h1>
                <div className="mr-2">
                  <Popover.Button className="inline-flex justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span className="sr-only">close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-50 px-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-50 px-2"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-50 px-2"
                  >
                    Services
                  </Link>
                  <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-50 px-2"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-50 px-2"
                  >
                    Blog
                  </Link>
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <button className=" mr-2  text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* cv burron */}
      <div className="hidden sm:block">
        <button className=" mr-2  text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          Download CV
        </button>
      </div>
    </Popover>
  );
};

export default HeroBlock;
