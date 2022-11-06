import React, { useState } from "react";

function treatName(name) {
    return name.replace('_', ' ');
}

function Select(props) {
    
    const [group, setGroup] = useState("");
  
    const handleSelectedTeam = (event) => {
        setGroup(event.target.value);
    };

    return (
        <div>
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