import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Nuestro Proyecto</h1>
        <p>Estamos desarrollando una solución innovadora para tu negocio.</p>
        <button>Contáctanos</button>
      </header>
      <section className="Features">
        <h2>Características</h2>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 Nuestro Proyecto. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

