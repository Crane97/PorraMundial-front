import React, { useState } from "react";

function treatName(name) {
    return name.replace('_', ' ');
}

function Select(props) {
    
    const [group, setGroup] = useState("");
  
    const handleSelectedTeam = (event) => {
        setGroup(event.target.value);
        console.log("Al pavo ese lo veo cada semana con una diferente");
        props.setBets({team: event.target.value, round: props.setRound})
    };

    return (
        <div className="margins">
            <label for={props.id}>{props.label}</label>
            <select
                class="form-control"
                id={props.id}
                value={group}
                onChange={handleSelectedTeam}
            >
                <option value="">Seleccionar equipo...</option>
                {props.teams && props.teams.map(team => <option value={team}>{treatName(team)}</option>)}
            </select>
        </div>
    )
}

export default Select;