import React, { useState } from "react";

function Loader() {
  const [load, setLoad] = useState(false);

  function loadFunc() {
    window.addEventListener("load", () => {
      setLoad(true);
    });
  }

  loadFunc();

  return (
    <div className={load ? "loader loaded" : "loader"}>
      <div class="div1"></div>
      <div class="div2"></div>
      <div class="div3"></div>
    </div>
  );
}

export default Loader;
