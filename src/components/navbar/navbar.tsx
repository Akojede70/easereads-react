import React from 'react';
import { Notification, Dp } from '../../assets/icon'

function Navbar() {

    return (
        <div className="h-[75px]">
            <div className='flex justify-center items-center gap-[20px] md:justify-end md:gap-[20px] pt-[30px] mr-[90px]'>
              <Notification />
              <Dp/>
              <p className='font-bold'> Emmanuel Kelvin</p>
            </div>
        </div>
    );
}

export default Navbar;