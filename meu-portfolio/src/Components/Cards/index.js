/* eslint-disable jsx-a11y/img-redundant-alt */
import "./style.scss";
import {Fragment} from 'react';
import imgFront from '../Assets/front.png';
import imgBack from '../Assets/back.png';


const Cards=()=> {

    const listaProjetos=[
        {
            id: 1,
            nome:'Consulta-Receitas',
            descricao: 'Projeto da disciplina de Front-End 2. Site para consulta e cadastro de receitas.',
            urlGitHub: 'https://github.com/PedroMoreiraDev/Consulta-Receitas.git',
            imagem: imgFront
        },

        {
            id: 2,
            nome:'Avaliação POO',
            descricao: 'Avaliação final da disciplina de POO. Software para auxiliar contratação de bandas em festivais.',
            urlGitHub: 'https://github.com/leodsmartins/POO.git',
            imagem: imgBack
        },

        {
            id: 3,
            nome:'Avaliação Front End 2',
            descricao: "Avaliação final da Disciplina de Front End 2. Site de TO-DO-LIST com login através de API.",
            urlGitHub: 'https://github.com/sophiafiama/front-end_II-todo-list.git',
            imagem: imgFront
        }
    ]


    return (     

        listaProjetos.map((projeto)=> {
            return (
            < Fragment id="cards" key = {projeto.id}>            
                    <div class="column">
                            <div class="col-lg-4" id="cards">
                            <img src={projeto.imagem} alt="Generic placeholder image" width="80" height="80" />
                            <h2>{projeto.nome}</h2>
                            <p>{projeto.descricao}</p>
                            <p><a class="btn btn-secondary" href={projeto.urlGitHub} role="button" target="_blank " rel="noreferrer">Veja no GitHub »</a></p>
                        </div>             
                    </div>              
        </Fragment>
            )       
        })
        
    )
}

export default Cards;