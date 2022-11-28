import React from "react";
import '../styles/navbar.css';
import AddPlayer from "./addPlayer";

function Navbar() {

  // function handleAddUser(e){
  //   window.location = "/nuevoJugador";
  // }

  function handlePorraMundial(e){
    window.location = "/";
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand marginLeft" onClick={handlePorraMundial}>Porra mundial 2022</a>
      </nav>

      
    </div>
  );
}

export default Navbar;
