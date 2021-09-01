import React from "react";
import Icon from "./Icon";
import { FaShippingFast, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiHeart, FiInstagram, FiTruck } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function FirstHeader() {
  const Header2Ar = [
    {
      txt: "Our stores",
      icon: <IoLocationOutline />,
    },
    {
      txt: "Track Your Order",
      icon: <FiTruck />,
    },
    {
      txt: "Help",
      icon: <AiOutlineQuestionCircle />,
    },
    {
      txt: "Wishlist",
      icon: <FiHeart />,
    },
  ];

  const Header3Ar = [
    {
      icon: <FiInstagram />,
      name: "instagram-icon",
    },
    {
      icon: <FaTwitter />,
      name: "twitter-icon",
    },

    {
      icon: <FaFacebookF />,
      name: "facebook-icon",
    },
  ];

  return (
    <div className="first-header">
      <div className="first-header-1">
        <div className="inner-header1">
          <FaShippingFast className="truck-icon" />
          <p>FREE Express Shipping On Orders $99+</p>
        </div>
        <div className="inner-header1">
          <div>
            <p>USD</p>
            <IoIosArrowDown />
          </div>
          <div>
            <p>ENG</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="first-header-2">
        {Header2Ar.map((e, i) => (
          <div key={i}>
            {e.icon}
            <p>{e.txt}</p>
          </div>
        ))}
      </div>
      <div className="first-header-3">
        {Header3Ar.map((e, i) => (
          <Icon name={e.name} key={i} icon={e.icon} />
        ))}
      </div>
    </div>
  );
}

export default FirstHeader;
