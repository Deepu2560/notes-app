import React from "react";
import "./App.css";
import { NavbarPage } from "./Components/Pages/navbar/navbar";
import { NotesPage } from "./Components/Pages/notes/notes";
import { AllRoutes } from "./Components/router";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <NotesPage />
    </div>
  );
}

export default App;
