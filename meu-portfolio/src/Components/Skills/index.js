import './style.scss';
import html from '../Assets/html.png';
import react from '../Assets/react.png';
import css from '../Assets/css.png';
import bs from '../Assets/bootstrap.png';
import js from '../Assets/js.png';
import sass from '../Assets/sass.png';
import java from '../Assets/java.png';
import mysql from '../Assets/mysql.png';
import docker from '../Assets/docker.png';
import spring from '../Assets/framework.png';


const Skills=()=>{
    return (
        <section id="skills-container">
            <div id="title">
                <h2>Hard Skills:</h2>
            </div>
            <div id="skills">
                <div id="part-1">
                    <div className="lang">
                        <img src={html} alt="logo-html" />
                        <h3>HTML 5</h3>
                    </div>
                    <div className="lang">
                        <img src={css} alt="logo-html" />
                        <h3>CSS 3</h3>
                    </div> 
                    <div className="lang">
                        <img src={js} alt="logo-html" />
                        <h3>JAVASCRIPT</h3>
                    </div> 
                    <div className="lang">
                        <img src={sass} alt="logo-html" />
                        <h3>SASS</h3>
                    </div> 
                    <div className="lang">
                        <img src={react} alt="logo-html" />
                        <h3>REACT JS</h3>
                    </div>                    
                </div>

                <div id="part-2"> 
                    <div className="lang">
                        <img src={bs} alt="logo-html" />
                        <h3>BOOTSTRAP</h3>
                    </div>  
                    <div className="lang">
                        <img src={java} alt="logo-html" />
                        <h3>JAVA</h3>
                    </div>
                    <div className="lang">
                        <img src={mysql} alt="logo-html" />
                        <h3>MYSQL</h3>
                    </div>  
                    <div className="lang">
                        <img src={docker} alt="logo-html" />
                        <h3>DOCKER</h3>
                    </div>     
                    <div className="lang">
                        <img src={spring} alt="logo-html" />
                        <h3>SPRING</h3>
                    </div>     
                    </div>   
                </div>
        </section>

    )

}

export default Skills;