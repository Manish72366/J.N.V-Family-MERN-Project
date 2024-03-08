import React from 'react';
import '../css/Studentpage.css';
import { Link } from "react-router-dom";

const Studentpage = ({ name, imgUrl, courseType, phoneNo }) => {
  return (
    <div className="prod">
      <div className="card2">
        <div className="userImg">
          <img
            className='profile'
            src={imgUrl}
            alt="John"
            style={{ width: '100%' }}
          />
        </div>
        <div className="userDetails">
          <h1 className="username">{name}</h1>
          <p className="title2">{courseType}</p>
          <p className='sclName'>Harvard University</p>
          <div className="socialMed">
            <Link to="/" className="lnk">
              <i className="fab fa-instagram instagram"></i>
            </Link>
            <Link to="/" className="lnk">
              <i className="fab fa-twitter twitter"></i>
            </Link>
            <Link to="/" className="lnk">
              <i className="fab fa-linkedin youtube"></i>
            </Link>
            <Link to="/" className="lnk">
              <i className="fab fa-facebook"></i>
            </Link>
          </div>
          <p className="btnProd">
            <Link to={`/contact?phoneNo=${phoneNo}`}>
              <button className="btnProd">Contact</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studentpage;



