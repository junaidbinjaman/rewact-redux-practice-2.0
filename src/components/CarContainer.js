import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCar } from "../redux/car/carActions";

const CarContainer = () => {
  const selector = useSelector((state) => state.car.numOfCar);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Car = {selector}</h1>
      <button onClick={() => dispatch(buyCar())}>Buy a Car</button>
    </div>
  );
};

export default CarContainer;
