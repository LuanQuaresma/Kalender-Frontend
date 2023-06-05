import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Header from "../components/Header";
import Body from "../components/Body";

function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Body />
    </Router>
  );
}

export default Rotas;
