import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

function MostPopularBox(props) {
  const [fav, setFav] = useState(false);
  return (
    <div className="box">
      <div className="txt-box">
        <div className="txt-box1">
          <h6>{props.head}</h6>
          <i onClick={() => (fav ? setFav(false) : setFav(true))}>
            {fav ? <IoIosHeart className="loved" /> : <IoIosHeartEmpty />}
          </i>
        </div>
        <div className="txt-box2">
          <p>Product Short Name</p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="txt-box3">
          <strike>$59.00</strike>
          <span>$49.00</span>
        </div>
      </div>
      <div className="img-box">
        <div className="layer">
          <i>
            <BiShoppingBag className="add" />
          </i>
          <div className="quick-view">
            <p>quick view</p>
          </div>
        </div>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default MostPopularBox;
