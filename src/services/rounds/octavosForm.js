import React from "react";
import Select from "./select";

function OctavosComponent(props) {
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
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 2"}
            label={"Octavos ganador 2"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 3"}
            label={"Octavos ganador 3"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 4"}
            label={"Octavos ganador 4"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 5"}
            label={"Octavos ganador 5"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 6"}
            label={"Octavos ganador 6"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 7"}
            label={"Octavos ganador 7"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
          <Select
            id={"Octavos ganador 8"}
            label={"Octavos ganador 8"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={8}
          />
        </div>
      </div>
    </div>
  );
}

export default OctavosComponent;
