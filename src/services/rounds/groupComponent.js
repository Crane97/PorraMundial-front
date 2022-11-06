import React, { useState } from "react";
import Select from "./select";

function GroupComponent(props) {
  return (
    <div>
      <div>
        {" "}
        <h4>{"Grupo " + props.group}</h4>
      </div>
      <Select id={"group" + props.group + "1"} label={"1º Grupo " + props.group} teams={props.teams} setBets={props.setBets[0]}/>
      <Select id={"group" + props.group + "2"} label={"2º Grupo " + props.group} teams={props.teams} setBets={props.setBets[1]}/>
    </div>
  );
}

export default GroupComponent;
