import React from 'react'
import Home from './Home';
import About from './About';
import Merchant from './Merchant';
import Student from './Student';
import Alumni from './Alumni';
import Footer from './Footer';
const UltimateHome = ({homeComing}) => {
  homeComing();
  return (
   <>
    <Home/>
    <About/>
    <Merchant/>
    <Student/>
    <Alumni/>
    <Footer/>
    </> 
  )
}

export default UltimateHome
