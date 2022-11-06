import React, { useState, useEffect } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import "../styles/addPlayerForm.css";
import Grupos from "../services/rounds/groupPhaseForm";
import Octavos from "../services/rounds/octavosForm";
import CuartosComponent from "./rounds/cuartosForm";
import SemisComponent from "./rounds/semifinalsForm";
import FinalComponent from "./rounds/finalsForm";

function AddPlayerForm(props) {

  const [teams, setTeams] = useState([]);

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/player/teams", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let result = [];
        console.log(data);

        data.forEach((element) => {
          result.push(element);
        });

        setTeams(result.map((team) => team.team).sort());
      })

      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="margins">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nombre y apellidos</label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre y Apellidos"
          />
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <label for="exampleFormControlInput1">Apodo</label>
          <input
            type="username"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mi apodo"
          />
          <div className="margins">
            <h1>APUESTAS:</h1>
          </div>
          <div className="margins">
            <h3> FASE DE GRUPOS </h3>
          </div>
          <div>
            <div class="container">
              <Grupos />

              <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <Octavos teams={teams}/>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <CuartosComponent />
                      </div>
                      <div class="w-100"></div>

                      <div class="col">
                        <SemisComponent />
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col">
                    <FinalComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPlayerForm;
