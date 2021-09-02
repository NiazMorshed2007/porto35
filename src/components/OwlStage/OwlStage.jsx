import React from "react";
import OwlStageBox from "./OwlStageBox";
import { FaShippingFast, FaServicestack } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";

function OwlStage() {
  const arr = [
    {
      icon: <FaShippingFast />,
      head: "free shipping & return",
      des: "Free shipping on call orders over $99",
    },
    {
      icon: <AiFillDollarCircle />,
      head: "money back guarantee",
      des: "100% money back guarantee",
    },
    {
      icon: <FaServicestack />,
      head: "online support 24/7",
      des: "Lorem ipsum dolor sut amet",
    },
    {
      icon: <RiSecurePaymentLine />,
      head: "secure payment",
      des: "Lorem ipsum dolor sut amet",
    },
  ];
  return (
    <div className="owl-stage">
      <div className="inner-owl-stage">
        {arr.map((e, i) => (
          <OwlStageBox icon={e.icon} head={e.head} des={e.des} key={i} />
        ))}
      </div>
    </div>
  );
}

export default OwlStage;
