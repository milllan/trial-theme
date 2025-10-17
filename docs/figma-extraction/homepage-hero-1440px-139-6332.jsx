const imgIcon = "http://localhost:3845/assets/cf4cfc3eab2a9b19e1f32200a4798ee22d60e405.svg";

export default function HeroSection1440px() {
  return (
    <div className="flex flex-col gap-12 items-start justify-center pl-20 pr-0 py-0 relative w-full" data-name="Container" data-node-id="139:6332">
      {/* Hero Content */}
      <div className="flex flex-col gap-5 items-end relative shrink-0 w-full" data-name="Text Container" data-node-id="139:6333">
        <h1 className="font-sans font-semibold leading-[1.2] relative shrink-0 text-[46px] text-white w-full" data-node-id="139:6334">
          Discover Your Dream Property with Estatein
        </h1>
        <p className="font-sans font-medium leading-6 relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6335">
          Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
        </p>

        {/* Circular Badge */}
        <div className="absolute bg-[#141414] border-[1.173px] border-neutral-800 rounded-[117.273px] w-32 h-32 right-[-124px] top-[-3px]" data-name="Sub Container" data-node-id="139:6336">
          <div className="relative flex items-center justify-center w-full h-full rounded-[117.273px] overflow-hidden border-[1.173px] border-neutral-800">
            <div className="absolute bg-[#1a1a1a] border-[1.173px] border-neutral-800 rounded-[65.673px] w-[58.636px] h-[58.636px]" data-name="Shape" data-node-id="139:6337" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6" data-name="Icon" data-node-id="139:6338">
              <img alt="Estatein logo icon" className="block max-w-none w-full h-full" src={imgIcon} />
            </div>
            {/* Circular text effect - simplified version */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-28 h-28 animate-spin-slow" viewBox="0 0 128 128">
                <defs>
                  <path id="circle" d="M64,8 a56,56 0 0,1 0,112 a56,56 0 0,1 0,-112" />
                </defs>
                <text className="fill-white text-xs font-sans font-semibold">
                  <textPath href="#circle" startOffset="25%">
                    Discover Your Dream Property ✨
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 items-center relative shrink-0 w-full" data-name="Buttons Container" data-node-id="139:6371">
        <button className="border border-neutral-800 flex gap-2 items-center justify-center px-5 py-3.5 relative rounded-lg shrink-0 hover:bg-[#141414] transition-colors" data-name="Button" data-node-id="139:6372">
          <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6373">
            Learn More
          </span>
        </button>
        <button className="bg-[#703bf7] flex gap-2 items-center justify-center px-5 py-3.5 relative rounded-lg shrink-0 hover:bg-[#8049ff] transition-colors" data-name="Button" data-node-id="139:6374">
          <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6375">
            Browse Properties
          </span>
        </button>
      </div>

      {/* Statistics */}
      <div className="flex gap-4 items-start relative shrink-0 w-full" data-name="Sub Container" data-node-id="139:6376">
        {/* Happy Customers */}
        <div className="flex-initial  bg-[#1a1a1a] border border-neutral-800 rounded-[10px] flex flex-col gap-0.5 grow items-start leading-6 min-h-px min-w-0 px-5 py-3.5 relative shrink-0" data-name="Text Container" data-node-id="139:6377">
          <p className="font-sans font-bold relative shrink-0 text-[30px] text-white w-full" data-node-id="139:6378">
            200+
          </p>
          <p className="font-sans font-medium relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6379">
            Happy Customers
          </p>
        </div>

        {/* Properties For Clients */}
        <div className="flex-0 bg-[#1a1a1a] border border-neutral-800 rounded-[10px] flex flex-col gap-0.5 grow items-start leading-6 min-h-px min-w-0 px-5 py-3.5 relative shrink-0" data-name="Text Container" data-node-id="139:6380">
          <p className="font-sans font-bold relative shrink-0 text-[30px] text-white w-full" data-node-id="139:6381">
            10k+
          </p>
          <p className="font-sans font-medium relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6382">
            Properties For Clients
          </p>
        </div>

        {/* Years of Experience */}
        <div className="flex-0 bg-[#1a1a1a] border border-neutral-800 rounded-[10px] flex flex-col gap-0.5 grow items-start leading-6 min-h-px min-w-0 px-5 py-3.5 relative shrink-0" data-name="Text Container" data-node-id="139:6383">
          <p className="font-sans font-bold relative shrink-0 text-[30px] text-white w-full" data-node-id="139:6384">
            16+
          </p>
          <p className="font-sans font-medium relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6385">
            Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
}