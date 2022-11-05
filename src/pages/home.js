import React from "react";
import HomeTable from "../services/homeTable";
import { useState } from "react";

function Home(props) {
  const [playerResult, setPlayerResult] = useState(new Array());

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:8080/api/player/players", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      let result = [];

      data.forEach((element) => {
        result.push(element);
      });

      setPlayerResult(result);
      console.log(playerResult);
    })

    .catch((error) => console.log("error", error));

  return (
    <div>
      <HomeTable players={playerResult} />
    </div>
  );
}

export default Home;
