import React from "react";
import SideBar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";

interface LayoutProps {
  name?: string;
  children: React.ReactNode;
}

function Layout({ name = "Home", children }: LayoutProps) {
  return (
    <div className="flex fixed w-full h-screen">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <div className="w-full h-screen pl-[4.8%] pt-[2%] bg-creamWhite overflow-y-scroll scrollbar-tiny">
        <h1 className="text-white text-xl mb-4">{name}</h1>
          {children} 
        </div>
      </div>
    </div>
  );
}

export default Layout;