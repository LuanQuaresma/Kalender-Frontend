import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import Home from "../views/Home/Home.jsx";
import Body from "../components/Body/Body";
import Produto from "../views/Produto/Produto";

function Rotas() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/produto" element={<Produto />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Body />
    </Router>
  );
}

export default Rotas;
