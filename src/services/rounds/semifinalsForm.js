import React, { useState } from "react";
import Select from "./select";

function SemisComponent(props) {
  return (
    <div>
      <div className="betBox">
        <div className="margins">
          <div>
            {" "}
            <h4>{"Semifinales "}</h4>
          </div>
          <Select
            id={"Semifinal ganador 1"}
            label={"Semifinal ganador 1"}
            teams={props.teams}
            setBets={props.setBets[0]}
            setRound={2}
          />
          <Select
            id={"Semifinal ganador 2"}
            label={"Semifinal ganador 2"}
            teams={props.teams}
            setBets={props.setBets[1]}
            setRound={2}
          />
        </div>
      </div>
    </div>
  );
}

export default SemisComponent;
