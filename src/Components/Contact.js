import React from 'react';
import "./Contact.css";
import contact from "../proimg/contact.png";





function Contact() {
  return (
    <>
    <h2 className="contactHead text-center">GET IN TOUCH</h2>
   
    <div className="contactDetails">
      <div>
         <div className='number'>
         <i class="fa fa-phone " aria-hidden="true"></i> 7708425980
         </div>
         <div className='mailDetail'>
         <i class="fa fa-envelope" aria-hidden="true"></i> y.infant1996@gmail.com
         </div>
         <div className='location'>
         <i class="fa fa-map-marker" aria-hidden="true"></i> Thiruvannamalai,TamilNadu.
         </div>
         <div className='Contact-btn'>
         <a href="https://www.linkedin.com/in/infant-y-ba0a99196" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-linkedin" style={{color:"rgb(65, 201, 255)"}}></i> LinkedIn</a>
         <a href="https://github.com/InfantInnu" target="_blank"  rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"rgb(65, 201, 255)"}}></i> Github</a>
         </div>
    </div>
    <div className='png'>
      <img className="size"src={contact} alt=""/>
    </div>
    </div>
    </>
  )
}

export default Contact;