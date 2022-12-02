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

  // const {id} = useParams();

  let cont = 0;

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://porramundial-368511.nw.r.appspot.com/api/player/roundDTO/" + props.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {

        setPlayerBet(data[0].player);
        setGroupWinners(data[0].teams);
        setOctavosWinner(data[1].teams);
        setCuartosWinner(data[2].teams);
        setSemisWinner(data[3].teams);
        setFinalWinner(data[4].teams);
      })

      .catch((error) => console.log("error", error));
  }, [props.id]);

  return (
    <div>
      <div class="container">
        <h1> {playerBet.username} </h1>
        <br></br>
        <h2> FASE DE GRUPOS </h2>
        <div class="row">
          <div class="col">
            <Bets group = "A" groupWinners={groupWinners} teamA={cont} teamB={cont+1}/>
          </div>
          <div class="col">
            <Bets group = "B" groupWinners={groupWinners} teamA={cont+2} teamB={cont+3}/>
          </div>
          <div class="col">
            <Bets group = "C" groupWinners={groupWinners} teamA={cont+4} teamB={cont+5}/>
          </div>
          <div class="col">
            <Bets group = "D" groupWinners={groupWinners} teamA={cont+6} teamB={cont+7}/>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <Bets group = "E" groupWinners={groupWinners} teamA={cont+8} teamB={cont+9}/>
          </div>
          <div class="col">
            <Bets group = "F" groupWinners={groupWinners} teamA={cont+10} teamB={cont+11}/>
          </div>
          <div class="col">
            <Bets group = "G" groupWinners={groupWinners} teamA={cont+12} teamB={cont+13}/>
          </div>
          <div class="col">
            <Bets group = "H" groupWinners={groupWinners} teamA={cont+14} teamB={cont+15}/>
          </div>
        </div>
        <div>
        <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col">
                    <OctavosBet octavosWinner={octavosWinner}/>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <CuartosBet cuartosWinner={cuartosWinner}/>
                      </div>
                      <div class="w-100"></div>

                      <div class="col">
                        <SemisBet semisWinner={semisWinner}/>
                      </div>
                    </div>
                  </div>

                  <div class="w-100"></div>
                  <div class="col">
                    <WinnerBet finalWinner={finalWinner}/>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerBet;
