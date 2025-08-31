import React from 'react';
import { Notification, Leaderboard, Dp } from '../../assets/icon'
// import Button from '../shared/button';

function Navbar() {

const currentLevel = 3;
  const progress = ((currentLevel - 1) / 4) * 100;

    return (
        <div className="">
            <div className='flex justify-end gap-[20px] pt-[30px] mr-[90px]'>
              <Notification />
              <Dp/>
              <p className='font-bold'> Emmanuel Kelvin</p>
            </div>

            <div className='w-full pl-[40px] mt-[30px] border flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
            <div>
                <p className='text-4xl flex flex-col font-bold pt-[30px]'> Overview</p>
                <p className='pt-[10px] pb-[15px] pl-[5px]'> Hi Emmanuel Kelvin, here's your progress today!</p>
            </div>
            <div className='w-[20%] flex h-[60px] pt-[40px]'>
                <div>
                   <Leaderboard/>
                </div>
            <div className=" w-full p-4">
             <div className="w-full h-5 bg-blue-200 rounded-full overflow-hidden">
               <div
                 className="h-full bg-primaryBlue rounded-full"
                 style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
               />
             </div>
           </div>
             <p className="w-[80%] pt-[15px]"> Level: {currentLevel}</p>
            </div>
            </div>
        </div>
    );
}

export default Navbar;