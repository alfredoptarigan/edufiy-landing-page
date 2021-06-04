import React from "react";

export default function Introduction() {
  return (
    <div className="p-3 pb-10 lg:pl-24">
      <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1">
        <div className="flex items-center lg:justify-start">
          <div className=" hover:shadow-md flex justiy-center hover:text-blue-600 items-center hover:bg-blueGray-300 cursor-pointer hover:transition duration-700 ease-in-out  rounded p-3">
            <img src="/icons/task.svg" alt="Task" className="w-12 h-12" />
            <p className="font-medium text-xl ml-4 ">Online Tutoring</p>
          </div>
        </div>
        <div className="flex items-center lg:justify-start">
          <div className=" hover:shadow-md flex justiy-center hover:text-blue-600 items-center hover:bg-blueGray-300 cursor-pointer hover:transition duration-700 ease-in-out  rounded p-3">
            <img src="/icons/lifetime.svg" alt="Task" className="w-12 h-12" />
            <p className="font-medium text-xl ml-4 ">Lifetime Access</p>
          </div>
        </div>
        <div className="flex items-center lg:justify-start">
          <div className=" hover:shadow-md flex justiy-center hover:text-blue-600 items-center hover:bg-blueGray-300 cursor-pointer hover:transition duration-700 ease-in-out  rounded p-3">
            <img
              src="/icons/active-learning.svg"
              alt="Task"
              className="w-12 h-12"
            />
            <p className="font-medium text-xl ml-4 ">Active Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
