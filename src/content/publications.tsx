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
                <a href="https://aclanthology.org/2026.abjadnlp-1.2/">
                  Rethinking Polarity Detection: When BPE Fails Across Scripts
                </a>
              </span>
              <h4>K H Manodnya, De Nardi Luc. (2026)</h4>
              <p>
                <ul>
                  <li>
                    Presented at EACL 2026 conference for AbjadNLP workshop
                  </li>
                </ul>
              </p>
              <span className="pub-title">
                {" "}
                <a href="https://aclanthology.org/2026.loreslm-1.4/">
                  When Multilingual Evaluation Assumptions Fail: Tokenization
                  Effects Across Scripts
                </a>
              </span>
              <h4>K H Manodnya, De Nardi Luc. (2026)</h4>
              <p>
                <ul>
                  <li>
                    Presented at EACL 2026 conference for LoResLM workshop
                  </li>
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
