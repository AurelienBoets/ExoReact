import { useDispatch, useSelector } from "react-redux";
import { setAuthMode, setUser } from "./AuthSlice";
import { useRef } from "react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const authMode = useSelector((state) => state.auth.authMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const credentials = {
      email,
      password,
      returnSecureToken: true,
    };

    const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Something went wrong during the " + authMode);
      }

      const data = await response.json();

      localStorage.setItem("token", data.idToken);
      dispatch(setUser(data.idToken));
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h3>{authMode}</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="mb-3 ms-2  w-50">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="form-control"
          />
        </div>
        <div className="mb-3 ms-2  w-50">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="form-control"
          />
        </div>
        <button className="btn btn-success ms-3">{authMode}</button>
      </form>

      <button
        className="btn btn-primary ms-3  mt-5"
        onClick={() =>
          dispatch(
            setAuthMode(
              authMode === "Se connecter" ? "S'inscrire" : "Se connecter"
            )
          )
        }
      >
        {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
      </button>
    </>
  );
};

export default AuthForm;
