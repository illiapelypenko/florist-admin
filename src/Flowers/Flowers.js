import React, { useState, useEffect } from "react";
import "./Flowers.scss";
import Flower from "./Flower";

const Flowers = ({ flowers, getItems }) => {
  return (
    <div className='flowers'>
      {flowers.map((flower, index) => (
        <Flower key={index} flower={flower} getItems={getItems} />
      ))}
    </div>
  );
};

export default Flowers;
