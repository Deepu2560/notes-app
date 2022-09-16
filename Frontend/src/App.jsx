import React from "react";
import "./App.css";
import { NavbarPage } from "./Components/Pages/navbar/navbar";
import { AllRoutes } from "./Components/router";
import { SignupPage } from "./Components/Pages/signup/signup";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <AllRoutes />
    </div>
  );
}

export default App;
