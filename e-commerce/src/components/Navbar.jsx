import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState("");

  const logout = () => {
    localStorage.removeItem("user");
    setPerson("");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setPerson(JSON.parse(localStorage.getItem("user")));
    }
  }, [localStorage.getItem("user")]);

  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white">
        <div className="container-fluid bg-dark">
          <span className="navbar-brand text-white">Ecommerce</span>
          <div className="collapse navbar-collapse">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <li className="nav-item">Accueil</li>
              {person.role === "ADMIN" ? (
                <li className="nav-item ms-4">Ajouter article</li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              {person === "" ? (
                <span
                  onClick={() => navigate("/login")}
                  style={{ cursor: "pointer" }}
                  className="me-3"
                >
                  <i className="bi bi-person"></i>Connexion
                </span>
              ) : (
                <span
                  onClick={() => logout()}
                  style={{ cursor: "pointer" }}
                  className="me-3"
                >
                  <i className="bi bi-person"></i>Déconnexion
                </span>
              )}
              <span
                className=" me-3"
                onClick={() => navigate("/panier")}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-basket"></i>Panier
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </main>
  );
};

export default Navbar;
