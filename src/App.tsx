import React from "react";
import { useNavigate } from "react-router";
import "./App.css";
import Navigation_Bar from "./navigation_bar/navigation_bar";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navigation_Bar />
      <header className="App-header">Luc De Nardi</header>
    </div>
  );
}

export default App;
