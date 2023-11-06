import "./Func.css"
import React from 'react'
import engre from '../imgs_func/engrenagem.png'
import video from '../imgs_func/video.png'
import logo from '../imgs_home/Logo.png'
import Logo from '../imgs_ansiedade/Logo.png'
import asa3 from '../imgs_equi/3asa.png'
import a2 from '../imgs_equi/asinha2.png'
import Alto from '../imgs_equipamentos/Alto.jpg'
import Bluetooth from '../imgs_equipamentos/Bluetooth.jpg'
import DF from '../imgs_equipamentos/DF.jpg'
import Jumpers from '../imgs_equipamentos/Jumpers.webp'
import Led from '../imgs_equipamentos/Led.jpg'
import Placa from '../imgs_equipamentos/Placa.jpeg'
import Protoboard from '../imgs_equipamentos/Protoboard.jpg'
import { Link } from "react-router-dom"
import Insta from '../imgs_home/insta.png'
import logo2 from '../imgs_home/logo2.png'


function Func() {

  return (
    <>
      <header>
          <div className="logao">
            <img src={logo} alt="logo" />
          </div>
        </header>
      
    <main>
        <section className="func">

          <div className="engrenagem">
            <img src={engre} alt="icon de de engrenagem" />
            <h2>Funcionamento</h2>
          </div>
          <div id='Lista'>
          <p>Suas funcionalidades consistem em:</p>
          <br />
          <ul>
          <li>
            Uma lista telefônica de números de emergência: O sistema fornece uma lista de números de 
              telefone de emergência, como o serviço de atendimento de emergência, bombeiros, polícia, entre 
              outros. Isso permite que os usuários acessem rapidamente esses números em caso de necessidade.
          </li>
          </ul>
          <br />
        
          <ul>
          <li>
            Luzes com cores calmantes e diminuição gradual de luminosidade: Este dispositivo possui luzes 
              que emitem cores que são consideradas calmantes, ou seja, cores que têm um efeito relaxante sobre
               as pessoas. Além disso, as luzes também podem ser gradualmente diminuídas em intensidade, o que
                pode ajudar a criar um ambiente tranquilo. Estudos têm mostrado que ambientes tranquilos podem
                 ajudar a reduzir os sintomas da ansiedade.
          </li>
          </ul>

          <br />
          <ul>
          <li>
            Números específicos para ajudar: O sistema também inclui números de contato específicos para 
              oferecer ajuda em situações de emergência ou necessidade. Esses números podem incluir serviços 
              como o Centro de Valorização da Vida (CVV), bombeiros, polícia e o Serviço de Atendimento Móvel
               de Urgência (Samu), que são contatos comuns para diferentes tipos de emergências, além de
                contatos de confiança fornecidos pelo próprio usuário.
          </li>
          </ul>
          
          <br />
          <ul>
          <li>
            Alarmes pré definidos pelo usuário e sons calmantes ASMR: O usuário tem a opção de configurar 
              alarmes personalizados no sistema. Além disso, o dispositivo também é capaz de reproduzir sons 
              ASMR (Autonomous Sensory Meridian Response), que são sons suaves e relaxantes que podem ajudar a
               induzir uma sensação de bem-estar e tranquilidade.
          </li>
          </ul>
          </div>


          <section class="vdo">
  <h1>Confira o vídeo abaixo:</h1>
  <div id="video">
    <video controls loop>
      <source src="./asavdo.mp4" type="video/mp4"></source>
    </video>
  </div>
</section>
         
        

        <section >
          <div>
          <div className='tituloequip'>
          <img src={logo2} alt="logo pequena" />
          <h1>Equipamentos utilizados</h1>
          </div>
  
             <div className="equipt">
            <p>Placa Arduíno</p>
            <div className="placa">
            <img src={Placa} alt="Imagem da placa arduíno uno"/>
            </div>
            </div>

              <div className="equipt">
            <p>DF Mini Player</p>
            <div className="df">
            <img src={DF} alt="Imagem do DF mini Player"/>
            </div>
            </div>

            <div className="equipt">
              <p>Mini alto-falante: 2 polegadas</p>
            <div className="som">
            <img src={Alto} alt="Imagem dos altos falantes"/>
            </div>
            </div>

            
            <div className="equipt">
            <p>Led Rgb</p>
            <div className="led">
            <img src={Led} alt="Imagem da led rgb"/>
            </div>
            </div>
            
            <div className="equipt">
            <p>Protoboards 400 pontos</p>
            <div className="proto">
            <img src={Protoboard} alt="Imagem da Protoboard"/>
            </div>
            </div>
            
            <div className="equipt">
            <p>Jumpers Macho-Macho</p>
            <div className="jumpers">
            <img src={Jumpers} alt="Imagem do conjunto de 40 fios"/>
            </div>
            </div>
           
          </div>
        </section>

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

export default Func