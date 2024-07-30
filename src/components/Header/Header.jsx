import React from "react";
import "./header.css";
import headerLogo from "../../assets/images/Logo.png";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <img src={headerLogo} alt="HeaderLogo" />
          </div>
          <div className="header-navbar">
            <ul className="header-ul">
              <HeaderItem title={"Home"} />
              <HeaderItem title={"About "} />
              <HeaderItem title={"Promotions "} />
              <HeaderItem title={"Blogs"} />
              <HeaderItem title={"Contact Us"} />
            </ul>
          </div>
          <div className="header-btn">
            <button className="header-btn-hide">Masuk </button>
            <button className="header-btn-show"> Daftar Sekarang </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
