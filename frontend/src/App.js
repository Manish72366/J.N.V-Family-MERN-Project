import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Profnavbar from './components/Profnavbar';
import UltimateHome from './components/UltimateHome';
import Signin from './components/Signin';
import Login from './components/Login';
import Schoolpagedata from './components/Schoolpagedata';
import Studentdata from './components/Studentdata';
import Prodpagedata from './components/Prodpagedata';
import User from './components/User';
import Cart from './components/Cart';
import Sellproduct from './components/Sellproduct';
import Yourschool from './components/Yourschool';
import Aboutpage from './components/Aboutpage';
import Contact from './components/Contact';
import Messages from './components/Messages';
import Update from './components/Update';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [userData , setData] = useState([]); // i want to send this user data to the user profile..
  const loginSuccessHandler = (data) => {
    setData(data);
    // console.log(data);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    alert("Logged out successfully")
    setIsLoggedIn(false);
  };

  const handleProfileClick = () => {
    // Set showNavbar to false when the /profile route is clicked
    setShowNavbar(false);
  };
  const backToHome = () => {
    // Set showNavbar to true when come back from  /profile route.
    setShowNavbar(true);
  };
  return (
    <BrowserRouter>
         {showNavbar && (isLoggedIn ? <Profnavbar/> : <Navbar/>)}
        <Routes>
          <Route path="*" element={<UltimateHome homeComing = {backToHome} onLoginSuccess={loginSuccessHandler} />}/>
          <Route exact path="/signin" element={<Signin onLoginSuccess={loginSuccessHandler}/>} />
          <Route exact path="/login" element={<Login onLoginSuccess={loginSuccessHandler}/>} />
          <Route exact path="/school" element={<Schoolpagedata />} />
          <Route exact path="/student" element={<Studentdata/>} />
          <Route exact path="/product" element={<Prodpagedata userData={userData}/>} />
          <Route exact path="/profile" element={<User userData={userData} logoutHandler = {logoutHandler} userProfile = {handleProfileClick}/>} />
          <Route exact path="/cart" element={<Cart userData={userData} logoutHandler = {logoutHandler} userProfile = {handleProfileClick}/>} />
          <Route exact path="/sell" element={<Sellproduct/>} />
          <Route exact path="/Urschool" element={<Yourschool/>} />
          <Route exact path="/about" element={<Aboutpage/>} />
          <Route exact path="/contact" element={<Contact userData= {userData}/>} />
          <Route exact path="/messages" element={<Messages userData={userData}/>} />
          <Route exact path="/update" element={<Update userData={userData}/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;


