import React from 'react'
import '../css/Schoolpage.css'
const SchoolPage = ({imgAbove ,imgBack, schoolName, pincode , about }) => {
  return (
    <section className= "schoolpage">
      <div className="movie_card" id="tomb">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={imgAbove}/>
            <h1>{schoolName}</h1>
            <h4>{pincode}</h4>
            <span className="minutes">125 min</span>
            <p className="type">Action, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">{about}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li><i className="material-icons">share</i></li>
              <li><i className="material-icons"></i></li>
              <li><i className="material-icons">chat_bubble</i></li>
            </ul>
          </div>
        </div>
        <div className="blur_back tomb_back" style={{ background: `url(${imgBack})` }}></div>
      </div>
    </section>
  )
}

export default SchoolPage
