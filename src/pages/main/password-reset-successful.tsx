import React from 'react';
import {  Lock, Verified} from '../../assets/icon';
import Button from '../../components/shared/button';
import { useNavigate } from 'react-router-dom';

const PasswordSuccessful = () => {
    
  const navigate = useNavigate()
    return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative hidden sm:flex items-center justify-center">
        <Lock/>
        
      </div>
      <div className="w-full sm:w-[60%] bg-primaryWhite flex items-center justify-center">

        <div className="w-[94%] sm:w-[90%] lg:w-[70%] bg-primaryWhite flex flex-col items-center justify-center h-[85%] sm:h-[551px]  sm:rounded-[20px] px-[18px] sm:px-[50px] lg:px-[100px]  sm:py-[30px] sm:shadow-2xl">
            <div className=' mt-[50px] lg:mt-[20px] text-center'>
                <h2 className="text-primaryBlue text-2xl font-bold mb-[50px]"> Password reset successful </h2>
            </div> 

            <div>
              <div className='flex items-center justify-center'>
               <Verified />
              </div>

             <div className='mt-[30px]'>
                 <p className='text-center text-[16px]  mt-[10px]'> You can now log in with your new password</p>
             </div>

            <div className='mt-[32px]'>
                <Button 
                onClick={() => navigate('/login')}
                className="w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px] cursor-pointer"
                > Go to Login </Button>
             </div>
            </div>
               
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccessful;