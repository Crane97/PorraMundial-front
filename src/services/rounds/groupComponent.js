import React, { useState } from "react";

function GroupComponent(props) {
  const [groupA1, setGroupA1] = useState("");
  const [groupA2, setGroupA2] = useState("");

  const handleSelectedTeamA1 = (event) => {
    setGroupA1(event.target.value);
  };
  const handleSelectedTeamA2 = (event) => {
    setGroupA2(event.target.value);
  };

  return (
    <div>
      <div>
        {" "}
        <h4>Grupo A</h4>
      </div>
      <label for="groupA1">1º Grupo A</label>
      <select
        class="form-control"
        id="groupA1"
        value={groupA1}
        onChange={handleSelectedTeamA1}
      >
        <option value="">Seleccionar equipo...</option>
        <option value="QATAR">Qatar</option>
        <option value="ECUADOR">Ecuador</option>
        <option value="SENEGAL">Senegal</option>
        <option value="HOLANDA">Holanda</option>
      </select>
      <label for="groupA2">2º Grupo A</label>
      <select
        class="form-control"
        id="groupA2"
        value={groupA2}
        onChange={handleSelectedTeamA2}
      >
        <option value="">Seleccionar equipo...</option>
        <option value="QATAR">Qatar</option>
        <option value="ECUADOR">Ecuador</option>
        <option value="SENEGAL">Senegal</option>
        <option value="HOLANDA">Holanda</option>
      </select>
    </div>
  );
}

export default GroupComponent;
