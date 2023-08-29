import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los Links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
