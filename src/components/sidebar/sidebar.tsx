import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import paths from "./data";
import { SidebarIcon, ArrowUp, ArrowDown } from "../../assets/icon";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (id: number) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Check if a path is active
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Check if any submenu item is active for a parent menu
  const isSubmenuActive = (submenu: { path: string }[] = []) => {
    return submenu.some(item => isActivePath(item.path));
  };

  return (
    <div className="w-[25%] md:w-[23%] lg:w-[14.5%] h-screen flex-shrink-0 bg-primaryWhite border border-creamWhite overflow-y-auto">
      <div className='flex justify-center ml-3 items-center gap-[20px] mt-[25px]'>
        <h2 className='text-[14px] md:text-2xl font-bold text-primaryBlue'>Easereads</h2>
        <SidebarIcon />
      </div>
     
      <div className="pt-6 md:pt-10 lg:pl-5 flex flex-col gap-4 md:gap-[30px]">
        {paths.map((item) => {
          const isActive = isActivePath(item.path);
          const isSubmenuItemActive = isSubmenuActive(item.submenu);
          const isOpen = openSubmenus[item.id];
          
          return (
            <div key={item.id}>
              <div
                className={`flex justify-between items-center h-8 pl-[7%] md:pl-[8%] lg:pl-[10%] cursor-pointer text-capitalize w-full lg:w-[75%] hover:bg-[#f7f7f7]
                  ${(isActive || isSubmenuItemActive) ? 'bg-primaryBlue h-10 w-[2%] lg:w-[75%] rounded-[10px] border-r-[5px] border-[#ff9f23]' : 'text-[#7E7F7F]'}`}
                onClick={() => {
                  if (item.hasSubmenu) {
                    toggleSubmenu(item.id);
                  } else {
                    navigate(item.path);
                  }
                }}
              >
                <div className="flex gap-[15px] items-center">
                  <div className="hidden md:block lg:mr-2">{item.icon}</div>
                  <p
                    className={`text-xs md:text-base font-normal leading-5 ${
                      (isActive || isSubmenuItemActive)
                        ? "text-white"
                        : "text-[#7E7F7F] hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
                
                {item.hasSubmenu && (
                  <div className="pr-3">
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                  </div>
                )}
              </div>

              {/* Submenu items */}
              {item.hasSubmenu && isOpen && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.submenu?.map((subItem) => {
                    const isSubActive = isActivePath(subItem.path);
                    return (
                      <div
                        key={subItem.id}
                        className={`flex items-center h-8 pl-4 cursor-pointer rounded-md ${
                          isSubActive 
                            ? 'bg-blue-100 text-primaryBlue mr-[30px]' 
                            : 'text-[#7E7F7F] hover:text-gray-900'
                        }`}
                        onClick={() => navigate(subItem.path)}
                      >
                        <p className="text-xs md:text-sm font-normal">
                          {subItem.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        
        <div className="mt-auto mb-4 pl-1 md:pl-3 w-[90%] md:w-[77%] cursor-pointer hover:scale-110 transition-transform duration-300">
          {/* Logout or other bottom content */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;