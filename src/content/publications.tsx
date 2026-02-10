import React from "react";
import "./publications.css";
import Navigation_Bar from "../navigation_bar/navigation_bar";
import Footer from "../footer/footer";

function Publications() {
  return (
    <div className="pub">
      <Navigation_Bar />
      <div className="wrapper">
        <header className="pub-header">Publications</header>
        <div className="main-wrapper">
          <div className="pub-container">
            <div className="publication">
              <span className="pub-title">
                Rethinking Polarity Detection: When BPE Fails Across Scripts
              </span>
              <h4>K H Manodnya, De Nardi Luc. (2026)</h4>
              <p>
                <ul>
                  <li>Accepted at AbjadNLP and EACL 2026 conference</li>
                  <li>Accepted at EACL 2026 workshop LoResLM</li>
                  <li>Presented at EACL conference in Rabat Morocco</li>
                  <li>Python ML packages</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Publications;
