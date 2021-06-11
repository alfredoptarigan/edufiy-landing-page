import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-5">
      <div className="flex justify-between items-center">
        <p className="title text-4xl">
          Eduify <span className="text-orange-500">.</span>
        </p>
        <div className="hidden lg:flex items-center space-x-5 ">
          <Link href="/">
            <a className="hover:text-blue-600 transition  duration-600 hover:ease-in-out">
              Home
            </a>
          </Link>
          <a
            href="#"
            className="hover:text-blue-600 transition  duration-600 hover:ease-in-out"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition  duration-600 hover:ease-in-out"
          >
            Courses
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition  duration-600 hover:ease-in-out"
          >
            Testimonial
          </a>
          <Link href="/login">
            <a className="px-4 py-2 rounded bg-warmGray-300 text-white hover:bg-warmGray-400 transition  duration-600 hover:ease-in-out">
              Masuk
            </a>
          </Link>
          <a
            href="#"
            className="px-4 py-2 rounded bg-orange-300 text-white hover:bg-orange-400 transition  duration-600 hover:ease-in-out"
          >
            Daftar
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <ol className="space-y-3 mt-2 ">
          <li>
            <a
              href="#"
              className="block hover:text-blue-600 transition  duration-600 hover:ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-blue-600 transition  duration-600 hover:ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-blue-600 transition  duration-600 hover:ease-in-out"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-blue-600 transition  duration-600 hover:ease-in-out"
            >
              Testimonial
            </a>
          </li>
          <li className="min-w-full w-24 text-center">
            <a
              href="#"
              className="block py-2 rounded-full bg-warmGray-300 text-white hover:bg-warmGray-400 transition  duration-600 hover:ease-in-out"
            >
              Masuk
            </a>
          </li>
        </ol>
      </Transition>
    </nav>
  );
}
