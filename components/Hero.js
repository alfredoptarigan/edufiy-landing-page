import React from "react";

export default function Hero() {
  return (
    <div className="p-3 lg:p-24 pt-10 lg:flex lg:justify-between lg:items-center">
      <div>
        <h1 className="text-4xl leading-tight font-bold text-indigo-800">
          Learn from Nothing to <br /> be Something
        </h1>
        <p className="leading-relaxed mt-5 mb-5">
          Connect face-to-face with trusted child development <br />
          experts and get solutions that work. Connect face-to <br /> face with
          trusted child
        </p>
        <a
          href=""
          className="py-4 mb-5 text-center text-white block lg:inline-block lg:py-3 lg:px-4 hover:bg-blue-800 transition hover:ease-in-out duration-700    bg-blue-600 rounded-full"
        >
          Get 10 Premium Courses
        </a>
        <a
          href=""
          className="py-4 mb-5 text-center block lg:inline-block lg:py-3 lg:px-4 lg:mx-4 hover:bg-warmGray-400 transition hover:ease-in-out duration-700 bg-warmGray-300 rounded-full"
        >
          Catalogue Class
        </a>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/hero.svg"
          alt="Hero Banner"
          className="object-contain h-96  w-full"
        />
      </div>
    </div>
  );
}
