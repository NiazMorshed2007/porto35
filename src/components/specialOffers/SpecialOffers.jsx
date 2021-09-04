import React from "react";
import ProductBox from "../ProductBox";
import { AiFillStar } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { CgArrowsExpandUpRight } from "react-icons/cg";

function SpecialOffers() {
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
      head: "breakfast, cooking",
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
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/533582.jpg",
    },
    {
      head: "fruits",
      src: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/533582.jpg",
    },
  ];

  return (
    <div className="special-offers">
      <h2>Special Offers</h2>
      <p>All our new arrivals in a exclusive brand selection</p>
      <div className="box-wrapper">
        <div className="left">
          <img
            src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/473162.jpg"
            alt=""
          />
          <p>Cooking</p>
          <h3>Product Short Name</h3>
          <div className="star-box">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4>$59.00</h4>
          <div className="button">
            <BsBag />
            <p className="btn-txt">ADD TO CART</p>
            <div className="love">
              <IoIosHeartEmpty />
            </div>
            <div className="explore">
              <CgArrowsExpandUpRight />
            </div>
          </div>
        </div>
        <div className="right">
          {boxArr.map((e, i) => (
            <ProductBox key={i} head={e.head} img={e.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
