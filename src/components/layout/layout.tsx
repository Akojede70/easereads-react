import React from "react";
import SideBar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

interface LayoutProps {
  name?: string;
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex fixed w-full h-screen">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <div className="w-full h-screen pl-[2.9%] pt-[2%] bg-creamWhite overflow-y-scroll scrollbar-tiny">
          {children} 
        </div>
      </div>
    </div>
  );
}

export default Layout;