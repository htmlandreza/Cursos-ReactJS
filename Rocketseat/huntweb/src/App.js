import React, { Component } from "react";
import api from "./services/api";

// Estilo raiz
import "./styles.css";

// Componentes
import Header from "./components/Header";
import Main from "./pages/main";

// Função: stateless component
const App = () => (
  <div className="App">
    <Header/>
    <Main/>
  </div>
);

export default App;