import React from 'react'
import Logo from '../imgs_ansiedade/Logo.png'
import mulhertriste from '../imgs_ansiedade/mulhertriste.png'
import noticia1 from '../imgs_ansiedade/noticia1.png'
import noticia2 from '../imgs_ansiedade/noticia2.png'
import noticia3 from '../imgs_ansiedade/noticia3.png'
import noticia4 from '../imgs_ansiedade/noticia4.png'
import Insta from '../imgs_home/insta.png'
import { Link } from "react-router-dom"

import "./Ansiedade.css"

function Ansiedade() {
   return (
    <>
     <header>
          <div className='logao'>
            <img src={Logo} alt="logo" />
          </div>
        </header>
      
    <main>
      <section className="ansiedade">
        <div className="tituloans">
      <div class="forma">.</div>
        <h2>Ansiedade</h2>
      </div>
 
        <p>A ansiedade é uma resposta natural do corpo diante de situações percebidas como ameaçadoras 
          ou estressantes. É uma emoção comum e todas as pessoas experimentam ansiedade em algum momento 
          de suas vidas. No entanto, a ansiedade se torna um problema quando ocorre de forma persistente, 
          intensa e interfere nas atividades diárias de uma pessoa. Essa doença se manifesta por meio de 
          preocupações excessivas, tensão, medo e apreensão. Além disso, podem ocorrer sintomas físicos 
          como batimentos cardíacos acelerados, respiração rápida, sudorese, tremores, sensação de falta
          de ar, boca seca e tensão muscular. A pessoa também pode apresentar dificuldade de concentração,
          irritabilidade, insônia e evitar situações que desencadeiam a ansiedade.</p>

        <div className='tristeimg'>
            <img src={mulhertriste} alt="Imagem de uma mulher chorando"/>
        </div>

          <p>A ansiedade é caracterizada por preocupações excessivas, tensão, medo e apreensão. Os sintomas
           físicos da ansiedade podem incluir batimentos cardíacos acelerados, respiração rápida, sudorese,
           tremores, sensação de falta de ar, boca seca e tensão muscular. A pessoa também pode apresentar 
           dificuldade de concentração, irritabilidade, insônia e evitação de situações que desencadeiam a 
           ansiedade.</p>

      </section>

      <section className="transtornos">

      <div className="tituloans">
      <div class="forma">.</div>
        <h2>Transtornos</h2>
        </div>
        <p>Existem vários transtornos de ansiedade, incluindo transtorno de ansiedade generalizada (TAG), 
          transtorno de pânico, fobias específicas, transtorno de ansiedade social e transtorno de estresse
          pós-traumático (TEPT). Cada um desses transtornos possui características específicas, mas todos 
          envolvem uma resposta de ansiedade disfuncional que pode ser debilitante.</p>
        
      </section>

      <section className="causas">
      <div className="tituloans">
      <div class="forma">.</div>
        <h2>Causas</h2>
      </div>
        <p>A ansiedade pode ser desencadeada por uma variedade de fatores, incluindo situações estressantes, 
          eventos traumáticos, predisposição genética, desequilíbrios químicos no cérebro, doenças físicas e 
          uso de certas substâncias, como cafeína ou drogas.</p>
        
      </section>
      
      <section className="tratamento">
      <div className="tituloans">
      <div class="forma">.</div>
        <h2>Tratamento</h2>
        </div>
        <p>O tratamento da ansiedade pode envolver uma abordagem multifacetada. A terapia cognitivo-
          comportamental é uma forma comum de tratamento, ajudando os indivíduos a identificar e modificar 
          padrões de pensamento e comportamento que contribuem para a ansiedade. Além disso, medicamentos 
          como antidepressivos ou ansiolíticos podem ser prescritos em alguns casos mais graves. Terapias 
          alternativas, como técnicas de relaxamento, mindfulness e exercícios físicos, também podem ser 
          úteis no manejo da ansiedade.</p>

        <p>Autocuidado para ansiedade: Além do tratamento profissional, existem estratégias de autocuidado 
            que podem ajudar a reduzir os sintomas de ansiedade. Isso inclui ter uma rotina de sono adequada,
            praticar exercícios físicos regularmente, adotar técnicas de respiração profunda e relaxamento,
            limitar o consumo de cafeína e álcool, buscar apoio social, estabelecer limites saudáveis e 
            encontrar atividades que promovam o bem-estar emocional</p>

        <p>Existem diversos transtornos de ansiedade, sendo alguns deles o transtorno de ansiedade generalizada
           (TAG), transtorno de pânico, fobias específicas, transtorno de ansiedade social e transtorno de 
           estresse pós-traumático (TEPT). Cada um desses transtornos possui características específicas, mas 
           todos envolvem uma resposta de ansiedade disfuncional que pode ser debilitante.</p>

        <p>O tratamento da ansiedade pode incluir a terapia cognitivo-comportamental, uso de medicações, 
          técnicas de relaxamento e mudanças no estilo de vida. É importante buscar ajuda profissional se a 
          ansiedade estiver causando sofrimento significativo ou afetando negativamente a qualidade de vida. 
          O profissional de saúde especializado poderá avaliar o quadro de ansiedade e propor o tratamento 
          mais adequado para cada pessoa</p>

        <p>É importante ressaltar que a ansiedade é uma condição tratável, e muitas pessoas conseguem encontrar
           maneiras eficazes de gerenciá-la e melhorar sua qualidade de vida. Se você ou alguém que você 
           conhece está sofrendo com sintomas de ansiedade, é recomendado buscar ajuda de um profissional 
           de saúde mental qualificado.</p>
        
           <hr />
      </section>

      <section className='noticias'>

        <h2>Veja Também:</h2>

       <div className='fotosnots'>
       <ul className='nots1'>
          <li><a target='_blank'
          href="https://telemedicinamorsch.com.br/blog/como-saber-se-voce-tem-ansiedade">
             <img src={noticia1} alt="Imagem de uma mulher com as maos na cabeça"/>
             </a> <p>COMO SABER SE TENHO ANSIEDADE?</p> </li>
             <li><a target='_blank'
          href="https://www.bbc.com/portuguese/articles/c4ne681q64lo">
             <img src={noticia2} alt="Imagem de uma menina com a mao na boca"/>
             </a> <p>BRASIL A POPULAÇÃO MAIS ANSIOSA</p> </li>
        </ul>

        <ul className='nots2'>
             <li><a target='_blank'
              href="https://www.saudeemdia.com.br/noticias/sintomas-de-ansiedade-podem-ser-fisicos-cardiologista-revela-5.phtml">
             <img src={noticia3} alt="Imagem de uma mulher com a mao no peito"/>
             </a> <p>SINTOMAS FÍSICOS DA ANSIEDADE</p> </li>
             <li><a target='_blank'
          href="https://www.saudeemdia.com.br/noticias/psiquiatra-revela-5-formas-de-cuidar-da-saude-mental.phtml">
             <img src={noticia4} alt="Imagem de uma mulher meditando"/>
             </a> <p>COMO SABER SE TENHO ANSIEDADE?</p> </li>

        </ul>

       </div>
      </section>
    
    
      <section id="nav_final">

      <div className="logofinal2">
      <img src={Logo} alt="logo" />
      </div>

      <ul id='finalmenu'>
      <li> 
                <Link to={'/'}>Home</Link>
            </li>
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

export default Ansiedade