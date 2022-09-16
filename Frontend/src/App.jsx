import React from "react";
import "./App.css";
import { LoginPage } from "./Components/Pages/login/login";
import { NavbarPage } from "./Components/Pages/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <LoginPage />
    </div>
  );
}

export default App;
