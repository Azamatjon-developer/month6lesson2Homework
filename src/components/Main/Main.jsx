import React from "react";
import Cupcake from "../../assets/images/Image.png";
import ""
const Main = () => {
  const categories = [
    {
      id: 1,
      img: Cupcake,
      title: "Cupcake",
      count: "22 items ",
    },
    {
      id: 2,
      img: Cupcake,
      title: "Pizza",
      count: "25 items ",
    },
    {
      id: 3,
      img: Cupcake,
      title: "Kebab",
      count: "12 items ",
    },
    {
      id: 4,
      img: Cupcake,
      title: "Salmon",
      count: "22 items ",
    },
    {
      id: 5,
      img: Cupcake,
      title: "Doughnut",
      count: "11 items ",
    },
  ];

  return (
    <>

      <ul className="">
        {categories.map((item, index) => (
         <li key={index}>
            <img src= {item.img} alt="Cupcake" />
            <h2> {item.title} </h2>
            <p> {item.count} </p>
         </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
