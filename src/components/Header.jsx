import React from "react";
import "../styles/app.css";
import search from "../utils/Search.svg";
import noti from "../utils/Vector.svg";

const Header = ({ photo,logOut }) => {
  return (
    <div className="header">
      <div className="heading">
        <p>Dashboard</p>
      </div>
      <div className="search">
        <button>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="" className="searchImg" height={"15px"} />
        </button>
        <img src={noti} alt="" className="notification" height={"15px"} />
        <img src={photo} alt="" className="profile" height={"25px"} onClick={logOut}/>
      </div>
    </div>
  );
};

export default Header;
