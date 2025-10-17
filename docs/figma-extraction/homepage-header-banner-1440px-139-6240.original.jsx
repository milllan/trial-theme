const imgGroup = "http://localhost:3845/assets/95f19d9a25fa0edecdc65b0bbb631c7f00861666.svg";
const imgIcon = "http://localhost:3845/assets/abb729c562848853e30a17440ecf654904f5d918.svg";

export default function HeaderBanner1440px() {
  return (
    <div className="bg-[#1a1a1a] border-b border-neutral-800 relative w-full" data-name="Banner" data-node-id="139:6240">
      <div className="flex items-center justify-center gap-1.5 px-20 py-3.5 relative w-full">
        {/* Abstract Design Background */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1566px] h-[1046px] overflow-hidden" data-name="Abstract Design" data-node-id="139:6241">
          <div className="absolute inset-0 mix-blend-color-dodge" data-name="Group" data-node-id="139:6242">
            <div className="absolute inset-0 mix-blend-color-dodge" data-name="BACKGROUND 2" data-node-id="139:6243">
              <div className="absolute inset-0 mix-blend-color-dodge" data-name="Group" data-node-id="139:6244">
                <div className="absolute inset-0" data-name="Group" data-node-id="139:6245">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Text */}
        <p className="font-sans font-medium text-sm leading-6 relative text-white text-center whitespace-nowrap z-10" data-node-id="139:6301">
          ✨Discover Your Dream Property with Estatein
        </p>

        {/* Learn More Link */}
        <p className="font-sans font-medium text-sm leading-6 relative text-white text-center underline whitespace-nowrap z-10 cursor-pointer hover:text-gray-200 transition-colors" data-node-id="139:6302">
          Learn More
        </p>

        {/* Close Button */}
        <button type="button" onClick={() => {/* Add close handler */}}
  aria-label="Close banner" className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors p-1 rounded-full z-10" data-name="Button" data-node-id="139:6303">
          <div className="w-4.5 h-4.5 relative" data-name="Icon" data-node-id="139:6304">
            <img alt="Close" className="block max-w-none w-full h-full" src={imgIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}