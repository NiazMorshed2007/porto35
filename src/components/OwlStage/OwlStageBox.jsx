import React from "react";

function OwlStageBox(props) {
  return (
    <div>
      <div className="txt">
        <h3>{props.head}</h3>
        <p>{props.des}</p>
      </div>
      {props.icon}
    </div>
  );
}

export default OwlStageBox;
