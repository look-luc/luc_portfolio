import React from "react";
import "./contact.css";
import Navigation_Bar from "../navigation_bar/navigation_bar";
import Footer from "../footer/footer";

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
      <div className="social_cont">
        <div className="socials">
          Linkedin:
          <a href="https://www.linkedin.com/in/luc-de-nardi-0682b4278/">
            {" "}
            link to my Linkedin
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
