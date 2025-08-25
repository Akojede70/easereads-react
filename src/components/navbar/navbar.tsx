import React from 'react';
import { Notification, Leaderboard, Dp } from '../../assets/icon'
import Button from '../shared/button';

function navbar() {
    return (
        <div className="">
            <div className='flex justify-end gap-[20px] pt-[30px] mr-[90px]'>
              <Notification />
              <Dp/>
              <p className='font-bold'> Emmanuel Kelvin</p>
            </div>

            <div>
                <p className='text-4xl font-bold pt-[30px]'> Overview</p>
                <p> Hi Emmanuel Kelvin, here's your progress today!</p>
            </div>

            <Leaderboard/>
            <div className='w-[20%]'>
              <Button >
                View Leaderboard
            </Button>
            </div>
            
             
           
        </div>
    );
}

export default navbar;