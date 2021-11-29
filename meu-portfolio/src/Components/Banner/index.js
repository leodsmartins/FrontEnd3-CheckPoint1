/* eslint-disable jsx-a11y/alt-text */
import './style.scss';
import fotoPerfil from '../Assets/FotoPerfil.png';
import logoDH from '../Assets/logo-dh-blanco.png';

const Banner=()=>{     
    
const about = "Olá! Me chamo Leonardo e estou finalizando a formação em Desenvolvimento Web Full Stack no curso Certified Tech Developer da DIGITAL HOUSE. A criação deste portifólio faz parte da avaliação da discipina de Front End 3."

    return (    
        <section id="banner-container">           
            <div id="photo-name">
                <div id="photo">
                    <img src={fotoPerfil} alt ="foto-perfil" />
                </div>
                <div id="name">
                    <h1><strong>LEONARDO MARTINS</strong></h1>  
                    <h2 id="dev">DESENVOLVEDOR FULL STACK</h2> 
                </div>         
            </div> 
            <div id="hello-about">               
                <h2>HelloWorld()</h2>
                <div id="text">
                    <p>{about}</p>
                    <img src={logoDH} alt="logo-DH" />
                </div>
            
            </div>       
        </section>    
    )
}

export default Banner;