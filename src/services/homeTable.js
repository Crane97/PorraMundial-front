import React, { useState } from "react";
import "../styles/homeTable.css";

function HomeTable(props) {

  function handleBetFromTable(id){
    window.event.preventDefault();
    console.log("La funcion corre")
    window.location = "/jugador/" + id;
  }


  return (
    <div className="paddingTable">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Identificador</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apodo</th>
            <th scope="col">Puntos actuales</th>
            <th scope="col">Maximo de puntos</th>
            <th scope="col">Ver apuesta</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((playerResult) => (
            <tr>
              <th scope="row">{playerResult.id}</th>
              <td>{playerResult.name}</td>
              <td>{playerResult.username}</td>
              <td>{playerResult.accumulatedPoints}</td>
              <td>{playerResult.maxPoints}</td>
              <td><button type="button" onClick={() => handleBetFromTable(playerResult.id)}>Apuesta</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
