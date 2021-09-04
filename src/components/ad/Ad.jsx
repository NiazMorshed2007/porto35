import React from "react";

function Ad() {
  return (
    <div className="ad">
      <div className="left">
        <img
          src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/banner-1.png"
          alt=""
        />
        <div className="txt">
          <p>Exclusive Product New Arrival</p>
          <h2>Organic Coffee</h2>
          <h4>SPECIAL BLEND</h4>
          <h5>Fresh!</h5>
        </div>
      </div>
      <div className="right">
        <img
          src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/banner-2.png"
          alt=""
        />
        <div className="txt">
          <p>Stay Healthy</p>
          <h2>Low Carb</h2>
          <h3>STRAWBERRY</h3>
          <h5>Sugar-Free</h5>
        </div>
      </div>
    </div>
  );
}

export default Ad;
