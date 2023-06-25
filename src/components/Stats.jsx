import React from "react";
import "../styles/stats.css";
import rev from "../utils/rev.svg";
import transac from "../utils/transac.svg";
import like from "../utils/like.svg";
import user from "../utils/user.svg";

const Stats = () => {
  return (
    <div className="stats">
      <div className="totalRevenues">
        <img src={rev} alt="" height={"35px"} />
        <span>Total Revenues</span>
        <p className="statValue">$2,129,430</p>
      </div>
      <div className="totalTransactions">
        <img src={transac} alt="" height={"35px"} />
        <span>Total Transactions</span>
        <p className="statValue">1,520</p>
      </div>
      <div className="totalLikes">
        <img src={like} alt="" height={"35px"} />
        <span>Total Likes</span>
        <p className="statValue">9,721</p>
      </div>
      <div className="totalUsers">
        <img src={user} alt="" height={"35px"} />
        <span>Total Users</span>
        <p className="statValue">892</p>
      </div>
    </div>
  );
};

export default Stats;
