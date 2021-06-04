/*
    Component Require Goes Here
*/

import Badge from "./Badge";
import Avatar from "./Avatar";

import { FaUserAlt, FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Card(props) {
  return (
    <div className="bg-white shadow-md rounded rounded-b-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-6 hover:scale-100">
      <img
        className="rounded-t-lg w-full h-72"
        src={props.bannerImagePath}
        alt={props.courseName}
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <Badge colors={props.badgeColor} title={props.badgeTitle} />
          <p className="text-xs font-bold">${props.price}</p>
        </div>
        <p className="text-base pt-4 pb-4">{props.title}</p>
        <div className="flex justify-between items-center">
          <IconContext.Provider value={{ className: "text-blue-500" }}>
            <div className="flex items-center justify-start">
              <FaUserAlt />
              <p className="text-sm font-medium pl-2">{props.students}</p>
            </div>

            <div className="flex items-center justify-start">
              <FaStar />
              <p className="text-sm font-medium pl-2">{props.rating}</p>
            </div>
          </IconContext.Provider>

          <div className="flex items-center justify-start">
            <Avatar
              width={props.widthAvatar}
              path={props.path}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
