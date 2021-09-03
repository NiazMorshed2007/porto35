import React, { useState } from "react";
import ProductBox from "../ProductBox";
import Buttons from "../Buttons";

function MostPopular() {
  const [category, setCategory] = useState(0);

  const catArr = [
    "View All",
    "Breakfast",
    "Cooking",
    "Frozen",
    "Fruits",
    "Vegetables",
  ];

  const boxArr = [
    {
      head: "breakfast, frozen",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/578315.jpg",
    },
    {
      head: "breakfast",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/496465.jpg",
    },
    {
      head: "breakfast, cooking, frozen",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/481837.jpg",
    },
    {
      head: "breakfast, frozen",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/586459.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/651432.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/533582.jpg",
    },
  ];
  return (
    <div className="most-popular">
      <h2>Most Popular</h2>
      <p>All our new arrivals in a exclusive brand selection</p>
      <Buttons />
      <div className="box-wrapper">
        <div className="categories">
          {catArr.map((e, i) => (
            <div
              className={category === i ? "category active" : "category"}
              onClick={() => setCategory(i)}
              key={i}
            >
              {e}
            </div>
          ))}
        </div>
        <div className="inner-box-wrapper">
          {boxArr.map((e, i) => (
            <ProductBox key={i} head={e.head} img={e.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
