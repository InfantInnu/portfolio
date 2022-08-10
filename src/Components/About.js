import React from 'react'
import "./About.css";
// import profile from "../images/profile.jpg";

export default function About() {
  return (
    <>
    <h2 className="head text-center">ABOUT</h2>
      <h1 className="title">LET'S GET TO KNOW ABOUT ME</h1>
      <h3 className="subtitle">Full Stack Developer/MERN Stack</h3>
      <p className="para">
      I seek to work in a competitive field and ready to accept the
      challenges, utilizing my skills, would like to work with a highly
      esteemed company which gives me a platform to use my expertise and
      skills for mutual growth and benefit of company and myself.
      </p>
      <div className='bio'>
      <ul style={{ listStyle: "none" }}>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Full Name :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> Infant Y</span> 
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Date of Birth :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> 02 Aug 1996</span> 
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Degree :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> BE</span>
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Department :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> Mechanical</span> 
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Nationality :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> Indian</span> 
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Languages Known :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}>Tamil,English</span>
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> City :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"25px" }}> Thiruvannamalai,TamilNadu</span> 
            </li>
            <li>
              <i
                className="bi bi-caret-right-fill"
                style={{ color: "blue" }}
              ></i>
              <strong> Experience :</strong><span style={{ color: "#41c9ff",fontWeight:"500",fontSize:"20px" }}> <ul>
                <li>Full Stack Developer - GUVI GEEK NETWORK Pvt Ltd (IIT-Madras).Completed the MERN stack course (Dec2021-July-2022). </li><li>
                ICICI Prudential Life Insurance - (2021 Jan-Oct) as an Branch operation.</li>
                <li>TVS Upasana Pvt Ltd - (2018-2019) as an NEEM Trainee in a production department.</li></ul></span> 
            </li>
        </ul>
        </div>
        <p className="about-para">
            I Started off my self-learning journey with online tutorials
            Google, YouTube, Code , SoloLearn, etc and take a step further
            and Enrolled in the GUVI IIT MADRAS Fullstack developer Nanodegree
            Program which involved extensive programming and real world
            projects. Later, I learned MERN Stack From Guvi and built an
            Website using React JS, Node, Express Js, MongoDB.
          </p>
    </>

 
)

  
}

