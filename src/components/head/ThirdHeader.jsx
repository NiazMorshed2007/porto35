import React from "react";

function ThirdHeader() {
  const Arr = [
    {
      txt: "shop",
      inner: "inner-shop",
    },
    {
      txt: "products",
      inner: "inner-products",
    },
    {
      txt: "features",
      inner: "inner-features",
    },
    {
      txt: "blog",
      inner: "",
    },
    {
      txt: "elements",
      inner: "",
    },
    {
      txt: "buy Porto!",
      inner: "",
    },
  ];
  return (
    <div className="third-header">
      <div className="third-header1">
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>All Departments</h4>
      </div>
      <div className="third-header2">
        {Arr.map((e, i) => (
          <div className={e.txt} key={i}>
            <p>{e.txt}</p>
            <div className={e.inner}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdHeader;
