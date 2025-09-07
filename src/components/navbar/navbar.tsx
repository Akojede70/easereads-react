import React from 'react';
import { Notification, Dp } from '../../assets/icon'

function Navbar() {

    return (
        <div className="h-[75px]">
            <div className='flex justify-center items-center gap-[20px] lg:justify-end lg:gap-[20px] pt-[30px] mr-[90px]'>
              <Notification />
              <Dp/>
              <p className='font-bold md:text-[20px]'> Emmanuel Kelvin</p>
            </div>
        </div>
    );
}

export default Navbar;