import React from "react";

function Popular() {
  return (
    <div className="popular">
      <h2>Popular Departments</h2>
      <p>Products From These Categories Often Buy</p>
      <div className="popular-boxes">
        <div className="box">
          <img
            src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/cat-3.png"
            alt="cooking"
          />
          <h3>Cooking</h3>
          <p>4 Products</p>
        </div>
      </div>
    </div>
  );
}

export default Popular;
