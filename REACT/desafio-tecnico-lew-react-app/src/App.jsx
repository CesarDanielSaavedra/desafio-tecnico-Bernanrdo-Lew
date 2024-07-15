import { useState, useEffect } from 'react'
import bernardoLewLogo from './assets/Bernardo-Lew-logo.png'
import productos from './data/productos.json';

import './App.css'

function App() {
  const [productosCargados, setProductosCargados] = useState([]);

  useEffect(() => {
    //a fines de completar el desafio se carga la informacion desde el archivo productos.json 
    setProductosCargados(productos);
  }, []);

  return (
    <>
      <div className="navbar">
        <a href="https://www.bernardolew.com.ar/" target="_blank">
          <img src={bernardoLewLogo} className="logo" alt="React logo" />
        </a>
        <h2 className="title">Bernardo Lew - Desafío Técnico React</h2>
      </div>
      <div className="card">
        <h3> Lista de productos</h3>
        <ul className='list'>
          {productosCargados.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.nombre}</strong> - ${producto.precio}
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on Lew logo to learn more
      </p>
    </>
  )
}

export default App
