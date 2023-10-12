import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const mdp = useRef();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
    axios
      .get(`http://localhost:5000/person`)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const login = (e) => {
    e.preventDefault();
    if (
      user.find(
        (element) =>
          element.mdp === mdp.current.value &&
          element.mail === email.current.value
      )
    ) {
      const loggedUser = user.find(
        (element) =>
          element.mdp === mdp.current.value &&
          element.mail === email.current.value
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          nom: loggedUser.nom,
          prenom: loggedUser.prenom,
          role: loggedUser.role,
        })
      );
      navigate("/");
    } else {
      alert("Mauvais identifiants");
    }
  };

  return (
    <div className="bg-light container rounded mt-5 p-3">
      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="mail"
            ref={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            name="mdp"
            ref={mdp}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Valider
        </button>
      </form>
    </div>
  );
};

export default Login;
