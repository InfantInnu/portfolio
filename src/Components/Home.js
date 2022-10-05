import React from 'react'
import "./Home.css";
import work from "../proimg/work.png";


function Home() {
  return (
    <div className='homepage'>
    <section>
      <div className='imgflex'><div>
    <div className="content">
    <h3>HEY THERE,</h3>
    <h2 className='ownername'>I'm <span style={{color:"blueviolet",fontSize:"50px"}}>Infant</span>,</h2>
    <h3>I'm a <span style={{color:"crimson",fontSize:"40px"}}>Full-Stack Developer</span>,</h3>
    <p className='self' style={{marginRight:"30px",fontSize:"20px"}}>A self-taught developer with an interest in Web Development.</p>
</div>
 <div className="github-linkedin ms-5">
 
 <a href="https://github.com/InfantInnu"  target="_blank"className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"rgb(65, 201, 255)"}}></i> Github</a>
 <a href="https://www.linkedin.com/in/infant-y-ba0a99196"  target="_blank"className="btn btn-outline-secondary av"><i className="bi bi-linkedin" style={{color:"rgb(65, 201, 255)"}}></i> LinkedIn</a>
 <a href="https://drive.google.com/file/d/1FSbS1W3zzI5QVVeaCGYDxw6drtf2troL/view?usp=sharing" target="_blank"type="button" className="btn btn-outline-secondary av">View My CV. <i className="bi bi-box-arrow-up-right" style={{color:"rgb(65, 201, 255)"}}></i></a>
 </div></div>
 <div className='working'>
  <img src={work} alt=""/>
  </div></div>
  
  
  
  


 </section></div>
 
  )
}

export default Home;