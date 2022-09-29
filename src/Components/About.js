import React from 'react'
import "./About.css";
import about from "../proimg/about.png";

export default function About() {
  return (
    <>
    
    <h2 className="head text-center">ABOUT</h2>
    <div className='about-flex'>
    <div className='about-box'>
      <h1 className="title">LET'S GET TO KNOW <span style={{color:"blueviolet" ,fontSize: "30px"}}>ABOUT ME</span></h1>
      <h2 className="subtitle">Full Stack Developer <span style={{color:"white",fontSize: "30px"}}>/</span> MERN Stack</h2>
      
      <p className="para">
      I seek to work in a competitive field and ready to accept the
      challenges, utilizing my skills, would like to work with a highly
      esteemed company which gives me a platform to use my expertise and
      skills for mutual growth and benefit of company and myself.
      </p>
     <div className='resume-click'>
      <a href="https://drive.google.com/file/d/1HnV9Pj4yIGRRde-2pSy8r3-oWbMvpSYM/view" target="_blank" rel="noreferrer"type="button" className="btn btn-outline-secondary av">Resume </a></div>
    </div>
    <div className='about-img'>
  <img src={about} alt=""/></div>
  </div>
    </>

 
)

  
}

