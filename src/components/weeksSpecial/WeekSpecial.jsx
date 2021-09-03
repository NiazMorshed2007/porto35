import React from "react";
import ProductBox from "../ProductBox";
import Buttons from "../Buttons";

function WeekSpecial() {
  const boxArr = [
    {
      head: "fruits, vegetables",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/528369.jpg",
    },
    {
      head: "cooking",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/473162.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/486658.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/652341.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/528435.jpg",
    },
    {
      head: "vegetables, fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/491876.jpg",
    },
  ];
  return (
    <div className="week-special">
      <h2>This Week's Specials</h2>
      <p>All our new arrivals in a exclusive brand selection</p>
      <Buttons />
      <div className="box-wrapper">
        <div className="inner-box-wrapper">
          {boxArr.map((e, i) => (
            <ProductBox key={i} head={e.head} img={e.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekSpecial;
