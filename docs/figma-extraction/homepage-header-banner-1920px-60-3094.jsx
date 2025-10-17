import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="flex justify-center items-center w-full py-[18px] desktop:px-[160px] laptop:px-[80px] px-4 bg-grey-10 border-b border-grey-15 relative">
      {/* Abstract Design Background */}
      <div className="absolute top-[-610px] left-0 w-[1920px] laptop:w-[1566px] laptop:top-[-523px] h-[1282px] laptop:h-[1046px]">
        <img
          src="/demo-assets-images/abstract-design-header.svg"
          alt="Abstract design"
          className="w-full h-full mix-blend-color-dodge"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center gap-2.5 laptop:gap-1.5 relative z-10">
        <span className="text-white font-sans font-medium text-base laptop:text-sm leading-6 text-center">
          ✨Discover Your Dream Property with Estatein
        </span>
        <button className="text-white font-sans font-medium text-base laptop:text-sm leading-6 text-center hover:opacity-80 transition-opacity underline laptop:no-underline">
          Learn More
        </button>
      </div>

      {/* Close Button */}
      <button className="absolute right-[15px] laptop:right-8 top-[15px] laptop:top-1/2 laptop:transform laptop:-translate-y-1/2 p-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default HeaderBanner;