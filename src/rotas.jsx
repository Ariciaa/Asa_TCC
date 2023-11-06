import { Routes, Route } from 'react-router-dom'

import Home from "./Components/Home"
import Bibl from "./Components/Bibl"
import Ansiedade from "./Components/Ansiedade"
import Func from "./Components/Func"
import Q_S from "./Components/Q_S"
import Sobre from "./Components/Sobre"

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Ansiedade' element={<Ansiedade />} />
            <Route path='/Bibl' element={<Bibl/>} />
            <Route path='/Func' element={<Func/>} />
            <Route path='/Q_S' element={<Q_S />} />
            <Route path='/Sobre' element={<Sobre />} />
        </Routes>
    )
}

export default Rotas