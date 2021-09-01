import React from "react";

function Icon(props) {
  return (
    <>
      <span className={props.name}>{props.icon}</span>
    </>
  );
}

export default Icon;
