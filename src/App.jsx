import React from "react";
import Loader from "./components/loader/Loader";
import Header from "./components/head/Header";
import Banner from "./components/banner/Banner";
import OwlStage from "./components/OwlStage/OwlStage";
import Popular from "./components/popular/Popular";
import MostPopular from "./components/MostPopular/MostPopular";
import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <Banner />
      <OwlStage />
      <Popular />
      <MostPopular />
    </div>
  );
}

export default App;
