import React from "react";

export default function BtnFullRound(props) {
  return (
    <a
      href="#"
      className={`px-6 py-3 bg-${props.color} rounded-full hover:bg-${
        props.colorHover
      } transition duration-500 hover:ease-in-out ${
        props.textColor ? props.textColor : "text-black"
      } ${props.isMobile ? props.isMobile : ""}`}
    >
      {props.title}
    </a>
  );
}
