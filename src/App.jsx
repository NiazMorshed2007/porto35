import React from "react";
import Loader from "./components/loader/Loader";
import Header from "./components/head/Header";
import Banner from "./components/banner/Banner";
import OwlStage from "./components/OwlStage/OwlStage";
import Popular from "./components/popular/Popular";
import MostPopular from "./components/MostPopular/MostPopular";
import WeekSpecial from "./components/weeksSpecial/WeekSpecial";
import Ad from "./components/ad/Ad";
import SpecialOffers from "./components/specialOffers/SpecialOffers";
import Brands from "./components/brands/Brands";
import Recipes from "./components/recipes/Recipes";
import Email from "./components/email/Email";
import Footer from "./components/footer/Footer";
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
      <WeekSpecial />
      <Ad />
      <SpecialOffers />
      <Brands />
      <Recipes />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
