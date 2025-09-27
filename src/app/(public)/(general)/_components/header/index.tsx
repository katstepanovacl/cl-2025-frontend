import React from "react";
import Sidebar from "./sidebar";
import HeaderLogo from "./header-logo";
import MidNavigation from "./mid-navigation";
import AuthNavigation from "./auth-navigation";
const Header = () => {
  return (
    <div className="flex w-full p-4 items-center justify-between">
      <HeaderLogo />
      <div className="hidden lg:block">
        <MidNavigation />
      </div>
      <AuthNavigation />
      <Sidebar />
    </div>
  );
};

export default Header;
