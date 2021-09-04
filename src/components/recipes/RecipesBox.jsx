import React from "react";
import { BsSearch } from "react-icons/bs";

function RecipesBox(props) {
  return (
    <div className={props.class}>
      <div className="img-wrap">
        <img src={props.img} alt="" />
        <i>
          <BsSearch />
        </i>
      </div>
      <p>fresh vegetables</p>
      <h3>{props.head}</h3>
      <h4>A tasty way to incorporate more veggies into your diet!</h4>
    </div>
  );
}

export default RecipesBox;
