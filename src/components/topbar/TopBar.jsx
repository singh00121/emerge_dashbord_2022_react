import React, { useState } from "react";

import "./topbar.css";
import Logo from "../../images/Emergecomputerslogo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiPower } from "react-icons/fi";
function TopBar() {
  var time = new Date().toLocaleTimeString();
  var day = new Date().getDay();
  var date = new Date().getDay();
  const [time1, setTime1] = React.useState(time);
  const [cday, setCday] = React.useState(day);
  const [cdate, setCdate] = React.useState(date);

  const Updatetime = () => {
    let time = new Date().toLocaleTimeString();
    setTime1(time);
  };
  setInterval(Updatetime, 1000);

  const updateDate = () => {
    let date = new Date().toLocaleDateString();
    setCdate(date);
  };
  setInterval(updateDate, 1000);
  const test = () => {
    alert("hiii");
    console.log("hiiiiiiiiiii");
    document.getElementById("popupbox").style.display = "block";
  };
  const updateday = () => {
    var day = new Date().getDay();
    var mon = "Monday";
    var tue = "Tuesday";
    var wed = "Wednesday";
    var thur = "Thurday";
    var fri = "Friday";
    var sat = "Saturday";
    var sun = "Sunday";
    if (day === 1) {
      setCday(mon);
    } else if (day === 2) {
      setCday(tue);
    } else if (day === 3) {
      setCday(wed);
    } else if (day === 4) {
      setCday(thur);
    } else if (day === 5) {
      setCday(fri);
    } else if (day === 6) {
      setCday(sat);
    } else setCday(sun);
  };
  setInterval(updateday, 1000);

  return (
    <div className="stickyTopBarParent ">
      <div className="stickyTopBar">
        <div className="tobar">
          <div className="">
            <img src={Logo} alt="AAARIY" />
          </div>

          <div className="Timertopab">
            {time1}&nbsp;&nbsp;{cdate}&nbsp;&nbsp;{cday}&nbsp;&nbsp;
          </div>
          <div className=" NotificationBox">
            <div className="">
              <IoMdNotificationsOutline className="PowerNot" />
            </div>
            <div>
              <FiPower className="Power" onClick={test} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
