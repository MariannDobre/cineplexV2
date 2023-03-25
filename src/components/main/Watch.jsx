import React from "react";
import "./Watch.scss";
import { TbArrowBarToDown } from "react-icons/tb";

function Watch() {
  return (
    <div className="watch__container">
      <p className="watch__container-title">
        <span></span> Make a list of what to see next time at the cinema or at
        home! <TbArrowBarToDown className="watch__container-icon" />
      </p>
    </div>
  );
}

export default Watch;
