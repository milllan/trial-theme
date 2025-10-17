import React from 'react';

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-between items-center w-full py-5 desktop:px-[162px] laptop:px-[80px] px-4 bg-grey-10">
      {/* Logo */}
      <div className="w-[160px] laptop:w-[113px] laptop:h-8 h-[48px]">
        <img
          src="/demo-assets-images/logo.svg"
          alt="Estatein Logo"
          className="w-full h-full"
        />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden laptop:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-6">
        {/* Home Button (Active) */}
        <button className="flex items-center gap-2.5 py-3.5 px-6 bg-grey-08 border border-grey-15 rounded-lg hover:bg-grey-15 transition-colors">
          <span className="text-white font-sans font-medium text-base laptop:text-sm leading-6">
            Home
          </span>
        </button>

        {/* Other Navigation Links */}
        <button className="text-white font-sans font-medium text-base laptop:text-sm leading-6 hover:text-purple-75 transition-colors">
          About Us
        </button>
        <button className="text-white font-sans font-medium text-base laptop:text-sm leading-6 hover:text-purple-75 transition-colors">
          Properties
        </button>
        <button className="text-white font-sans font-medium text-base laptop:text-sm leading-6 hover:text-purple-75 transition-colors">
          Services
        </button>
      </div>

      {/* Desktop Contact Us Button */}
      <button className="hidden laptop:flex items-center gap-2 py-4 laptop:py-3.5 px-6 laptop:px-5 bg-grey-08 border border-grey-15 rounded-lg hover:bg-grey-15 transition-colors">
        <span className="text-white font-sans font-medium text-base laptop:text-sm leading-6">
          Contact Us
        </span>
      </button>

      {/* Mobile Menu Button */}
      <button className="laptop:hidden flex items-center justify-center w-7 h-7 relative">
        <div className="w-[21px] h-[14px] bg-white"></div>
      </button>
    </nav>
  );
};

export default HeaderNavigation;