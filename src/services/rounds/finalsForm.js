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
            setBets={props.setBets}
          />
        </div>
      </div>
    </div>
  );
}

export default FinalComponent;
