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
                <GroupComponent group="A" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(0, 2)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="B" teams={["INGLATERRA", "IRAN", "EEUU", "GALES"]} setBets={props.setBets.slice(2, 4)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="C" teams={["ARGENTINA", "ARABIA_SAUDI", "MEXICO", "POLONIA"]} setBets={props.setBets.slice(4, 6)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="D" teams={["FRANCIA", "AUSTRALIA", "DINAMARCA", "TUNEZ"]} setBets={props.setBets.slice(6, 8)}/>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="E" teams={["ESPANA", "COSTA_RICA", "ALEMANIA", "JAPON"]} setBets={props.setBets.slice(8, 10)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="F" teams={["BELGICA", "CANADA", "MARRUECOS", "CROACIA"]} setBets={props.setBets.slice(10, 12)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="G" teams={["BRASIL", "SERBIA", "SUIZA", "CAMERUN"]} setBets={props.setBets.slice(12, 14)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="H" teams={["PORTUGAL", "GHANA", "URUGUAY", "COREA"]} setBets={props.setBets.slice(14, 16)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPhaseForm;
