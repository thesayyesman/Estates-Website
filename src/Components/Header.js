import "../CSS/Header.css";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link className="headlink" to="/">
        <p className="headertop">S & Co.</p>
      </Link>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              About Us
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/buy">
                    Buy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sell">
                    Sell
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lease">
                    Lease
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
};
