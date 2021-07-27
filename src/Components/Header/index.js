import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerBG">
        <img src="./logo.svg" />
        <button className="mainButton">Get early access</button>
      </div>
    </div>
  );
}
