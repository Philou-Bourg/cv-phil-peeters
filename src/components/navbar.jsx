import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container"> {/*Classe container*/}
        <Link className="navbar-brand font-bold" to="/">Philippe Peeters</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/portfolio"
              >
                Réalisations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/contact"
              >
                Me contacter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
                to="/legal"
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;