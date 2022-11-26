import React, { useState } from "react";
import PlayerBet from "../pages/playerBet";
import "../styles/homeTable.css";

function HomeTable(props) {

  const [currentId, setCurrentId] = useState(1);

  function handleBetFromTable(id) {
    window.event.preventDefault();
    console.log("La funcion corre")
    setCurrentId(id);
    // return (
    //   <div>
    //     <div class="modal fade" id="exampleModalByPlayer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //       <div class="modal-dialog modal-xl">
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <h5 class="modal-title" id="exampleModalLabel">Ver apuesta de jugador</h5>
    //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //           </div>
    //           <div class="modal-body">
    //             <PlayerBet id={id} />
    //           </div>
    //           <div class="modal-footer">
    //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }


  return (
    <div className="paddingTable">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Apodo</th>
            <th scope="col">Puntos actuales</th>
            <th scope="col">Maximo de puntos</th>
            <th scope="col">Ver apuesta</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((playerResult) => (
            <tr>
              <td>{playerResult.username}</td>
              <td>{playerResult.accumulatedPoints}</td>
              <td>{playerResult.maxPoints}</td>
              <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalByPlayer" onClick={() => handleBetFromTable(playerResult.id)}>Apuesta</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div class="modal fade" id="exampleModalByPlayer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ver apuesta de jugador</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <PlayerBet id={currentId} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTable;
