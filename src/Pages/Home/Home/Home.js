import React from "react";
import Banner from "../Banner/Banner";
import Owners from "../Owners/Owners";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Products></Products>
      <Owners></Owners>
    </div>
  );
};

export default Home;
