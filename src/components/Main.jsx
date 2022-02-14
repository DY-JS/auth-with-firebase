import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuth } from "../hooks/useAuth";
import { removeAuth } from "../store/slices/authSlice";

const Main = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(removeAuth());
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <h1>Main</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
