import { useState } from 'react'
import bernardoLewLogo from './assets/Bernardo-Lew-logo.png'
import productos from './data/productos.json';

import './App.css'

function App() {
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const handleMostrarProductos = () => {
    setMostrarProductos(true);
  };
  return (
    <>
      <div className="navbar">
        <a href="https://www.bernardolew.com.ar/" target="_blank">
          <img src={bernardoLewLogo} className="logo" alt="React logo" />
        </a>
        <h2 className="titulo-ppal">Bernardo Lew - Desafío Técnico React</h2>
      </div>
      <div className="card">
        <button onClick={handleMostrarProductos}>
          Cargar productos
        </button>
        {mostrarProductos && (
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>
              <strong>{producto.nombre}</strong> - ${producto.precio.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      </div>
      <p className="read-the-docs">
        Click on Lew logo to learn more
      </p>
    </>
  )
}

export default App
