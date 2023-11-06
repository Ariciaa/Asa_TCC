import React from 'react'
import logo from '../imgs_home/Logo.png'
import robo from '../imgs_home/robozin.png'
import logo2 from '../imgs_home/logo2.png'
import publico from '../imgs_home/publico.png'
import Asa1 from '../imgs_home/Asa1.png'
import Insta from '../imgs_home/insta.png'
import Asa2 from '../imgs_sobre/Asa2.png'
import { Link } from "react-router-dom"


import "./home.css"
import "./Header/index.jsx"



function Home() {
  return (
    <>
     <header>
     
          <div className='logao'>
            <img src={logo} alt="logo" />
          </div>
        </header>

        
      
    <main>
        <section className="intro">
          <div className='asaft'>
            <img src={Asa1} alt="Robo_Asa" />
          </div>

          <div className='logopqn'>
            <img src={logo2} alt="logo pequena" />
          </div>
    
          <div className='texto'>
            <p>Asa é um robô especializado em proporcionar relaxamento. Ele possui várias funcionalidades projetadas para auxiliar no alívio dos sintomas da ansiedade. <br />
          </p>

         <p className='p2'>Ele busca oferecer uma abordagem complementar para o gerenciamento da ansiedade, fornecendo uma experiência reconfortante e prática para aqueles que lidam com essa condição.
          Asa é projetado para ser um complemento ao tratamento da ansiedade, fornecendo suporte adicional e ajudando a criar um ambiente relaxante.
           </p>

          
          </div>
         
         
        </section>

       
         
      <section className="diferente">

<div className='icone-titulo'>
<img src={robo} alt="Imagem da cabeça de um robô"/>
  <h2>Diferencial</h2>
  </div>

    <p>A ansiedade é algo que assola o mundo inteiro desde os tempos mais primórdios, então é de se esperar que já existam aparelhos com objetivos semelhantes. Entretanto, nosso diferencial é principalmente seu tamanho, pois, por ser um robô pequeno ao ponto de caber em uma escrivaninha, permite que ele seja transportado para onde quiser. </p>
    <p>Além disso, suas funcionalidades são outra novidade, pois mais do que uma luminária e objeto de decoração, Asa também é especial devido a sua abrangência em questão de ajuda, pois os demais produtos são destinados a públicos ou situações específicas, como em caso de transtorno pós-traumático, por exemplo.</p>

</section>

<section className="publico">

  <div className='icone-titulo'>
      <img src={publico} alt="icon de pessoas" />
      <h2>Público-Alvo</h2>
    </div>
   <p>O produto é uma luminária em forma de anjo que pode ser utilizado por pessoas de todas as idades, mas foi desenvolvido especialmente para crianças e adolescentes devido aos altos índices de ansiedade nesse grupo. Ele oferece um suporte prático e reconfortante para aliviar os sintomas e promover o bem-estar emocional. </p>
    <p>O objetivo é preencher essa necessidade específica e fornecer um recurso direcionado para aqueles que são mais propensos a sofrer dessa doença, atendendo a uma demanda específica de combate à ansiedade, especialmente entre crianças e adolescentes, proporcionando um recurso prático e reconfortante para ajudar a aliviar os sintomas e promover o bem-estar emocional.</p>

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



export default Home
