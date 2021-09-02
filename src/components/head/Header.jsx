import React from "react";
import FirstHeader from "./FirstHeader";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";

function Header() {
  return (
    <div className="header">
      <FirstHeader />
      <SecondHeader />
      <ThirdHeader />
    </div>
  );
}

export default Header;
