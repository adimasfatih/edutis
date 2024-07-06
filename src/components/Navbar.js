import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/category/Matematika">Matematika</Link>
          </li>
          <li>
            <Link to="/category/Fisika">Fisika</Link>
          </li>
          <li>
            <Link to="/category/Kimia">Kimia</Link>
          </li>
          <li>
            <Link to="/category/Biologi">Biologi</Link>
          </li>
          <li>
            <Link to="/category/Sejarah">Sejarah</Link>
          </li>
          <li>
            <Link to="/category/Bahasa%20Inggris">Bahasa Inggris</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
