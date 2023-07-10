import "./css/App.css";
import MainCalculator from "./components/MainCalculator.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="container-app">
      <NavBar />
      <MainCalculator />
      <Footer />
    </div>
  );
}

export default App;
