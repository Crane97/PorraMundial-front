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
                <div>
                  {" "}
                  <h4>Grupo B</h4>
                </div>
                <label for="groupB1">1º Grupo B</label>
                <select
                  class="form-control"
                  id="groupB1"
                  value={groupB1}
                  onChange={handleSelectedTeamB1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="INGLATERRA">Inglaterra</option>
                  <option value="IRAN">Iran</option>
                  <option value="ESTADOS_UNIDOS">Estados unidos</option>
                  <option value="GALES">Gales</option>
                </select>
                <label for="groupA2">2º Grupo B</label>
                <select
                  class="form-control"
                  id="groupB2"
                  value={groupB2}
                  onChange={handleSelectedTeamB2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="INGLATERRA">Inglaterra</option>
                  <option value="IRAN">Iran</option>
                  <option value="EEUU">Estados unidos</option>
                  <option value="GALES">Gales</option>
                </select>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo C</h4>
                </div>
                <label for="groupC1">1º Grupo C</label>
                <select
                  class="form-control"
                  id="groupC1"
                  value={groupC1}
                  onChange={handleSelectedTeamC1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="ARGENTINA">Argentina</option>
                  <option value="ARABIA_SAUDI">Arabia Saudi</option>
                  <option value="MEXICO">Mexico</option>
                  <option value="POLONIA">Polonia</option>
                </select>
                <label for="groupA2">2º Grupo C</label>
                <select
                  class="form-control"
                  id="groupC2"
                  value={groupC2}
                  onChange={handleSelectedTeamC2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="ARGENTINA">Argentina</option>
                  <option value="ARABIA_SAUDI">Arabia Saudi</option>
                  <option value="MEXICO">Mexico</option>
                  <option value="POLONIA">Polonia</option>
                </select>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo D</h4>
                </div>
                <label for="groupD1">1º Grupo D</label>
                <select
                  class="form-control"
                  id="groupD1"
                  value={groupD1}
                  onChange={handleSelectedTeamD1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="FRANCIA">Francia</option>
                  <option value="AUSTRALIA">Australia</option>
                  <option value="DINAMARCA">Dinamarca</option>
                  <option value="TUNEZ">Tunez</option>
                </select>
                <label for="groupD2">2º Grupo D</label>
                <select
                  class="form-control"
                  id="groupD2"
                  value={groupD2}
                  onChange={handleSelectedTeamD2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="FRANCIA">Francia</option>
                  <option value="AUSTRALIA">Australia</option>
                  <option value="DINAMARCA">Dinamarca</option>
                  <option value="TUNEZ">Tunez</option>
                </select>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo E</h4>
                </div>
                <label for="groupA1">1º Grupo E</label>
                <select
                  class="form-control"
                  id="groupE1"
                  value={groupE1}
                  onChange={handleSelectedTeamE1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="ESPANA">España</option>
                  <option value="COSTA_RICA">Costa Rica</option>
                  <option value="ALEMANIA">Alemania</option>
                  <option value="JAPON">Japon</option>
                </select>
                <label for="groupA2">2º Grupo E</label>
                <select
                  class="form-control"
                  id="groupE2"
                  value={groupE2}
                  onChange={handleSelectedTeamE2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="ESPANA">España</option>
                  <option value="COSTA_RICA">Costa Rica</option>
                  <option value="ALEMANIA">Alemania</option>
                  <option value="JAPON">Japon</option>
                </select>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo F</h4>
                </div>
                <label for="groupA1">1º Grupo F</label>
                <select
                  class="form-control"
                  id="groupF1"
                  value={groupF1}
                  onChange={handleSelectedTeamF1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="BELGICA">Belgica</option>
                  <option value="CANADA">Canada</option>
                  <option value="MARRUECOS">Marruecos</option>
                  <option value="CROACIA">Croacia</option>
                </select>
                <label for="groupA2">2º Grupo F</label>
                <select
                  class="form-control"
                  id="groupF2"
                  value={groupF2}
                  onChange={handleSelectedTeamF2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="BELGICA">Belgica</option>
                  <option value="CANADA">Canada</option>
                  <option value="MARRUECOS">Marruecos</option>
                  <option value="CROACIA">Croacia</option>
                </select>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo G</h4>
                </div>
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
                <label for="groupA2">2º Grupo G</label>
                <select
                  class="form-control"
                  id="groupG2"
                  value={groupG2}
                  onChange={handleSelectedTeamG2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="BRASIL">Brasil</option>
                  <option value="SERBIA">Serbia</option>
                  <option value="SUIZA">Suiza</option>
                  <option value="CAMERUN">Camerun</option>
                </select>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <div>
                  {" "}
                  <h4>Grupo H</h4>
                </div>
                <label for="groupA1">1º Grupo H</label>
                <select
                  class="form-control"
                  id="groupH1"
                  value={groupH1}
                  onChange={handleSelectedTeamH1}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="PORTUGAL">Portugal</option>
                  <option value="GHANA">Ghana</option>
                  <option value="URUGUAY">Uruguay</option>
                  <option value="COREA">Corea del sur</option>
                </select>
                <label for="groupA2">2º Grupo H</label>
                <select
                  class="form-control"
                  id="groupH2"
                  value={groupH2}
                  onChange={handleSelectedTeamH2}
                >
                  <option value="">Seleccionar equipo...</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Holanda">Holanda</option>
                </select>
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
