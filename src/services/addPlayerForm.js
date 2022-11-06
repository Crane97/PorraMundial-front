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

  const [bet1, setBet1] = useState({});
  const [bet2, setBet2] = useState({});
  const [bet3, setBet3] = useState({});
  const [bet4, setBet4] = useState({});
  const [bet5, setBet5] = useState({});
  const [bet6, setBet6] = useState({});
  const [bet7, setBet7] = useState({});
  const [bet8, setBet8] = useState({});
  const [bet9, setBet9] = useState({});
  const [bet10, setBet10] = useState({});
  const [bet11, setBet11] = useState({});
  const [bet12, setBet12] = useState({});
  const [bet13, setBet13] = useState({});
  const [bet14, setBet14] = useState({});
  const [bet15, setBet15] = useState({});
  const [bet16, setBet16] = useState({});

  const groupPhaseFunctions = [setBet1, setBet2, setBet3, setBet4, setBet5, setBet6, setBet7, setBet8, setBet9, setBet10, setBet11, setBet12, setBet13, setBet14, setBet15, setBet16]

  const [bet17, setBet17] = useState({});
  const [bet18, setBet18] = useState({});
  const [bet19, setBet19] = useState({});
  const [bet20, setBet20] = useState({});
  const [bet21, setBet21] = useState({});
  const [bet22, setBet22] = useState({});
  const [bet23, setBet23] = useState({});
  const [bet24, setBet24] = useState({});

  const octavosFunctions = [setBet17, setBet18, setBet19, setBet20, setBet21, setBet22, setBet23, setBet24];

  const [bet25, setBet25] = useState({});
  const [bet26, setBet26] = useState({});
  const [bet27, setBet27] = useState({});
  const [bet28, setBet28] = useState({});

  const cuartosFunctions = [setBet25, setBet26, setBet27, setBet28];

  const [bet29, setBet29] = useState({});
  const [bet30, setBet30] = useState({});

  const semisFunctions = [setBet29, setBet30];

  const [bet31, setBet31] = useState({});

  const handleSubmit = () => {

    let bets123 = [bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9, bet10,
      bet11, bet12, bet13, bet14, bet15, bet16, bet17, bet18, bet19, bet20,
      bet21, bet22, bet23, bet24, bet25, bet26, bet27, bet28, bet29, bet30, bet31];

      console.log(bets123);

    setPlayerData({ name: playerData.name, username: playerData.username, email: playerData.email, bets: [...bets123] });

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

    fetch("http://localhost:8080/api/player/addPlayer", requestOptionsPost)
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
              <Grupos setBets={groupPhaseFunctions} />

              <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <Octavos teams={teams} setBets={octavosFunctions} />
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <CuartosComponent teams={teams} setBets={cuartosFunctions} />
                      </div>
                      <div class="w-100"></div>

                      <div class="col">
                        <SemisComponent teams={teams} setBets={semisFunctions} />
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col">
                    <FinalComponent teams={teams} setBets={setBet31} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Block level button</button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
