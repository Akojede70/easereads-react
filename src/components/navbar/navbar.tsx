import React from 'react';

function Header() {
    return (
        <div className="flex items-center md:py-2 px-5 md:px-6 w-[125%] right-[25%] h-[9%] bg-[#121212] relative">
            <div className="flex-shrink-0 md:ml-[2%] lg:ml-[5.6%] w-[60px] md:w-auto ">
                {/* <img src={Logo} alt="logo" onClick={handleClick} className='cursor-pointer hover:scale-110 transition-transform duration-300'/> */}
            </div>

            <div className="relative w-[29.7%] md:w-[40%] lg:w-[29.7%] ml-[3.9%] md:ml-[7%] lg:ml-[10%] ">
  {/* Input field */}
  <input 
    type="text" 
    placeholder="Search tournament, player name, or player tag" 
    className="pl-10 pr-4 py-2 w-full bg-[#1C1C1C] focus:outline-[#1C1C1C] focus:border-[#242424] text-[11px] text-[#7E7F7F]"
  />

  {/* Search icon */}
  <span className="absolute top-[50%] left-3 transform -translate-y-1/2">
    {/* <img src={Search} alt="logo" className='w-[24px]'/> */}
  </span>
</div>


            <div className="absolute flex left-[53%] md:left-[68%] lg:left-[76%] w-[50%] md:w-[30%] items-center">
            <div className="flex items-center justify-center bg-[#1C1C1C] rounded-full h-5 md:h-10 md:w-10">
  {/* <img src={Bell} alt="notification" className="h-5 w-5" /> */}
</div>

<div className="px-2 flex gap-1 text-xs">
                    {/* <img src={Coins} alt="coin" /> */}
                    <p className='text-[#E5E4E4]'>20,000</p>
                </div>

                <div className="w-[18%] md:w-[14%] h-[10%] md:h-[14%] pb-9 lg:pb-0 pl-2 md:pl-0 md:px-1">
                    {/* <img src={Avatart} alt="dp" /> */}
                </div>

               <div className='flex flex-col'>

               <div className="w-full px-2 text-[#ffffff]">
                    <span className="font-medium text-[12px] ">Akoiola Olalekan</span>
                </div>

                <div className="w-[77%] md:w-auto px-2 mb-1 md:mb-0">
                    {/* <img src={Badge} alt="dropdown h-[20px] md:h-auto" /> */}
                </div>

               </div>
               
            </div>
        </div>
    );
}

export default Header;