import React, { useState } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import "../styles/addPlayerForm.css";
import Grupos from "../services/rounds/groupPhaseForm";
import Octavos from "../services/rounds/octavosForm";

function AddPlayerForm(props) {
  
  const [octavos1, setOctavos1] = useState("");

  const handleSelectedOctavos1 = (event) => {
    setOctavos1(event.target.value);
  };

  const [octavos2, setOctavos2] = useState("");

  const handleSelectedOctavos2 = (event) => {
    setOctavos2(event.target.value);
  };
  const [octavos3, setOctavos3] = useState("");

  const handleSelectedOctavos3 = (event) => {
    setOctavos3(event.target.value);
  };
  const [octavos4, setOctavos4] = useState("");

  const handleSelectedOctavos4 = (event) => {
    setOctavos4(event.target.value);
  };
  const [octavos5, setOctavos5] = useState("");

  const handleSelectedOctavos5 = (event) => {
    setOctavos5(event.target.value);
  };
  const [octavos6, setOctavos6] = useState("");

  const handleSelectedOctavos6 = (event) => {
    setOctavos6(event.target.value);
  };
  const [octavos7, setOctavos7] = useState("");
  const handleSelectedOctavos7 = (event) => {
    setOctavos7(event.target.value);
  };
  const [octavos8, setOctavos8] = useState("");

  const handleSelectedOctavos8 = (event) => {
    setOctavos8(event.target.value);
  };

  return (
    <div className="margins">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Nombre y apellidos</label>
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Nombre y Apellidos"
          />
          <label for="exampleFormControlInput1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <label for="exampleFormControlInput1">Apodo</label>
          <input
            type="username"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mi apodo"
          />
          <div className="margins">
            <h1>APUESTAS:</h1>
          </div>
          <div className="margins">
            <h3> FASE DE GRUPOS </h3>
          </div>
          <div>
            <div class="container">
              <Grupos/>

              <div className="margins">
                <h3> FASE ELIMINATORIA </h3>
              </div>
              <div className="margins">
                <h4> OCTAVOS DE FINAL </h4>
              </div>
              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPlayerForm;
