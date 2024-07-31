import React from "react";
import Cupcake from "../../assets/images/Image.png";
import Pizza from "../../assets/images/pizza 1.png"
import Kebab from "../../assets/images/kebab 1.png"
import Salmon from "../../assets/images/salmon 1.png"
import Doughnut from "../../assets/images/doughnut 1.png"
import "./main.css"
import MainItem from "./MainItem";
const Main = () => {
  const categories = [
    {
      id: 1,
      img: Cupcake,
      title: "Cupcake",
      count: "22 items ",
      bg:"#F0FEEB",
    },
    {
      id: 2,
      img: Pizza,
      title: "Pizza",
      count: "25 items ",
      bg:"#EAEEFA",
    },
    {
      id: 3,
      img: Kebab,
      title: "Kebab",
      count: "12 items ",
      bg:"#F9EEF3",
    },
    {
      id: 4,
      img: Salmon,
      title: "Salmon",
      count: "22 items ",
      bg:"#F3F7D9",
    },
    {
      id: 5,
      img: Doughnut,
      title: "Doughnut",
      count: "11 items ",
      bg:"#EAEEFA",
    },
  ];

  return (
    <>
    <div className="main">
    <h2 className="main-title">
    Browser Our Category <br /> <span>Receipt</span>
    </h2>

      <ul className={`flex justify-between w-[1200px] mx-auto mt-10`}>
        {categories.map((item, index) => (
         <MainItem item = {item} />
        ))}
      </ul>

    </div>
    </>
  );
};

export default Main;
