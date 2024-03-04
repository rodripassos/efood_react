import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Detalhe from './pages/Detalhe'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<Detalhe />} />
  </Routes>
)

export default Rotas
