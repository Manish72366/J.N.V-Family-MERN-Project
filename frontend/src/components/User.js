import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/User.css';

const User = ({userData , logoutHandler , userProfile}) => {
  userProfile();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const address = `${userData.street} ${userData.city} ${userData.state} ${userData.Pincode} ${userData.country}`;
  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode && storedMode === 'dark') {
      setIsDarkMode(true);
    }

    const storedStatus = localStorage.getItem('status');
    if (storedStatus && storedStatus === 'close') {
      setIsSidebarClosed(true);
    }
  }, []); // Run once on component mount

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
  };

  const handleSidebarToggle = () => {
    setIsSidebarClosed(!isSidebarClosed);
    localStorage.setItem('status', isSidebarClosed ? 'open' : 'close');
  };

  return (
    <div className={`body ${isDarkMode ? 'dark' : ''}`}>
      <nav className={` ${isSidebarClosed ? 'close' : ''} Usernav`}>
        <div className="logo-name">
          <div className="logo-image">
            <img src="images/logo.png" alt="" />
          </div>
          <span className="logo_name">Profile</span>
        </div>

        <div className="menu-items">
          <ul className="Usernav-links">
            {/* Home */}
            <li>
              <Link to= "/">
                <i className="uil uil-home"></i>
                <span className="link-name">Home</span>
              </Link>
            </li>

            {/* Your Cart */}
            <li>
              <Link to= "/cart">
                <i className="uil uil-shopping-cart"></i>
                <span className="link-name">Your Cart</span>
              </Link>
            </li>

            {/* Orders */}
            <li>
              <Link to= "/">
                <i className="uil uil-file-alt"></i>
                <span className="link-name">Orders</span>
              </Link>
            </li>

            {/* Comment */}
            <li>
              <Link to= "/sell" >
                <i className="uil uil-dollar-sign"></i>
                <span className="link-name">Sell</span>
              </Link>
            </li>
            <li>
              <Link to= "/Urschool">
                <i className="fa fa-school fa-sm"></i>
                <span className="link-name">Add School</span>
              </Link>
            </li>
            <li>
              <Link to= "/messages">
                <i className="uil uil-envelope"></i>
                <span className="link-name">Messages</span>
              </Link>
            </li>
            {/* Setting */}
            <li>
              <Link to= "/update">
                <i className="uil uil-setting"></i>
                <span className="link-name">Update profile</span>
              </Link>
            </li>
          </ul>

          <ul className="logout-mode">
            {/* Logout */}
            <li>
              <Link to= "/" onClick={logoutHandler}>
                <i className="uil uil-signout"></i>
                <span className="link-name">Logout</span>
              </Link>
            </li>

            {/* Dark Mode */}
            <li className="mode">
              <Link to="/" onClick={handleModeToggle}>
                <i className={`uil ${isDarkMode ? 'uil-sun' : 'uil-moon'}`}></i>
                <span className="link-name">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </Link>
              <div className="mode-toggle">
                <span className={`switch ${isDarkMode ? 'on' : ''}`}></span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <section className="dashboard">
        <div className="top">
          <i className="uil uil-bars sidebar-toggle" onClick={handleSidebarToggle}></i>

          <div className="search-box">
            <i className="uil uil-search"></i>
            <input className="input-user" type="text" value="Search here..." />
          </div>
        </div>

        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="uil uil-tachometer-fast-alt"></i>
              <span className="text">Dashboard</span>
            </div>

            <div className="boxes">
              <div className="box1">
                <img className="boxImg" src={userData.image.url} alt=""/>
              </div>
              <div className="box box2">
                  <div className="input-box">
                    <label >First Name</label>
                    <input className="input" type="text"  value={userData.firstname} name="firstname" readOnly/>
                  </div>
                  <div className="input-box">
                    <label >Last Name</label>
                    <input className="input" type="text" value={userData.lastname} name="lastname"  readOnly/>
                  </div>
                  <div className="input-box">
                    <label >Email</label>
                    <input className="input" type="text" value={userData.email} name="email" readOnly/>
                  </div>
                  <div className="input-box">
                    <label >Phone</label>
                    <input className="input" type="text"  value={userData.phone} readOnly/>
                  </div>
                  <div className="input-box">
                      <label >Birth Date</label>
                      <input className="input" type="text" value={userData.dob} name="dob"  readOnly/>
                  </div>
                  <div className="input-box">
                       <label >Gender</label>
                       <input className="input" type="text" value={userData.gender} name="dob" readOnly/>
                  </div>
                  <div className="input-box">
                      <label>Address</label>
                      <input className="input" type="text" value={address} name="address"  readOnly/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
