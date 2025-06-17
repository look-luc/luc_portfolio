import React from "react";
import { useNavigate } from "react-router";
import "./App.css";
import Navigation_Bar from "./navigation_bar/navigation_bar";
import Footer from "./footer/footer";
import self_image from "./assets/self.png";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navigation_Bar />
      <header className="App-header">Luc De Nardi</header>
      <div className="main-wrapper">
        <div className="about-me-container">
          <div className="about-me">
            <div className="title">About me</div>
            <p className="about-body">
              I am an incoming Graduate student in the CLASIC program at the
              University of Colorado Boulder.
            </p>
            <p className="about-body">
              I got my BA in Linguistics with minors in Cognitive Science and
              Computer Science at the University of Delaware.
            </p>
          </div>
          <div className="self-image">
            <img src={self_image} alt="self" width={"300"} />
          </div>
        </div>

        <div className="interest-container">
          <div className="interest">
            <div className="title">Research Interest</div>
            <p className="about-body">
              In broad terms, I am interested in nlp work for endangered and low
              recourse languages. I am also particularly interested in semantics
              and phonetics side of both Linguistics and Computational
              linguistics. I invision to focus on the data analysis and
              annotation and development of nlp.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
