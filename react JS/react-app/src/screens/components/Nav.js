import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header index-2" style={{ backgroundColor: "#ba7f33" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">

          <div className="main-menu collapse navbar-collapse" id="nav-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-item nav-link fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Items" className="nav-item nav-link fw-bold">
                  Items
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
