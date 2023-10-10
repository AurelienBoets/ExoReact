import { Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <main>
        <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
          <div className="collapse navbar-collapse">
            <span className="text-light">eCONTACTS</span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className={"nav-link"}>
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={"nav-link"}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
