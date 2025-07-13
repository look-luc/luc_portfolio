import React from "react";
import "./navigation_bar.css";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";

function Navigation_Bar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isPathActive = (path: string) => {
    console.log(location.pathname);
    return location.pathname === path;
  };

  return (
    <div className="navigation_bar">
      <Button
        className={`button ${isPathActive("/") ? "active" : "not"}`}
        onClick={() => {
          navigate("/");
        }}
      >
        About
      </Button>

      <Button
        className={`button ${isPathActive("/Research") ? "active" : "not"}`}
        onClick={() => {
          navigate("/Research");
        }}
      >
        Research
      </Button>

      <Button 
        className={`button ${isPathActive("/Resume") ? "active":"not"}`}
        onClick={()=>{navigate("/Resume")}}
      >
        Resume
      </Button>
      <Button
        className={`button ${isPathActive("/Contact") ? "active" : "not"}`}
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </Button>
    </div>
  );
}
export default Navigation_Bar;
