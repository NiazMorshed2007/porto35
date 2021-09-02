import React from "react";
import Header from "./components/head/Header";
import Banner from "./components/banner/Banner";
import OwlStage from "./components/OwlStage/OwlStage";
import Popular from "./components/popular/Popular";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OwlStage />
      <Popular />
    </div>
  );
}

export default App;
