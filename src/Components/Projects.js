import * as React from 'react';

import "./Projects.css";
import project1 from "../proimg/project1.png";
import project2 from "../proimg/project2.png";
import project3 from "../proimg/project3.png";
import project4 from "../proimg/project4.png";
import project5 from "../proimg/project5.png";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

export default function MediaCard() {
  return (
    
    <div class="box">
        <h2 className="projecttitle text-center">PROJECTS</h2>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                        <img className="img-size" src={project1} alt=""/>
                        <h5>Login & logout with multiple OAuth</h5>
                        <div class="text">
                        <span>This is Fullstack MERN website made for Login & LOgout using OAuth with Google , Facebook and Github.Using React js, Node js & Express js.</span></div>
                        <div className='click'><Button variant="outlined" href="https://github.com/InfantInnu/login/tree/master/client"><GitHubIcon className="icn"/>Frontend</Button>
                        <Button variant="outlined" href="https://heartfelt-pony-0ec28f.netlify.app/">< LinkIcon className="icn" />Netlify</Button>
                        <Button variant="outlined" href="https://github.com/InfantInnu/backend-OAthu"><GitHubIcon className="icn"/>Backend</Button></div>

                    </div>
                   
                </div>
                  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project2} alt=""/>
                        <h5>Movie App</h5>
                        <div class="text">
                        <span>This is Fullstack MERN website made for adding movie details in a card type with dark & light mode content using React js ,Node js , Express js & MongoDB. </span></div>
                        <div className='click'><Button variant="outlined" href="https://github.com/InfantInnu/addmovie"><GitHubIcon className="icn"/>Frontend</Button>
                        <Button variant="outlined" href="https://bespoke-beijinho-a43e19.netlify.app/">< LinkIcon className="icn" />Netlify</Button>
                        <Button variant="outlined" href="https://github.com/InfantInnu/Backendmovie"><GitHubIcon className="icn"/>Backend</Button></div>
                    </div>  
                </div>  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project3} alt=""/>
                        <h5>Stackover-flow</h5>
                        <div class="text">
                        <span>This is Fullstack MERN website where users can ask questions, view doubts, answers using React js as frontend and node js backend. </span></div>
                        <div className='click'><Button variant="outlined" href="https://github.com/InfantInnu/stack-overflow-clone"><GitHubIcon className="icn"/>Frontend</Button>
                        <Button variant="outlined" href="https://euphonious-conkies-2d21d2.netlify.app/auth">< LinkIcon className="icn" />Netlify</Button>
                        <Button variant="outlined" href="https://github.com/InfantInnu/Backend"><GitHubIcon className="icn"/>Backend</Button></div>
                    </div>  
                </div>  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project4} alt=""/>
                        <h5>Admin Dashboard</h5>
                        <div class="text">
                        <span>This frontend project of Admin dashboard using React js. </span></div>
                        <div className='click'><Button variant="outlined" href="https://github.com/InfantInnu/react-day-29"><GitHubIcon className="icn"/>Frontend</Button>
                        <Button variant="outlined" href="https://lighthearted-hummingbird-29ce7e.netlify.app/">< LinkIcon className="icn" />Netlify</Button></div>
                        
                    </div>  
                </div>  
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="insidebox text-center">
                    <img className="img-size" src={project5} alt=""/>
                        <h5>Add to Cart</h5>
                        <div class="text">
                        <span>This frontend project done using React js.</span></div>
                        <div className='click'><Button variant="outlined" href="https://github.com/InfantInnu/react-day-28"><GitHubIcon className="icn"/>Frontend</Button>
                        <Button variant="outlined" href="https://venerable-pasca-519457.netlify.app/">< LinkIcon className="icn" />Netlify</Button></div>
                        
                    </div>  
                </div>
                 
            </div>
           
        </div>
        
     </div>   
  );
}
