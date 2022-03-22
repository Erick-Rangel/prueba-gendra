import { NavLink, Link } from "react-router-dom";
import "./Navbar.module.scss";
import "../App.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick and Morty Fanpage
        </Link>
      </div>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars open text-dark">menu</span>
        <span class="fas fa-times close text-dark"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav fs-5">
          <NavLink to="/" className="nav-link">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link">
            Episodes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
