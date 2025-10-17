import React from 'react';

const HeaderNavigation = () => {
  return (
    <nav className="flex justify-between items-center w-full py-5 px-[162px] bg-[#1A1A1A]">
      {/* Logo */}
      <div className="w-[160px] h-[48px]">
        <img
          src="/demo-assets-images/logo.svg"
          alt="Estatein Logo"
          className="w-full h-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="absolute left-[757px] top-[22px] flex items-center gap-[30px]">
        {/* Home Button (Active) */}
        <button className="flex items-center gap-2.5 py-3.5 px-6 bg-[#141414] border border-[#262626] rounded-[10px]">
          <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
            Home
          </span>
        </button>

        {/* Other Navigation Links */}
        <button className="text-white font-sans font-medium text-[18px] leading-[27px] hover:text-[#A685FA] transition-colors">
          About Us
        </button>
        <button className="text-white font-sans font-medium text-[18px] leading-[27px] hover:text-[#A685FA] transition-colors">
          Properties
        </button>
        <button className="text-white font-sans font-medium text-[18px] leading-[27px] hover:text-[#A685FA] transition-colors">
          Services
        </button>
      </div>

      {/* Contact Us Button */}
      <button className="flex items-center gap-2 py-4 px-6 bg-[#141414] border border-[#262626] rounded-[10px] hover:bg-[#262626] transition-colors">
        <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
          Contact Us
        </span>
      </button>
    </nav>
  );
};

export default HeaderNavigation;