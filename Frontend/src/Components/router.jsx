// importing Route and Routes from react-router-dom
import { Route, Routes } from "react-router-dom";

// importing all components
import { LoginPage } from "./Pages/login/login";
import { NotesPage } from "./Pages/notes/notes";
import { SignupPage } from "./Pages/signup/signup";

// Mian foutes function
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/notes" element={<NotesPage />} />
    </Routes>
  );
};
