import React from "react";
import Header from "./components/head/Header";
import Banner from "./components/banner/Banner";
import OwlStage from "./components/OwlStage/OwlStage";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <OwlStage />
    </div>
  );
}

export default App;
