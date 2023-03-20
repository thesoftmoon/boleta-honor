import "./App.css";
import MainCalculator from './MainCalculator.js';
import { useState, useEffect } from "react";

function App() {
  const copyName = "Tomás Pacheco";
  let copyYear = `${copyName} | ${new Date().getFullYear()}`;

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ms-4" href="#">
          Dame Mi Boleta
        </a>
      </nav>

      <MainCalculator />

      <footer className="row">
        <div className="col-12">
          <p className="footer-text">{copyYear}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
