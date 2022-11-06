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
                <GroupComponent group="B" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(2, 4)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="C" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(4, 6)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="D" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(6, 8)}/>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="E" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(8, 10)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="F" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(10, 12)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="G" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(12, 14)}/>
              </div>
            </div>
            <div class="col betBox">
              <div className="margins">
                <GroupComponent group="H" teams={["QATAR", "ECUADOR", "SENEGAL", "HOLANDA"]} setBets={props.setBets.slice(14, 16)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupPhaseForm;
