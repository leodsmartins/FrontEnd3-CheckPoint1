/* eslint-disable react/style-prop-object */
import './style.scss';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';


const Footer =()=>{
    return (
      <footer class="bg-dark text-center text-white">
        <section id="footer-container">          
        <div id="copy">
            <p>Desenvolvido por Leonardo Martins - © 2021 Copyright</p>
          </div>
          <div id="social">
            <a href="https://www.linkedin.com/in/leonardo-martins-ab037a4b/"><img src={linkedin} alt="logo-linkedin" /></a>
            <a href="https://github.com/leodsmartins"><img src={github} alt="logo-github" /></a>        
          </div>
          
          



        </section>
     
     
   
    </footer>

    )
}

export default Footer;