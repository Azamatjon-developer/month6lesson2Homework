import React from "react";

function MainItem({item}) {
  return (
    <>
      <li
        style={{ backgroundColor: item.bg }}
        className={`w-[230px] py-[30px] text-center font-mono`}
        key={item.id}
      >
        <img
          className="mx-auto mb-4"
          src={item.img}
          alt="Cupcake"
          width={47}
          height={52}
        />
        <h2 className="mb-1 text-white"> {item.title} </h2>
        <p className="text-white"> {item.count} </p>
      </li>
    </>
  );
}

export default MainItem;
