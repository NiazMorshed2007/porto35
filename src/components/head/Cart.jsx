import React from "react";
import { ImCross } from "react-icons/im";

function Cart(props) {
  return (
    <div onClick={props.fu} className={props.state ? "modal open" : "modal"}>
      <div className="cart">
        <div className="inner-cart">
          <h4>Shopping Cart</h4>
          <p>No products in the cart.</p>
          <ImCross />
        </div>
      </div>
    </div>
  );
}

export default Cart;
