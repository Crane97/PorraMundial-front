import React from "react";
import '../styles/navbar.css';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand marginLeft">Porra mundial 2022</a>
          <button class="btn btn-success mx-4" type="submit">
            Crear apuesta
          </button>
      </nav>
    </div>
  );
}

export default Navbar;
