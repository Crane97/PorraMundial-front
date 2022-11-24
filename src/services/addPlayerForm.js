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
  const [bets, setBets] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  const handleSubmit = () => {
    setPlayerData({ name: playerData.name, username: playerData.username, email: playerData.email, bets: bets });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(playerData);

    var raw = JSON.stringify(playerData);

    console.log(raw);

    let requestOptionsPost = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://porramundial-368511.nw.r.appspot.com/api/player/addPlayer", requestOptionsPost)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const handleInputName = (event) => {
    setPlayerData({ name: event.target.value, username: playerData.username, email: playerData.email, bets: playerData.bets });
  };

  const handleInputUsername = (event) => {
    setPlayerData({ name: playerData.name, username: event.target.value, email: playerData.email, bets: playerData.bets });
  };

  const handleInputEmail = (event) => {
    setPlayerData({ name: playerData.name, username: playerData.username, email: event.target.value, bets: playerData.bets });
  };

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://porramundial-368511.nw.r.appspot.com/api/player/teams", requestOptions)
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
            onChange={handleInputName}
          />
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleInputEmail}
          />
          <label for="exampleFormControlInput1">Apodo</label>
          <input
            type="username"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mi apodo"
            onChange={handleInputUsername}
          />
          <div className="margins">
            <h1>APUESTAS:</h1>
          </div>
          <div className="margins">
            <h3> FASE DE GRUPOS </h3>
          </div>
          <div>
            <div class="container">
              <Grupos bets={bets} setBets={setBets} />

              <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <Octavos teams={teams} bets={bets} setBets={setBets} />
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <CuartosComponent teams={teams} bets={bets} setBets={setBets} />
                      </div>
                      <div class="w-100"></div>

                      <div class="col">
                        <SemisComponent teams={teams} bets={bets} setBets={setBets} />
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col">
                    <FinalComponent teams={teams} bets={bets} setBets={setBets} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Enviar apuesta</button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
