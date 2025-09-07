import React from 'react';
import { useNavigate } from 'react-router';
import paths from './data';
import { SidebarIcon } from '../../assets/icon';

function SideBar()  {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] md:w-[23%] lg:w-[13.5%] h-screen flex-shrink-0 bg-primaryWhite border border-creamWhite">
      <div className='flex justify-center ml-3 items-center gap-[20px] mt-[25px]'>
         <h2 className='text-[14px] md:text-2xl font-bold text-primaryBlue'> Easereads </h2>
         <SidebarIcon />
      </div>
     
      <div className="pt-6 md:pt-10 lg:pl-5 flex flex-col gap-4 md:gap-[30px]">
        {paths.map((x) => (
          <div key={x.id}>
            <div
              className={`flex gap-[15px] items-center h-8 pl-[7%] md:pl-[8%]  lg:pl-[10%] cursor-pointer text-capitalize w-full lg:w-[75%] hover:bg-[#5A5A5A] hover:text-[#ffffff]
                ${window.location.pathname === x.path ? 'bg-primaryBlue  h-10 w-[2%] md:w-[75%] rounded-[10px] border-r-[5px] border-[#ff9f23]' : 'text-[#7E7F7F]'}`}
              onClick={() => x.path && navigate(x.path)}
            >
              <div className="hidden md:block lg:mr-2">
                {x.icon}
              </div>
              <p
    className={`text-xs md:text-base font-normal leading-5 hover:text-[#fffff]  ${
      window.location.pathname === x.path ? 'text-[#ffffff]' : 'text-[#7E7F7F]'
    }`}
  >
    {x.name}
  </p>
            </div>
            
          </div>
        ))}
        <div className='mt-[80%] pl-1 md:pl-3 w-[90%] md:w-[77%] cursor-pointer hover:scale-110 transition-transform duration-300'>
    {/* <img src={Logout} alt='logout'/> */}
  </div>
      </div>
    </div>
  );
}

export default SideBar;