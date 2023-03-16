import React from "react";
import "../navbar/style.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 text-uppercase">
      <div className="logo">
        <h3>
          <i className="fa-sharp fa-solid fa-alien-8bit"></i>
          Trade Wars <i className="fa-sharp fa-solid fa-alien-8bit"></i>
        </h3>
      </div>
    </nav>
  );
}
