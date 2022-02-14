import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setAuth } from "../../store/slices/authSlice";
import Form from "./Form";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(
          setAuth({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("./");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Form title="Sign In" onSubmit={handleLogin} />
      <p>
        <NavLink to="/signup">Sign Up</NavLink>
        {` if haven't account`}
      </p>
    </>
  );
};

export default LogIn;
