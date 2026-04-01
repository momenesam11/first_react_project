import React from "react";
import { Link,NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>


      <nav className="navbar navbar-expand-lg  px-5">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-1 px-0 fw-bold text-white " to="/">
            Start Framework
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-inline-block justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-white fw-semibold fs-5 me-3 "
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-white fw-semibold fs-5 me-3"
                  to="/portofolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-white fw-semibold fs-5 me-3"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
