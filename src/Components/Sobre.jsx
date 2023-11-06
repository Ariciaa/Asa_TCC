import "./Sobre.css"
import React from 'react'
import logo from '../imgs_home/Logo.png'
import logo2 from '../imgs_home/logo2.png'
import Asa2 from '../imgs_sobre/Asa2.png'
import Insta from '../imgs_home/insta.png'
import { Link } from "react-router-dom"

function Sobre() {

  return (
    <>
      <header>
          <div className="logao">
            <img src={logo} alt="logo" />
          </div>
        </header>
      
        <main>
        <section className="sobre">
        <div className="asaimg">
            <img src={Asa2} alt="Robo_Asa" />
          </div>
          <div>
          <div className='tssobre'>
          <img src={logo2} alt="logo pequena" />
            <h1>Visão geral</h1>
          </div>
            <p>Asa é um robô projetado especificamente para auxiliar indivíduos durante crises de ansiedade. Com um design amigável e funcionalidades especializadas, ele proporciona um suporte emocional e prático para ajudar a lidar com os sintomas da ansiedade e promover o bem-estar mental. Seu objetivo é fornecer um espaço seguro e reconfortante para aqueles que enfrentam momentos de intensa ansiedade.
            </p>
            <div className='tssobre'>
          <img src={logo2} alt="logo pequena" />
            <h1>Características Físicas</h1>
          </div>
            <p>Ele é compacto, com aproximadamente 40 centímetros de altura, e tem um corpo arredondado e suave. Sua estrutura é feita de soft silicone, tornando o robô suave e durável. Seus olhos são grandes e expressivos, projetados para transmitir empatia e calma. O robô também é equipado com sensores táteis sensíveis ao toque, permitindo interações suaves e naturais.</p>
            <div className='tssobre'>
          <img src={logo2} alt="logo pequena" />
            <h1>Recursos e Funcionalidades</h1>
          </div>
          <ul>
            <li>
                  Técnicas de Respiração e Relaxamento: O robô guia os usuários por exercícios de respiração profunda e técnicas de relaxamento muscular, ajudando a reduzir a tensão e a ansiedade no momento das crises. Esses exercícios estarão disponíveis no aplicativo que acompanha o robô.

              </li>
              </ul>

              <ul>
            <li>
                Interações de Auto Cuidado: Com base nas preferências do usuário, Asa oferece, através do aplicativo, sugestões personalizadas de atividades de auto cuidado, como meditação e música relaxante além de luzes relaxantes para ajudar a aliviar o estresse e a ansiedade.
                
              </li>
              </ul>
        
              <ul>
            <li>
                Conexão com Profissionais de Saúde: O robô possui uma rede de contato pré definidos com profissionais de saúde, como o Centro de Valorização à Vida, e outros 3 contatos de emergência introduzidos pelo próprio usuário. Tais números poderão ser acionados através do aplicativo instalado no aparelho móvel do usuário.
                
              </li>
              </ul>
        
              <div className='tssobre'>
          <img src={logo2} alt="logo pequena" />
            <h1>Asa</h1>
          </div>
            <p>Lembre-se de que Asa é um auxílio complementar e não substitui a orientação de profissionais de saúde mental qualificados. Sempre procure aconselhamento adequado para obter um diagnóstico e tratamento pessoal.</p>
          </div>
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

export default Sobre
