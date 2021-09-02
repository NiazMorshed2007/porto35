import React from "react";

function Popular() {
  const arr = [
    {
      img: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/cat-3.png",
      head: "Cooking",
      des: "4 Products",
    },
    {
      img: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/cat-2.png",
      head: "Fruits",
      des: "10 Products",
    },
    {
      img: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/cat-1.png",
      head: "Vegetables",
      des: "1 Product",
    },
    {
      img: "https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/cat-4.png",
      head: "Breakfast",
      des: "8 Products",
    },
  ];
  return (
    <div className="popular">
      <h2>Popular Departments</h2>
      <p>Products From These Categories Often Buy</p>
      <div className="popular-boxes">
        {arr.map((e, i) => (
          <div className="box" key={i}>
            <div className="layer"></div>
            <img src={e.img} alt="" />
            <h3>{e.head}</h3>
            <p>{e.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
