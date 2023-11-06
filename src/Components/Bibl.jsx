import React from 'react'
import logo from '../imgs_home/Logo.png'
import logo2 from '../imgs_home/logo2.png'
import Insta from '../imgs_home/insta.png'
import { Link } from "react-router-dom"

import "./Biblio.css"

function Bibl() {

  return (
    <>
    <header>
          <div className='logao'>
            <img src={logo} alt="logo" />
          </div>
        </header>
    <main>
        <section className="biblio">
    
          <h1>
          <div className='titulobibl'>
          <img src={logo2} alt="logo pequena" />
            <h1>Bibliografia</h1>
          </div>

          </h1>
          <ul id='links'>
          <li><a 
          target='_blank'
          href="https://www.uol.com.br/universa/noticias/redacao/2022/07/30/cromoterapia-pode-ajudar-a-controlar-ansiedade-veja-como-usar-as-cores.amp.htm"><strong>Cromoterapia pode ajudar a controlar ansiedade</strong></a></li>
          
          
          <li><a 
          target='_blank'
          href="https://www.google.com/amp/s/g1.globo.com/google/amp/saude/noticia/2023/02/27/por-que-o-brasil-tem-a-populacao-mais-ansiosa-do-mundo.ghtml"><strong>Por que o Brasil tem a população mais ansiosa do mundo</strong></a></li>
          

          <li><a 
          target='_blank'
          href="https://youtu.be/8YG8HABY25w"><strong>Como controlar uma crise de ansiedade</strong></a></li>
          

          <li><a 
          target='_blank'
          href="https://www.youtube.com/watch?v=rINQz_cr0Rw"><strong>Ansiedade é o transtorno mais comum entre os brasileiros</strong></a></li>
          
          <li> <a 
          target='_blank'
          href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961"><strong>Transtornos de ansiedade</strong></a></li>
         
          <li><a 
          target='_blank'
          href="https://brasilescola.uol.com.br/saude/quais-os-riscos-que-ansiedade-pode-trazer-para-aluno.htm#:~:text=Os%20transtornos%20de%20ansiedade%20podem,depress%C3%A3o%20e%20de%20isolamento%20social.text=O%20sentimento%20de%20ansiedade%20%C3%A9,podem%20causar%20preju%C3%ADzo%20ao%20indiv%C3%ADduo"><strong>Quais os riscos que a ansiedade pode trazer para o aluno?</strong></a></li>
          
          <li><a
          target='_blank'
          href="https://www.formularium.com.br/inform/informe-saude/tipos-de-ansiedade-conheca-os-principais-e-saiba-como-trata-los/"><strong>Tipos de ansiedade: conheça os principais e saiba como tratá-los</strong></a></li>
          
          <li><a 
          target='_blank'
          href="https://www.otempo.com.br/mobile/mais/de-volta-as-aulas/impactos-na-saude-emocional-de-criancas-e-adolescentes-problema-longe-do-fim-1.2795948"><strong>Impactos na saúde emocional de crianças e adolescentes: problema longe do fim</strong></a> </li>
          
          <li><a 
          target='_blank'
          href="http://www.parorobots.com/"><strong>Robô Terapêutico PARO</strong></a> </li>
          </ul>
          

        </section>

        <section id="nav_final">
        <div className="logofinal">
      <img src={logo} alt="logo" />
      </div>

      <ul id='finalmenu'>
      <li> 
                <Link to={'/'}>Home</Link> </li>
                <li>
                <Link to={'/Ansiedade'}>Ansiedade</Link>
            </li>
            <li>
                <Link to={'/Q_S'}>Quem somos?</Link>
            </li>
            <li>
                <Link to={'/Func'}>Funcionamento</Link>
            </li>
            <li>
                <Link to={'/Sobre'}>Sobre o projeto</Link>
            </li>
            <li>
                <Link to={'/Bibl'}>Referências</Link>
            </li>
        </ul>

        <hr/>
          <p className="asafinal">
        Asa Robotic: robô para ansiedade
        </p>

      

</section>
       
        
      </main>
    </>

  )
}

export default Bibl