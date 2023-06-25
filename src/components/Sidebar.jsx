import React from "react";
import "../styles/app.css";
import dash from "../utils/dashboard_icon.svg";
import transaction from "../utils/transaction_icon.svg";
import schedule from "../utils/schedule_icon.svg";
import user from "../utils/user_icon.svg";
import settings from "../utils/setting_icon.svg";

const Sidebar = () => {
  return (
    <div className="board2">
      <div className="menu">
        <h1>Board.</h1>
        <p className="dash">
          <img src={dash} alt="dashboard" />
          Dashboard
        </p>
        <p className="transaction">
          <img src={transaction} alt="transaction" />
          Transactions
        </p>
        <p className="schedules">
          <img src={schedule} alt="schedules" />
          Scheducles
        </p>
        <p className="users">
          <img src={user} alt="users" />
          Users
        </p>
        <p className="settings">
          <img src={settings} alt="settings" />
          Settings
        </p>
      </div>
      <div className="bottom">
        <p className="help">Help</p>
        <p className="contact">Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
