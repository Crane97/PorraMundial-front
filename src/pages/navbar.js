import React from "react";
import '../styles/navbar.css';

function Navbar() {

  function handleAddUser(e){
    window.location = "/nuevoJugador";
  }

  function handlePorraMundial(e){
    window.location = "/";
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand marginLeft" onClick={handlePorraMundial}>Porra mundial 2022</a>
          <button class="btn btn-success mx-4" type="submit" onClick={handleAddUser}>
            Crear apuesta
          </button>
      </nav>
    </div>
  );
}

export default Navbar;
