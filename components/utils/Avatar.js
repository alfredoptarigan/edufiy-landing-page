import React from "react";

export default function Avatar(props) {
  return (
    <img
      src={props.path}
      alt={props.alt}
      className={`rounded-full w-${props.width}`}
    ></img>
  );
}
