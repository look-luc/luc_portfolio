import React from "react";
import "./contact.css";
import Navigation_Bar from "../navigation_bar/navigation_bar";

function Contact() {
  return (
    <div className="Contact">
      <Navigation_Bar />
      <header className="contact_header">Contact</header>
      <div className="email_cont">
        <div className="email">
          Email me at:
          <p className="address">luc [dot] denardi [at] colorado [dot] edu</p>
        </div>
      </div>
      <div className="socials"></div>
    </div>
  );
}

export default Contact;
