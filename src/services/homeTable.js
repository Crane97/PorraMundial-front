import React, { useState } from "react";
import "../styles/homeTable.css";

function HomeTable(props) {
  return (
    <div className="paddingTable">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Identificador</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apodo</th>
            <th scope="col">Puntos</th>
            <th scope="col">Total sumable</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((playerResult) => (
            <tr>
              <th scope="row">1</th>
              <td>{playerResult.name}</td>
              <td>{playerResult.username}</td>
              <td>16</td>
              <td>64</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeTable;
