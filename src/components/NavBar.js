import "../css/Navbar.css";
import logo from "../assets/logo-v02-boletaz.png";

function NavBar() {
  return (
    <div className="navbar-main-container">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-start">
              <a href="/">
                <img src={logo} className="App-logo" alt="logo" height="35" />
              </a>

              {/* <div className="navbar-links">
                <a href="/faq" data-content="FAQ">
                  FAQ
                </a>
                <a href="/links" data-content="Links">
                  Links
                </a>
                <a href="/informacion" data-content="Información">
                  Información
                </a>
              </div> */}
            </div>

            <div className="text-center share-btn-container">
              <p className="me-3">Comparte</p>
              <a
                href="https://api.whatsapp.com/send?text=https://github.com/thesoftmoon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/thesoftmoon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a
                href="https://twitter.com/intent/tweet?url=https://github.com/thesoftmoon&text=Calcula%20f%C3%A1cilmente%20tu%20boleta%20de%20honorarios%20con%20esta%20app"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
