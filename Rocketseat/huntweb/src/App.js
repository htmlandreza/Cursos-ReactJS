import React, { Component } from "react";
import api from "./services/api";

// Rota
import Routes from "./routes";

// Estilo raiz
import "./styles.css";

// Componentes
import Header from "./components/Header";
import Main from "./pages/main";

// Função: stateless component
const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
);

export default App;