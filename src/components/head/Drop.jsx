import React from "react";

function Drop(props) {
  return (
    <div className={props.class}>
      <p>{props.first}</p>
      <p>{props.second}</p>
    </div>
  );
}

export default Drop;
