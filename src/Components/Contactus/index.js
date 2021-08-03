import React from "react";
import "./Contactus.css";

export default function Contactus() {
  return (
    <div className="footer">
      <div className="emailSection">
        <h5 className="label">GET YOUR EARLY ACCESS NOW!</h5>
        <div className="emailInput">
          <input
            type="email"
            placeholder="Your email address"
            name="email"
          ></input>
          <img className="mailIcon" src="./icon-mail.svg" />
        </div>
        <button className="primaryButton">Get early access</button>
      </div>

      <div className="adminContact">
        <h5 className="label">WANNA TALK TO US?</h5>
        <h3 className="adminMail">admin@clearmail.co.in</h3>
      </div>
      <div className="creators">
        <h5 className="label">CREATED BY</h5>
        <h4 className="cNames">Madhan Raj &amp; Sherin Jacob</h4>
      </div>
      <div className="footerGraphic">
        <img className="pattern-3" src="./pattern-3.svg" />
        <img className="pattern-4" src="./pattern-4.svg" />
        {/* <img className="pattern-2" src="./pattern-2.svg" /> */}
      </div>
    </div>
  );
}
