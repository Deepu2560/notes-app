// importing all required hooks and files
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";

// importing Navbar component and all routes component
import { NavbarPage } from "./Components/Pages/navbar/navbar";
import { AllRoutes } from "./Components/router";

function App() {
  // using isAuth from login reducer state and navigate to navigate from one page to another.
  const { isAuth } = useSelector((state) => state.login);
  const navigate = useNavigate();

  // useEffect hook to navigate to notes page after user login success
  useEffect(() => {
    if (isAuth) {
      navigate("/notes");
    } else {
      navigate("/");
    }
  }, [isAuth]);

  // main HTML codes
  return (
    <div className="App">
      <NavbarPage />
      <AllRoutes />
    </div>
  );
}

export default App;
