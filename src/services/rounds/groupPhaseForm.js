import React, { useState } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import GroupComponent from "./groupComponent";

function GroupPhaseForm(props) {
  const [groupB1, setGroupB1] = useState("");
  const [groupB2, setGroupB2] = useState("");

  const handleSelectedTeamB1 = (event) => {
    setGroupB1(event.target.value);
  };
  const handleSelectedTeamB2 = (event) => {
    setGroupB2(event.target.value);
  };

  const [groupC1, setGroupC1] = useState("");
  const [groupC2, setGroupC2] = useState("");

  const handleSelectedTeamC1 = (event) => {
    setGroupC1(event.target.value);
  };
  const handleSelectedTeamC2 = (event) => {
    setGroupC2(event.target.value);
  };

  const [groupD1, setGroupD1] = useState("");
  const [groupD2, setGroupD2] = useState("");

  const handleSelectedTeamD1 = (event) => {
    setGroupD1(event.target.value);
  };
  const handleSelectedTeamD2 = (event) => {
    setGroupD2(event.target.value);
  };

  const [groupE1, setGroupE1] = useState("");
  const [groupE2, setGroupE2] = useState("");

  const handleSelectedTeamE1 = (event) => {
    setGroupE1(event.target.value);
  };
  const handleSelectedTeamE2 = (event) => {
    setGroupE2(event.target.value);
  };

  const [groupF1, setGroupF1] = useState("");
  const [groupF2, setGroupF2] = useState("");

  const handleSelectedTeamF1 = (event) => {
    setGroupF1(event.target.value);
  };
  const handleSelectedTeamF2 = (event) => {
    setGroupF2(event.target.value);
  };

  const [groupG1, setGroupG1] = useState("");
  const [groupG2, setGroupG2] = useState("");

  const handleSelectedTeamG1 = (event) => {
    setGroupG1(event.target.value);
  };
  const handleSelectedTeamG2 = (event) => {
    setGroupG2(event.target.value);
  };

  const [groupH1, setGroupH1] = useState("");
  const [groupH2, setGroupH2] = useState("");

  const handleSelectedTeamH1 = (event) => {
    setGroupH1(event.target.value);
  };
  const handleSelectedTeamH2 = (event) => {
    setGroupH2(event.target.value);
  };

  return (
    <div>
      <div className="margins">
        <h3> FASE DE GRUPOS </h3>
      </div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent />
              </div>
            </div>
          </div>

          <div className="margins">
            <h3> FASE ELIMINATORIA </h3>
          </div>
          <div className="margins">
            <h4> OCTAVOS DE FINAL </h4>
          </div>
          <div class="container">
            <div class="row">
              <div class="col betBox">
                <div className="margins">
                  <label for="groupA1">1º Grupo G</label>
                  <select
                    class="form-control"
                    id="groupG1"
                    value={groupG1}
                    onChange={handleSelectedTeamG1}
                  >
                    <option value="">Seleccionar equipo...</option>
                    <option value="BRASIL">Brasil</option>
                    <option value="SERBIA">Serbia</option>
                    <option value="SUIZA">Suiza</option>
                    <option value="CAMERUN">Camerun</option>
                  </select>
                </div>
              </div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
              <div class="w-100"></div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPhaseForm;
