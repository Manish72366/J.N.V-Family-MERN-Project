import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/NavCss.css";


const Profnavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };
  const [activeLink, setActiveLink] = useState(null);
  const activate = (e) => {
    // Remove the active class from the previously active link
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Set the active link to the clicked link and add the active class
    const clickedLink = e.currentTarget;
    setActiveLink(clickedLink);
    clickedLink.classList.add('active');
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <header className={`main-nav ${scrolled ? "scrolled" : ""}`}>
          <input type="checkbox" name="" id="chk1" />
          <div className="logo">
            <h1 className="hdr">JNV</h1>
          </div>
          <div className="search-box">
            <form>
              <input type="text" name="search" id="srch" placeholder="Search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <ul>
            <li><Link to="/" onClick={activate}>Home</Link></li>
            <li><Link to="/school" onClick={activate}>School</Link></li>
            <li><Link to="/product" onClick={activate}>Product</Link></li>
            <li><Link to="/student" onClick={activate}>Student</Link></li>
            <li><Link to="/about" onClick={activate}>About</Link></li>
            <li><Link to="/profile" onClick={activate} className="In">Profile</Link></li>
          </ul>
          <div className="menu">
            <label htmlFor="chk1">
              <i className="fa fa-bars"></i>
            </label>
          </div>
        </header>
    </>
  );
};

export default Profnavbar;
