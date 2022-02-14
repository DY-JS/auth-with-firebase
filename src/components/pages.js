import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./onBoardingForms/LogIn";
import SignUp from "./onBoardingForms/SignUp";
import Main from "./Main";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
