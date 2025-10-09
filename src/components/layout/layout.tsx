import React, { useState } from "react";
import SideBar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex fixed w-full h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SideBar />
      </div>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}>
        <SideBar onMobileClose={closeSidebar} />
      </div>

      {/* Main Content */}
      <div className="w-full flex-1">
        <Navbar onMenuToggle={toggleSidebar} />
        <div className="w-full h-screen bg-creamWhite overflow-y-auto scrollbar-tiny">
          {children} 
        </div>
      </div>
    </div>
  );
}

export default Layout;