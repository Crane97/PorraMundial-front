import React, { useState } from "react";
import Select from "./select";

function CuartosComponent(props) {
  return (
    <div>
      <div className="betBox">
        <div className="margins">
          <div>
            {" "}
            <h4>{"Cuartos de final "}</h4>
          </div>
          <Select
            id={"Cuartos ganador 1"}
            label={"Cuartos ganador 1"}
            teams={props.teams}
            setBets={props.setBets[0]}
            setRound={4}
          />
          <Select
            id={"Cuartos ganador 2"}
            label={"Cuartos ganador 2"}
            teams={props.teams}
            setBets={props.setBets[1]}
            setRound={4}
          />
          <Select
            id={"Cuartos ganador 3"}
            label={"Cuartos ganador 3"}
            teams={props.teams}
            setBets={props.setBets[2]}
            setRound={4}
          />
          <Select
            id={"Cuartos ganador 4"}
            label={"Cuartos ganador 4"}
            teams={props.teams}
            setBets={props.setBets[3]}
            setRound={4}
          />
        </div>
      </div>
    </div>
  );
}

export default CuartosComponent;
