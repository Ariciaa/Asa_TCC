import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./index.css"






import { useLocation } from "react-router-dom"



import { List, X, House, Robot, Gear, BookOpenText, UsersThree, Brain } from "@phosphor-icons/react"


function Header() {
    const [abrirFechar, setAbrirFechar] = useState(true)
    const {pathname} = useLocation();

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    

  useEffect(() => {
    handleAbrirFecharMenu()
  }, [ pathname ])

  return (
    <header>
        <div className={styles.header}>

            <div className="mobile">

          

         <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}><List size={32} /></button>
            </div>
            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <div>
                    <button onClick={handleAbrirFecharMenu}>
                        <X size={32} />
                    </button>
                </div>
                <nav>
                    <ul>
                        <li> 
                            <Link to={'/'}><House size={32} />Home</Link>
                        </li>
                        <li>
                            <Link to={'/Ansiedade'}> <Brain size={32} />Ansiedade</Link>
                        </li>
                        <li>
                            <Link to={'/Q_S'}><UsersThree size={32} />Quem somos?</Link>
                        </li>
                        <li>
                            <Link to={'/Func'}><Gear size={32} />Funcionamento</Link>
                        </li>
                        <li>
                            <Link to={'/Sobre'}> <Robot size={32} />Sobre o projeto</Link>
                        </li>
                        <li>
                            <Link to={'/Bibl'}> <BookOpenText size={32} />Referências</Link>
                        </li>
                    </ul>
                </nav>
            </div>
         </div>

         
         <div className="desktop">
         <nav>
        <ul className={styles.menu}>
          <li>
            <Link to={'/'}>
                <div className="house">
              <House size={32} />
              </div>
              Home
            </Link>
          </li>

          <li>
            <Link to={'/Ansiedade'}>
                <div className="brain">
              <Brain size={32} />
              </div>
              Ansiedade
            </Link>
          </li>

          <li>
            <Link to={'/Q_S'}>
                <div className="users">
              <UsersThree size={32} />
              </div>
              Quem somos?
            </Link>
          </li>

          <li>
            <Link to={'/Func'}>
                <div className="gear">
              <Gear size={32} />
              </div>
              Funcionamento
            </Link>
          </li>

          <li>
            <Link to={'/Sobre'}>
                <div className="robo">
              <Robot size={32} />
              </div>
              Sobre o projeto
            </Link>
          </li>

          <li>
            <Link to={'/Bibl'}>
                <div className="book">
              <BookOpenText size={32} />
              </div>
              Referências
            </Link>
          </li>
        </ul>
      </nav>
            </div>


       </div>

        
    </header>
  )
}

export default Header