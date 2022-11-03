import * as React from 'react';

import "./Projects.css";
import project1 from "../proimg/project1.png";
import project2 from "../proimg/project2.png";
import project3 from "../proimg/project3.png";
import project4 from "../proimg/project4.png";

// import Button from '@mui/material/Button';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkIcon from '@mui/icons-material/Link';

export default function MediaCard() {
  return (
    
    <div class="box">
        <h2 className="projecttitle text-center">PROJECTS</h2>
        <div className="credential">
            <h4 className='dot'>Credentials</h4>
            <p>User Id : user@gmail.com - Password : user@123</p>
            <p>Admin Id : admin@admin.com - Password : admin123</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                        <img className="img-size" src={project1} alt=""/>
                        <h5>Noter App</h5>
                        <div class="text">
                        <span>Noter app is designed for note taking. It is easy to take notes and save it for future use.</span></div>
                        <div className='click'>
                        <a href="https://github.com/InfantInnu/frontend-noter-app" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Frontend</a>
                        <a href="https://exquisite-blancmange-b154f4.netlify.app" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av">Live</a>
                        <a href="https://github.com/InfantInnu/backend-noter" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Backend</a>
                        </div>

                    </div>
                   
                </div>
                  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project2} alt=""/>
                        <h5>Online Pizza</h5>
                        <div class="text">
                        <span>Online pizza app is designed for to order pizza in online for user free and online payment for order. </span></div>
                        <div className='click'>
                        <a href="https://github.com/InfantInnu/pizza" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Frontend</a>
                        <a href="https://polite-fox-675749.netlify.app" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av">Live</a>
                        <a href="https://github.com/InfantInnu/pizza-backend" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Backend</a>
                        </div>
                    </div>  
                </div>  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project3} alt=""/>
                        <h5>Blog App</h5>
                        <div class="text">
                        <span>Blog app is build for the memories or some content updated in the website  </span></div>
                        <div className='click'>
                        <a href="https://github.com/InfantInnu/blog-frontend" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Frontend</a>
                        <a href="https://lucky-lollipop-dfeee0.netlify.app" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av">Live</a>
                        <a href="https://github.com/InfantInnu/blog-backend" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Backend</a>
                        </div>
                    </div>  
                </div>  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project4} alt=""/>
                        <h5>MERN Chat App</h5>
                        <div class="text">
                        <span>Mern Chat app is designed for chatting with friends from any where and user free.</span></div>
                        <div className='click'>
                        <a href="https://github.com/InfantInnu/frontend-chatapp" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Frontend</a>
                        <a href="https://enchanting-sprite-cbb1aa.netlify.app" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av">Live</a>
                        <a href="https://github.com/InfantInnu/backend--chatapp" target="_blank" rel="noreferrer" className="btn btn-outline-secondary av"><i className="bi bi-github" style={{color:"blue"}}></i> Backend</a>
                        </div>
                        
                    </div>  
                </div>  
                
                 
            </div>
           
        </div>
        
     </div>   
  );
}
