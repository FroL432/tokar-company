import React from "react";
import  "./ButtonOrange.sass";

export default function ButtonOrange({ link, text }) {
  return (
    <a href={link} className="buttonOrange">
      <p className="text">{text}</p>
    </a>
  );
}
