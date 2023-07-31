import "./css/App.scss";
import MainCalculator from "./components/MainCalculator.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";
import Favicon from './assets/Favicon/favicon-16x16.png'
import { useEffect } from "react";

function App() {

    useEffect (()=>{
      const onBlur = ()=>{
      document.title = 'Necesitas calcular una boleta?';
      }
      const onFocus = ()=>{
      document.title = 'Calcula tu boleta de honorarios | Boletaz';
      }
      window.onblur = onBlur;
      window.onfocus = onFocus;
  
      let faviconLink = document.querySelector("link[rel~='icon']");
      if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(faviconLink);
      }
      faviconLink.href = Favicon;
    }, []);
  

  return (
    <div className="container-app">
      <NavBar />
      <MainCalculator />
      <Footer />
    </div>
  );
}

export default App;
