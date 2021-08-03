import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <div className="features">
      <div className="description">
        <h3 className="descriptionHeading">Why do I have to use Clearmail?</h3>
        <h4 className="descriptionContent">
          We’re the first on system authentication email organiser. We help you
          organise, unsubscribe, delete and categorise your emails in the
          easiest way. Are you someone who wants to clear your inbox, clean it
          up and categorise it but couldn’t ? this is the right tool for you.
        </h4>
      </div>
      <div className="usp">
        <div className="feature1">
          <img className="featureIcon" src="./featureIcon1.svg" />
          <h3 className="featureHeading">Easy Unsubscribe</h3>
          <h4 className="descriptionContent">
            Unsubscirbe to unwanted newsletters and emails in one-click.
          </h4>
          <button className="secondaryButton">Learn more</button>
        </div>
        <div className="feature2">
          <img className="featureIcon" src="./featureIcon2.svg" />
          <h3 className="featureHeading">Auto Categorise</h3>
          <h4 className="descriptionContent">
            Our algorithm makes your life easy by categorising your emails.
          </h4>
          <button className="secondaryButton">Learn more</button>
        </div>
        <div className="feature3">
          <img className="featureIcon" src="./featureIcon3.svg" />
          <h3 className="featureHeading">Quick Delete</h3>
          <h4 className="descriptionContent">
            We categorise emails based on sender which makes the job easy while
            deleting.
          </h4>
          <button className="secondaryButton">Learn more</button>
        </div>
        <div className="feature4">
          <img className="featureIcon" src="./featureIcon4.svg" />
          <h3 className="featureHeading">Safe &amp; Secure</h3>
          <h4 className="descriptionContent">
            Your data is safe on your system since we don’t need any of it.
          </h4>
          <button className="secondaryButton">Learn more</button>
        </div>
      </div>
    </div>
  );
}
