import React from "react";
import { useNavigate } from "react-router";
import "./App.css";
import Navigation_Bar from "./navigation_bar/navigation_bar";
import self_image from "./assets/self.png";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navigation_Bar />
      <header className="App-header">Luc De Nardi</header>
      <div className="about-me-container">
        <div className="about-me">
          <div className="title">About me:</div>
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
    </div>
  );
}

export default App;
