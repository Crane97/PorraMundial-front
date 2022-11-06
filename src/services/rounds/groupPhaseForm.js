import React, { useState } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import GroupComponent from "./groupComponent";
import OctavosComponent from "./octavosForm";

function GroupPhaseForm(props) {
  
    

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
                <GroupComponent group="A" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="B" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="C" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="D" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="E" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="F" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="G" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="H" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]}/>
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
                  <OctavosComponent teams = {""}/>
                </div>
              </div>
              <div class="col betBox">Column</div>
              <div class="col betBox">Column</div>
              <div class="w-100"></div>
              <div class="col betBox">Final</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPhaseForm;
