import React from "react";

function FooterList(props) {
  return (
    <div>
      <h4>{props.head}</h4>
      <ul>
        {props.lists.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
