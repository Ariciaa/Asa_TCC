import "./Q_S.css"
import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import asinha from '../imgs_qs/asinha.png'
import ari from '../imgs_qs/ari.png'
import dani from '../imgs_qs/dani.png'
import kami from '../imgs_qs/kami.png'
import khikhi from '../imgs_qs/khikhi.png'
import { Link } from "react-router-dom"
import Insta from '../imgs_home/insta.png'
import logo2 from '../imgs_home/logo2.png'


function Q_S() {
   
  return (
    <>
          <header>
          <div className="logao">
            <img src={Logo} alt="logo" />
          </div>

        </header>

        <main>
          
          <section className='qs'>
          <div className='titulobibl'>
          
            <h1>Quem somos?</h1>
          </div>
        <p>Somos estudantes do Colégio Unasp, cursando  terceiro ano do EM integrado com curso de TI, 
          finalizando mais uma etapa de nossas vida acadêmica com o projeto do TCC  de Robótica, ASA.</p>
          </section>

          <section className='fotinhas'>

          <div className='ari'>
            <img src={ari} alt="Imagem de uma menina linda"/>
            <p4>Aricia Carolina Silva L.</p4>
        </div>

        <div className='dani'>
            <img src={dani} alt="Imagem de uma menina linda"/>
            <p1>Danielle Nogueira Ramos</p1>
        </div>

        <div className='kami'>
            <img src={kami} alt="Imagem de uma menina linda"/>
            <p2>Kamilly Chicareli Affonso A.</p2>
        </div>

        <div className='khikhi'>
            <img src={khikhi} alt="Imagem de uma menina linda"/>
            <p3>Julia Khiara da Silva Vaz</p3>
        </div>
          </section>

          <section id="nav_final">
        <div className="logofinal">
      <img src={Logo} alt="logo" />
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

export default Q_S