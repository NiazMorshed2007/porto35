import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiShoppingBag } from "react-icons/bi";

function SecondHeader() {
  const categories = [
    "All Categories",
    "Vegetables",
    "Fruits",
    "Cooking",
    "Breakfast",
    "Frozen",
  ];
  return (
    <div className="second-header">
      <div className="second-header1">
        <img
          src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/logo.png"
          alt=""
        />
      </div>
      <div className="second-header2">
        <label>
          <input type="text" placeholder="Search..." />
          <div className="categories">
            <p>All Categories</p>
            <div className="inner-categories">
              {categories.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </div>
          </div>
          <BsSearch />
        </label>
      </div>
      <div className="second-header3">
        <BiUser />
        <div>
          <p>Welcome</p>
          <h4>Sign In / Register</h4>
        </div>
      </div>
      <div className="second-header4">
        <BiShoppingBag className="cart-icon"></BiShoppingBag>
        <sup>0</sup>
        <div>
          <p>Shopping Cart</p>
          <h4>$0.00</h4>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
