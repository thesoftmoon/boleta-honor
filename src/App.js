import "./App.css";
import logo from './assets/logo-v02-boletaz.png'
import MainCalculator from './MainCalculator.js';

function App() {
  const copyName = "Tomás Pacheco";
  let copyYear = `${copyName} | ${new Date().getFullYear()}`;

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ms-4" href="#">
        <img src={logo} className="App-logo" alt="logo" height='35'/>
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
