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
          <p className="address"><u>luc.denardi@colorado.edu</u> or <u>denardiluc@gmail.com</u></p>
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
      <div className="social_cont">
        <div className="socials">
          Github:
          <a href="https://github.com/look-luc"> link to Github</a>
        </div>
      </div>
      <div className="social_cont">
        <div className="socials">
          Gitlab:
          <a href="https://gitlab.com/look-its-luc"> link to Gitlab</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
