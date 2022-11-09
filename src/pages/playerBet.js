import React, { useEffect } from "react";
import HomeTable from "../services/homeTable";
import { useState } from "react";
import Bets from "../services/playerinfo/groupsBets";
import OctavosBet from "../services/playerinfo/octavosBet";
import CuartosBet from "../services/playerinfo/cuartosBet";
import SemisBet from "../services/playerinfo/semisBet";
import WinnerBet from "../services/playerinfo/winnerBet";
import { useParams } from "react-router-dom";

function PlayerBet(props) {
  const [playerBet, setPlayerBet] = useState([]);
  const [groupWinners, setGroupWinners] = useState([]);
  const [octavosWinner, setOctavosWinner] = useState([]);
  const [cuartosWinner, setCuartosWinner] = useState([]);
  const [semisWinner, setSemisWinner] = useState([]);
  const [finalWinner, setFinalWinner] = useState([]);

  const {id} = useParams();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/player/roundDTO/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("http://localhost:8080/api/player/roundDTO/" + id);
        console.log(data);

        setPlayerBet(data[0].player);
        setGroupWinners(data[0].teams);
        setOctavosWinner(data[1]);
        setCuartosWinner(data[2]);
        setSemisWinner(data[3]);
        setFinalWinner(data[4]);
      })

      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div class="container">
        <h1> dam </h1>
        <br></br>
        <h2> FASE DE GRUPOS </h2>
        <div class="row">
          <div class="col">
            <Bets group = "A" groupWinners={groupWinners}/>
          </div>
          <div class="col">
            <Bets group = "B" team1="ARGENTINA" team2="URUGUAY"/>
          </div>
          <div class="col">
            <Bets group = "C" team1="QATAR" team2="ECUADOR"/>
          </div>
          <div class="col">
            <Bets group = "D" team1="QATAR" team2="ECUADOR"/>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <Bets group = "E" team1="QATAR" team2="ECUADOR"/>
          </div>
          <div class="col">
            <Bets group = "F" team1="QATAR" team2="ECUADOR"/>
          </div>
          <div class="col">
            <Bets group = "G" team1="QATAR" team2="ECUADOR"/>
          </div>
          <div class="col">
            <Bets group = "H" team1="QATAR" team2="ECUADOR"/>
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
