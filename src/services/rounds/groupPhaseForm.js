import React, { useState } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import GroupComponent from "./groupComponent";
import OctavosComponent from "./octavosForm";

function GroupPhaseForm(props) {

  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="A" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="B" teams={["INGLATERRA", "IRAN", "EEUU", "GALES"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="C" teams={["ARGENTINA", "ARABIA_SAUDI", "MEXICO", "POLONIA"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="D" teams={["FRANCIA", "AUSTRALIA", "DINAMARCA", "TUNEZ"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="E" teams={["ESPANA", "COSTA_RICA", "ALEMANIA", "JAPON"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="F" teams={["BELGICA", "CANADA", "MARRUECOS", "CROACIA"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="G" teams={["BRASIL", "SERBIA", "SUIZA", "CAMERUN"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="H" teams={["PORTUGAL", "GHANA", "URUGUAY", "COREA"]} bets={props.bets} setBets={props.setBets}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPhaseForm;
