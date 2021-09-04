import React from "react";
import RecipesBox from "./RecipesBox";

function Recipes() {
  const arr = [
    {
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/blog-2.png",
      head: "Pasta With Pesto",
      class: "left",
    },
    {
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/blog-1.png",
      head: "Strawberry Waffles",
      class: "right",
    },
  ];
  return (
    <div className="recipes">
      <h2>Recipes For This Week</h2>
      <p>All our new arrivals in a exclusive brand selection</p>
      <div className="box-wrapper">
        {arr.map((e, i) => (
          <RecipesBox class={e.class} img={e.src} key={i} head={e.head} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
