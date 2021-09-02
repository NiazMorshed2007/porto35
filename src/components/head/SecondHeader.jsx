import React, { useState } from "react";
import Cart from "./Cart";
import { BsSearch } from "react-icons/bs";
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

function SecondHeader() {
  const [open, setOpen] = useState(false);
  const [currCategory, setCurrCategory] = useState("All Categories");
  const [CartOpen, setCartOpen] = useState(false);
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
          <div
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            className={open ? "categories open" : "categories"}
          >
            <p>{currCategory}</p>
            <FiChevronDown />
            <div className="inner-categories">
              {categories.map((e, i) => (
                <p onClick={() => setCurrCategory(e)} key={i}>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className="search-icon-wrapper">
            <BsSearch className="search-icon" />
          </div>
        </label>
      </div>
      <div className="second-header3">
        <div>
          <p>Welcome</p>
          <h4>Sign In / Register</h4>
        </div>
        <BiUser />
      </div>
      <div
        onClick={() => (CartOpen ? setCartOpen(false) : setCartOpen(true))}
        className="second-header4"
      >
        <BiShoppingBag className="cart-icon"></BiShoppingBag>
        <div>
          <sup>0</sup>
          <p>Shopping Cart</p>
          <h4>$0.00</h4>
        </div>
      </div>
      <Cart
        fu={(e) =>
          e.target.className === "modal open"
            ? setCartOpen(false)
            : setCartOpen(true)
        }
        state={CartOpen}
      />
    </div>
  );
}

export default SecondHeader;
