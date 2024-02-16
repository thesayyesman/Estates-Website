import React from "react";
import "../CSS/Buy.css";

export const BuyItem = ({ properties }) => {
  return (
    <div>
      <div className="buyItem">
        <div style={{ backgroundImage: `url(${properties.image})` }}></div>
        <p className="property-name"> {properties.title} </p>
        <p className="price"> ${properties.price} </p>
      </div>
    </div>
  );
};
