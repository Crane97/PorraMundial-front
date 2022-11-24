import React, { useState } from "react";
import Select from "./select";

function FinalComponent(props) {
  return (
    <div>
      <div className="betBox">
        <div className="margins">
          <div>
            {" "}
            <h4>{"FINAL Y GANADOR"}</h4>
          </div>
          <Select
            id={"GANADOR"}
            label={"GANADOR"}
            teams={props.teams}
            bets={props.bets} setBets={props.setBets}
            setRound={1}
          />
        </div>
      </div>
    </div>
  );
}

export default FinalComponent;
