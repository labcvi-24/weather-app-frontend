import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import About from "./About/About";
import Weather from "./Weather/Weather";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather/:city" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;