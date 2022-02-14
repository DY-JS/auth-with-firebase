import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setAuth } from "../../store/slices/authSlice";
import Form from "./Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
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
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Form title="Sign Up" onSubmit={handleSignUp} />
      <p>
        <NavLink to="/login">Sign in</NavLink>
        {`if have an account already`}
      </p>
    </>
  );
};

export default SignUp;
