import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#141414] pt-[162px]">
      <div className="flex gap-20">
        {/* Left Content */}
        <div className="flex-1 pl-[162px] py-0">
          <div className="flex flex-col items-end gap-6 mb-[60px]">
            {/* Main Heading */}
            <h1 className="text-white font-sans font-semibold text-[60px] leading-[72px] text-left max-w-[600px]">
              Discover Your Dream Property with Estatein
            </h1>

            {/* Description */}
            <p className="text-[#999999] font-sans font-medium text-[18px] leading-[27px] text-left max-w-[500px]">
              Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
            </p>

            {/* Animated Discovery Badge */}
            <div className="absolute left-[742px] top-0 w-[175px] h-[175px] bg-[#1A1A1A] border border-[#262626] rounded-full p-12">
              <div className="relative w-full h-full">
                {/* Animated Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#703BF7] font-sans font-semibold text-[15px] leading-[18px] whitespace-nowrap">
                    ✨Discover_Your_Dream_Property
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-5 mb-5">
            <button className="flex items-center gap-2 py-4.5 px-6 border border-[#262626] rounded-[10px] hover:bg-[#1A1A1A] transition-colors">
              <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
                Learn More
              </span>
            </button>
            <button className="flex items-center gap-2 py-4.5 px-6 bg-[#703BF7] rounded-[10px] hover:bg-[#A685FA] transition-colors">
              <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
                Browse Properties
              </span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-5">
            <div className="flex flex-col gap-0.5 p-4 bg-[#1A1A1A] border border-[#262626] rounded-[12px]">
              <div className="text-white font-sans font-bold text-[40px] leading-[60px]">
                200+
              </div>
              <div className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
                Happy Customers
              </div>
            </div>
            <div className="flex flex-col gap-0.5 p-4 bg-[#1A1A1A] border border-[#262626] rounded-[12px]">
              <div className="text-white font-sans font-bold text-[40px] leading-[60px]">
                10k+
              </div>
              <div className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
                Properties For Clients
              </div>
            </div>
            <div className="flex flex-col gap-0.5 p-4 bg-[#1A1A1A] border border-[#262626] rounded-[12px]">
              <div className="text-white font-sans font-bold text-[40px] leading-[60px]">
                16+
              </div>
              <div className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
                Years of Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 h-[814px] bg-[#1A1A1A]">
          <img
            src="/demo-assets-images/hero-image-right.svg"
            alt="Hero illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;