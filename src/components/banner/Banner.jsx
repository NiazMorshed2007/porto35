import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/intro-1.jpg"
        alt=""
      />
      <div className="txt">
        <h4>Exclusive Product New Arrival</h4>
        <h1>Organic Coffee</h1>
        <h3>SPECIAL BLEND</h3>
        <h5>Fresh!</h5>
        <p>BREAKFAST PRODUCT ON SALE</p>
        <h3 className="up-to">UP TO</h3>
        <h2>50%</h2>
      </div>
      <div className="btn-right">
        <BsChevronRight />
      </div>
      <div className="btn-left">
        <BsChevronLeft />
      </div>
    </div>
  );
}

export default Banner;
