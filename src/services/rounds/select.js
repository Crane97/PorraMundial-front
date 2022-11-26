import React, { useState } from "react";

function treatName(name) {
    return name.replace('_', ' ');
}

function Select(props) {
    
    const [group, setGroup] = useState("");
    const [lastSelected, setLastSelected] = useState();

    const handleSelectedTeam = (event) => {
        console.log("Al pavo ese lo veo cada semana con una diferente");
        setGroup(event.target.value);
        props.setBets(props.bets.filter(bet => bet !== lastSelected));
        let newBet = {team: event.target.value, round: props.setRound}
        setLastSelected(newBet);
        props.setBets(prevBets => [...prevBets, newBet])
        console.log(props.bets)
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