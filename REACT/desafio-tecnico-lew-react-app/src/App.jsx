import { useState } from 'react'
import bernardoLewLogo from './assets/Bernardo-Lew-logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <a href="https://www.bernardolew.com.ar/" target="_blank">
          <img src={bernardoLewLogo} className="logo" alt="React logo" />
        </a>
        <h2 className="titulo-ppal">Bernardo Lew - Desafío Técnico React</h2>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cargar Lista de productos {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Lew logo to learn more
      </p>
    </>
  )
}

export default App
