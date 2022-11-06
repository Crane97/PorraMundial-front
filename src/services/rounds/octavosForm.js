import React, { useState, useEffect } from "react";
import Select from "./select";

function OctavosComponent(props) {
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

        setTeams(result.map((team) => team.team));
      })

      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <div className="betBox">
        <div className="margins">
          <div>
            {" "}
            <h4>{"Octavos de final "}</h4>
          </div>
          <Select
            id={"Octavos ganador 1"}
            label={"Octavos ganador 1"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 2"}
            label={"Octavos ganador 2"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 3"}
            label={"Octavos ganador 3"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 4"}
            label={"Octavos ganador 4"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 5"}
            label={"Octavos ganador 5"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 6"}
            label={"Octavos ganador 6"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 7"}
            label={"Octavos ganador 7"}
            teams={teams}
          />
          <Select
            id={"Octavos ganador 8"}
            label={"Octavos ganador 8"}
            teams={teams}
          />
        </div>
      </div>
    </div>
  );
}

export default OctavosComponent;
