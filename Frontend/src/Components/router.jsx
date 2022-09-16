import { Route, Routes } from "react-router";

import { LoginPage } from "./Pages/login/login";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
