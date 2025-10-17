export default function HeaderBanner390px() {
  return (
    <div className="bg-grey-10 border-b border-grey-15 border-solid flex items-center justify-between px-4 py-10 gap-1.5 relative w-full" data-name="Banner" data-node-id="139:7837">
      {/* Abstract Design Background */}
      <div className="absolute -left-[588px] -top-[485px] w-[1566px] h-[1046px]" data-name="Abstract Design" data-node-id="139:7838">
        <div className="w-full h-full bg-white opacity-100"></div>
      </div>

      {/* Text Content */}
      <div className="text-center">
        <p className="font-sans font-medium text-xs leading-[18px] text-white whitespace-nowrap" data-node-id="139:7898">
          ✨Discover Your Dream Property with Estatein
        </p>
      </div>

      {/* Learn More Button */}
      <div className="text-center">
        <p className="font-sans font-medium text-xs leading-[18px] text-white whitespace-nowrap cursor-pointer hover:text-purple-60 transition-colors" data-node-id="139:7899">
          Learn More
        </p>
      </div>

      {/* Arrow Button */}
      <div className="absolute right-0 top-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center gap-2.5 p-1" data-name="Button" data-node-id="139:7900">
        <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.25 9L12.75 9M12.75 9L5.25 9M12.75 9H5.25" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}