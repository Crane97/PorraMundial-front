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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Crear apuesta
        </button>
      </nav>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Crear nuevo jugador</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <AddPlayer/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
