import React from "react";
import PieChart from "./Piechart";
import "../styles/app.css";

const Products = () => {
  return (
    <div className="product">
      <div className="productHeading">
        <p className="top">Top Products</p>
        <p className="date">June-July 2023</p>
      </div>
      <div className="piechart">
        <div className="chart">
          <PieChart />
        </div>
        <div className="legends">
          <div className="green2">
            <div className="greenDot"></div>
            <p className="basicTees">Basic Tees</p>
          </div>
          <p className="greenPercent">55%</p>
          <div className="yellow">
            <div className="yellowDot"></div>
            <p className="shorts">Custom Shorts</p>
          </div>
          <p className="yellowPercent">55%</p>
          <div className="red2">
            <div className="redDot"></div>
            <p className="hoodies">Super Hoodies</p>
          </div>
          <p className="redPercent">55%</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
