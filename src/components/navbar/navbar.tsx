import React from "react";
import { Notification, Leaderboard, Dp } from "../../assets/icon";
// import Button from '../shared/button';

function Navbar() {
  

  return (
   <div className="">
  <div className="flex justify-end items-center gap-5 h-[88px] pr-[90px] mb-[5px] shadow-lg shadow-black/20">
    <Notification />
    <Dp />
    <p className="font-bold">Emmanuel Kelvin</p>
  </div>
</div>
  );
}

export default Navbar;
