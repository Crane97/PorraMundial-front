import React, { useEffect } from "react";
import HomeTable from "../services/homeTable";
import { useState } from "react";
import Bets from "../services/playerinfo/groupsBets";
import OctavosBet from "../services/playerinfo/octavosBet";
import CuartosBet from "../services/playerinfo/cuartosBet";
import SemisBet from "../services/playerinfo/semisBet";
import WinnerBet from "../services/playerinfo/winnerBet";

function PlayerBet(props) {
  const [playerResult, setPlayerResult] = useState(new Array());

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/player/players", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let result = [];
        console.log(data.content);

        data.content.forEach((element) => {
          result.push(element);
        });

        setPlayerResult(result);
      })

      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div class="container">
        <h2> CRANEX </h2>
        <br></br>
        <h1> FASE DE GRUPOS </h1>
        <div class="row">
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
          <div class="w-100"></div>
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
          <div class="col">
            <Bets />
          </div>
        </div>
        <div>
        <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <OctavosBet/>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <CuartosBet />
                      </div>
                      <div class="w-100"></div>

                      <div class="col">
                        <SemisBet />
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col">
                    <WinnerBet />
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerBet;
