import "./App.css";
import "./Navbar.css";

import MainCalculator from "./MainCalculator.js";
import NavBar from "./NavBar.js";

function App() {
  const copyName = "Boletaz";
  let copyYear = `${copyName} | ${new Date().getFullYear()}`;

  return (
    
    <div className="container-app">
      
      <NavBar />
      <MainCalculator />
    
      <footer className="row">
      <div className="col-12 text-center rrss">
            <a href="https://api.whatsapp.com/send?text=https://github.com/thesoftmoon" target='_blank' rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/thesoftmoon" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="https://twitter.com/intent/tweet?url=https://github.com/thesoftmoon&text=Calcula%20f%C3%A1cilmente%20tu%20boleta%20de%20honorarios%20con%20esta%20app" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        <div className="col-12">
          <p className="footer-text">{copyYear}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
