import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'

// Páginas criadas
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <nav>
          <h1>Meus Artigos</h1>
          <NavLink to={"/"}>Início</NavLink>
          <NavLink to={"/contact"}>Contatos</NavLink>
          <NavLink to={"/about"}>Sobre</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/articles/:id' element={<Article />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
