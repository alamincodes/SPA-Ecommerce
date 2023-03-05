import React from "react";
import Logo from "../images/Logo.svg";
const Header = () => {
  return (
    <nav className="bg-[#1C2B35]">
      <div className="max-w-7xl mx-auto h-[80px] flex items-center justify-between">
        <img src={Logo} className="w-[140x] h-[42px]" alt="" />

        <div className="text-white space-x-4">
          <a className="hover:text-orange-600" href="/order">
            Order
          </a>
          <a className="hover:text-orange-600" href="/review">
            Order Review
          </a>
          <a className="hover:text-orange-600" href="/inventory">
            Manage Inventory
          </a>
          <a className="hover:text-orange-600" href="/login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
