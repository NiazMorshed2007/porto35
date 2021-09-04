import React from "react";

function RecipesBox(props) {
  return (
    <>
      <div className="img-wra">
        <img src={props.img} alt="" />
      </div>
      <p>fresh vegetables</p>
      <h3>{props.head}</h3>
      <h4>A tasty way to incorporate more veggies into your diet!</h4>
    </>
  );
}

export default RecipesBox;
