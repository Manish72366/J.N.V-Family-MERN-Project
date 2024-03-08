import React from 'react'
import '../css/About.css'
const About = () => {
  return (
    <section className="jnvSchool">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>   
   <div className="content">
      <div className="card">
            <div className="icon"><i className="material-icons md-36">face</i></div>
            <p className="title">Jawahar</p>
            <p className="text">Two minute refreshing morning bath..</p>     
      </div>
      <div className="card">
            <div className="icon"><i className="material-icons md-36">favorite_border</i></div>
            <p className="title">Navodaya</p>
            <p className="text">Limitless sleep in the class..</p>
      </div>
      <div className="card">
            <div className="icon"><i className="material-icons md-36">alternate_email</i></div>
            <p className="title">Vidyalaya</p>
            <p className="text">Calling the friend with his crush name..</p>
      </div>
   </div>
    </section>
  )
}
export default About;
