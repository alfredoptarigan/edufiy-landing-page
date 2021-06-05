import React from "react";

export default function FavoriteTools() {
  return (
    <div className="p-3 pb-10 lg:pl-24">
      <div className="flex justify-center items-center flex-col">
        <p className="text-2xl mb-3 font-medium text-blue-900">
          Our Favorite Tools
        </p>
        <p className="text-lg mb-5 leading-relaxed text-teal-600 text-center">
          Kami menyarankan tools yang sering digunakan
        </p>
        <div className="w-full">
          <ul className="grid sm:grid-cols-4 md:grid-cols-8 grid-cols-2 sm:gap-5 md:gap-3 lg:gap-6 gap-4">
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/react.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">React</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/javascript.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">
                    Javascript
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/css.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">CSS</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/angular.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">
                    Angular
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/node.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">Node</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/typescript.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">
                    Typescript
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/graphql.webp"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">
                    GraphQL
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-full scale-100 hover:scale-105 transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base dark:text-white tracking-tight font-bold leading-tight flex items-center hover:text-blue-600"
              >
                <div className="w-full flex items-center flex-col justify-center">
                  <img
                    style={{ width: 64, height: 64 }}
                    src="/images/tools/laravel.png"
                    alt="Laravel"
                  />
                  <p className="sm:text-base md:text-sm lg:text-base">
                    Laravel
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
