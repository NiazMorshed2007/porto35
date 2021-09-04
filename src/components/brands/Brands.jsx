import React from "react";
import Buttons from "../Buttons";

function Brands() {
  const images = [
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand6.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand6.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand2.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand3.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand5.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand3.png",
    "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/new_brand1.png",
  ];
  return (
    <div className="brands">
      <h2>Featured Brands</h2>
      <p>All our new arrivals in a exclusive brand selection</p>
      <Buttons />
      <div className="box-wrap">
        {images.map((e, i) => (
          <img src={e} key={i} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Brands;
