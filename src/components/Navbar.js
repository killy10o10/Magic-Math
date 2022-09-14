import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <nav id="logo">
      <Link to="/">Math Magicians</Link>
    </nav>
    <nav className="nav-links">
      <Link className="nav" to="/">
        Home
      </Link>
      <Link className="nav" to="/calculator">
        Calculator
      </Link>
      <Link className="nav" to="/quote">
        Quote
      </Link>
    </nav>
  </header>
);

export default Navbar;
