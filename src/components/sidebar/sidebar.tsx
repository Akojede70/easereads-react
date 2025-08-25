import React from 'react';
import { useNavigate } from 'react-router';
import paths from './data';

function SideBar()  {
  const navigate = useNavigate();

  return (
    <div className="w-[17.5%] h-screen flex-shrink-0 bg-primaryWhite">
      <div className="pt-20 md:pt-32 lg:pt-20 lg:pl-5 flex flex-col gap-4 md:gap-2.5">
        {paths.map((x) => (
          <div key={x.id}>
            <div
              className={`flex items-center h-8 lg:pl-[10%] cursor-pointer text-capitalize w-full  lg:w-[75%] hover:bg-[#5A5A5A] hover:text-[#ffffff]
                ${window.location.pathname === x.path ? 'bg-[#3B3B3B] h-10 md:w-75%' : 'text-[#7E7F7F]'}`}
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