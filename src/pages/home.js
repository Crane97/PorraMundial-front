import React, { useEffect } from "react";
import HomeTable from "../services/homeTable";
import { useState } from "react";

function Home(props) {
  const [playerResult, setPlayerResult] = useState(new Array());

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
  fetch("https://porramundial-368511.nw.r.appspot.com/api/player/players", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      let result = [];

      data.content.forEach((element) => {
        result.push(element);
      });

      setPlayerResult(result);
    })

    .catch((error) => console.log("error", error));
  },[])

  return (
    <div>
      <HomeTable players={playerResult} />
    </div>
  );
}

export default Home;
