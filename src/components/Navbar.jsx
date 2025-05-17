// Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom"; // Make sure react-router-dom is installed
import logo  from '../assets/Images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <nav className="navbar">
      <div className="navbar-left">
        <Link to="/"><img
          src={logo}
          alt="Linktree Logo"
          height={30}
        /></Link>

        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/linktree">LinktreeForm</Link></li>
          {/* <li><Link to="/profile">Profiles</Link></li> */}
          <li><Link to="/all-profiles">All Profiles</Link></li>
          <li><Link to="#">Pricing</Link></li>
          <li><Link to="#">Learn</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="navbar-auth">
          <button className="navbar-login">Log in</button>
          <button className="navbar-signup">Sign up free</button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
