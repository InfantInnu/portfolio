import "./Skills.css";


export default function Skills(){
    return(
        <section id="skills">
            <div className="container" id="skills-container">
                <div className="row">
                <h2 className="skills-title text-center">MY SKILLS</h2>
                    <div className="col-12">
                        <div className="technologies-container">
                            <div className="technologies" style={{backgroundColor:"rgb(148,89,21)"}}>HTML <i className="fa-brands fa-html5"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(12,58,128)"}}>CSS <i className="fa-brands fa-css3-alt"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(87,70,105)"}}>BOOTSTRAP <i className="fa-brands fa-bootstrap"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(133,134,38)"}}>JAVASCRIPT <i className="fa-brands fa-js-square"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(28,92,97)"}}>REACT <i className="fa-brands fa-react"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(61,21,21)"}}>NODE <i className="fa-brands fa-node-js"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(28, 61, 21)"}}>EXPRESS <i className="fa-brands fa-node-js"></i></div>
                            <div className="technologies" style={{backgroundColor:"rgb(48, 131, 32)"}}>MONGODB </div>
                            <div className="technologies" style={{backgroundColor:"rgb(67,43,98)"}}>MYSQL </div>
                            <div className="technologies" style={{backgroundColor:"rgb(133, 105, 105)"}}>GITHUB <i className="fa-brands fa-github"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}