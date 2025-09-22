import React from 'react';
import { Link } from 'react-router-dom';
import { Notification, Dp } from '../../assets/icon';

function Navbar() {
  return (
    <div className="w-full h-[75px]">
      <div className="w-[85%] md:w-[97%] flex justify-center items-center gap-[20px] lg:justify-end lg:gap-[20px] pt-[30px] md:mr-[90px]">
        <Notification />
        <Link
          to="/jupeb/user-profile"
          className="flex items-center gap-[10px] hover:bg-gray-100 rounded-lg p-2 transition-colors"
        >
          <Dp />
          <p className="font-bold md:text-[20px]">Emmanuel Kelvin</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;