import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Buttons() {
  return (
    <>
      <div className="btn-right">
        <BsChevronRight />
      </div>
      <div className="btn-left">
        <BsChevronLeft />
      </div>
    </>
  );
}

export default Buttons;
