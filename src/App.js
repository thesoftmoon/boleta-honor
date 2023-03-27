import "./App.css";
import logo from "./assets/logo-v02-boletaz.png";
import MainCalculator from "./MainCalculator.js";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const copyName = "Boletaz";
  let copyYear = `${copyName} | ${new Date().getFullYear()}`;

  return (

    
<HelmetProvider>
      <Helmet>
        <title>Boletaz | Calcula boleta de honorarios</title>
        <meta name="description" content="Calcula de forma fácil y simple tu boleta de honorarios en Chile" />
      </Helmet>
    <div className="container">

      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ms-4" href="#">
          <img src={logo} className="App-logo" alt="logo" height="35" />
        </a>
      </nav>

      <MainCalculator />
    
      <footer className="row">
        {/* <div className="col-12 text-center">
          <p className="text-uppercase share">Comparte</p>
        </div> */}
      <div className="col-12 text-center rrss mt-2 d-flex justify-content-center
      ">

            <p className="text-uppercase share">Comparte </p>
            <a href="https://wa.me/?text=Calcula%20fácilmente%20tu%20boleta%20de%20honorarios%20con%20esta%20App%20https://thesoftmoon.github.io/boleta-honor/" target='_blank' rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://www.facebook.com/sharer/sharer.php?u=https://thesoftmoon.github.io/boleta-honor/" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://twitter.com/intent/tweet?url=https://thesoftmoon.github.io/boleta-honor/&text=Calcula%20f%C3%A1cilmente%20tu%20boleta%20de%20honorarios%20con%20esta%20app" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        <div className="col-12">
          <p className="footer-text">{copyYear}</p>
        </div>
      </footer>
    </div>
  </HelmetProvider>
  );
}

export default App;
