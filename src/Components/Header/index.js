import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerBG">
        <img className="logo" src="./logo.svg" />
        <button className="primaryButton">Get early access</button>
      </div>
    </div>
  );
}
