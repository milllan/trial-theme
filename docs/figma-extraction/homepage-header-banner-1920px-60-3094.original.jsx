import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="flex justify-center items-center w-full py-[18px] px-[160px] bg-[#1A1A1A] border-b border-[#262626] relative">
      {/* Abstract Design Background */}
      <div className="absolute top-[-610px] left-0 w-[1920px] h-[1282px]">
        <img
          src="/demo-assets-images/abstract-design-header.svg"
          alt="Abstract design"
          className="w-full h-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center gap-2.5 relative z-10">
        <span className="text-white font-sans font-medium text-[18px] leading-[27px] text-center">
          ✨Discover Your Dream Property with Estatein
        </span>
        <button className="text-white font-sans font-medium text-[18px] leading-[27px] text-center hover:opacity-80 transition-opacity">
          Learn More
        </button>
      </div>

      {/* Close Button */}
      <button className="absolute right-[15px] top-[15px] p-1 bg-white/10 rounded-[75px] hover:bg-white/20 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default HeaderBanner;