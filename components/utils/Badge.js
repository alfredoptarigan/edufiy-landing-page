import React from "react";

export default function Badge(props) {
  return (
    <div className={`p-1 rounded-full text-xs ${props.colors}`}>
      {props.title}
    </div>
  );
}
