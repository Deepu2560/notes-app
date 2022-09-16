import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./Pages/login/login";
import { SignupPage } from "./Pages/signup/signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};
