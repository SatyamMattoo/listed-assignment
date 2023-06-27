import React from "react";
import "../styles/app.css";

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="scheduleHeading">
        <p className="top">Today's schedule</p>
        <p className="date">See All</p>
      </div>
      <div className="meeting">
        <div className="greenLine"></div>
        <div className="meet">
          <p className="head">Meeting with suppliers from Kuta bali</p>
          <p className="time">14.00-15.00</p>
          <p className="location">at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div className="operation">
        <div className="blueLine"></div>
        <div className="operate">
          <p className="head">Check operation at Giga Factory 1</p>
          <p className="time">18.00-20.00</p>
          <p className="location">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
