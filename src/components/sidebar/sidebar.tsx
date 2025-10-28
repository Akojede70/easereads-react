/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import paths from "./data";
import { SidebarIcon, ArrowUp, ArrowDown, CloseIcon } from "../../assets/icon";
import { clearCredentials } from "../../redux/auth-slice";
import { useDispatch } from "react-redux";

interface SideBarProps {
  onMobileClose?: () => void;
}


function SideBar({ onMobileClose }: SideBarProps) {
   const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

  const toggleSubmenu = (id: number) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onMobileClose?.();
  };

  

  const isActivePath = (path: string) => location.pathname === path;

  const isSubmenuActive = (submenu: { path: string }[] = []) => {
    return submenu.some(item => isActivePath(item.path));
  };

 const handleLogOut = () => {
    dispatch(clearCredentials()); 
    localStorage.clear()
    console.log("clear")
 }

const handleItemClick = (item: any) => {
  console.log('Item clicked:', item.name);
  console.log('Item has onClick?', !!item.onClick);
  
  if (item.name.toString().toLowerCase() === 'logout') {
    console.log('Logout flow started');
    handleLogOut();
    onMobileClose?.();
  } else if (item.onClick) {
    console.log('Calling item onClick');
    item.onClick();
    onMobileClose?.();
  } else if (item.hasSubmenu) {
    console.log('Toggling submenu');
    toggleSubmenu(item.id);
  } else if (item.path) {
    console.log('Navigating to:', item.path);
    handleNavigation(item.path);
  }
};

  return (
    <div className="w-80 md:w-56 lg:w-60 h-screen bg-primaryWhite border-r border-creamWhite overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200 md:border-none">
        <div className="flex items-center gap-4">
          <SidebarIcon />
          <h2 className="text-xl font-bold text-primaryBlue">Easereads</h2>
        </div>
        
        {onMobileClose && (
          <button 
            onClick={onMobileClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors md:hidden"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        )}
      </div>
     
      {/* Navigation Items */}
      <div className="pt-8 flex flex-col gap-6 px-4">
        {paths.map((item: any) => {
          const isActive = isActivePath(item.path);
          const isSubmenuItemActive = isSubmenuActive(item.submenu);
          const isOpen = openSubmenus[item.id];
          const isItemActive = isActive || isSubmenuItemActive;
          
          return (
            <div key={item.id}>
              <div
                className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${
                  isItemActive 
                    ? 'bg-primaryBlue text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                // onClick={() => { item.hasSubmenu ? toggleSubmenu(item.id) : handleNavigation(item.path);}}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-medium">
                    {item.name}
                  </span>
                </div>
                
                {item.hasSubmenu && (
                  <div className={isItemActive ? "text-white" : "text-gray-400"}>
                    {isOpen ? <ArrowUp /> : <ArrowDown />}
                  </div>
                )}
              </div>

              {/* Submenu Items */}
              {item.hasSubmenu && isOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  {item.submenu?.map((subItem:any) => {
                    const isSubActive = isActivePath(subItem.path);
                    return (
                      <div
                        key={subItem.id}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                          isSubActive 
                            ? 'bg-blue-50 text-primaryBlue font-medium' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleNavigation(subItem.path)}
                      //   onClick={() => {
                      //   if (subItem.name.toString().toLowerCase() === 'logout') {
                      //     handleLogOut();
                      //   } else  {
                      //     handleNavigation(subItem.path);
                      //   }
                      // }}
                      >
                        <span className="text-sm">
                          {subItem.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;