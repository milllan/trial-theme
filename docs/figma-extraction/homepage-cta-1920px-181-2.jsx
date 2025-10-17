import React from 'react';

const CTASection = () => {
  return (
    <section className="flex items-center w-full py-[100px] px-[162px] bg-[#141414] border-t border-[#262626] relative overflow-hidden">
      {/* Abstract Background Design - Left */}
      <div className="absolute left-[-20px] bottom-[59px]">
        <div className="w-[566px] h-[308px] relative">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Abstract Background Design - Right */}
      <div className="absolute right-[1287px] top-[36px]">
        <div className="w-[725px] h-[394px] relative">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 725 394" className="w-full h-full">
              <defs>
                <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#703BF7" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#703BF7" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M0,197 C161,89 322,0 483,0 C644,0 725,197 725,197 C725,197 644,305 483,305 C322,305 161,394 0,394 Z"
                fill="url(#cta-gradient)"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[600px]">
        <div className="flex flex-col gap-3.5 mb-10">
          <h2 className="text-white font-sans font-semibold text-[48px] leading-[72px]">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        <button className="flex items-center gap-2 py-4.5 px-6 bg-[#703BF7] rounded-[10px] hover:bg-[#A685FA] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#703BF7]/30">
          <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
            Explore Properties
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px]">
        <div className="w-full h-full bg-gradient-to-br from-[#703BF7]/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px]">
        <div className="w-full h-full bg-gradient-to-tr from-[#703BF7]/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTASection;