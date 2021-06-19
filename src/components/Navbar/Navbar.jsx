import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar_styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState("neutral");

  const handleHamburger = () => {
    if (hamburgerToggle === "right") {
      setHamburgerToggle("left");
    } else {
      setHamburgerToggle("right");
    }
  };

  return (
    <>
      <nav className="Navbar">
        <div className="brand-logo">
          <Link href="#home" className="brand-link">
            <img src={logo} alt="brand img" />
            <p className="brand-name">Invoice</p>
          </Link>
        </div>
        <div className="nav-links">
          <ul className="nav-links-ul">
            <li className="nav-link-li">
              <Link href="#home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-link-li">
              <Link href="#home" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-link-li">
              <Link href="#about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="log-in-sign-up">
          {/* <span className="log-in-btn">Sign In</span> */}
          <Link className="sign-up-btn" href="/invoice">
            Use For Free
          </Link>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div
          className={
            `container ` + (hamburgerToggle === "right" ? "change" : null)
          }
          onClick={handleHamburger}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div
          className={
            "mobile-nav-menu " +
            (hamburgerToggle === "left"
              ? "mobile-nav-slide-left"
              : hamburgerToggle === "right"
              ? "mobile-nav-slide-right"
              : null)
          }
        >
          <ul className="nav-links-ul">
            <li className="nav-link-li">
              <Link href="#home" className="nav-link">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-link-li">
              <Link href="#home" className="nav-link">
                <i className="fas fa-box-open"></i>
                Product
              </Link>
            </li>
            <li className="nav-link-li">
              <Link href="#about" className="nav-link">
                <i className="fas fa-address-card"></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
