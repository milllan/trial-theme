const imgSymbol = "http://localhost:3845/assets/fad212c00a28ad3446937aff0b073f9f085b2444.svg";
const imgText = "http://localhost:3845/assets/c3a1c2c82b36a1e2794219432fdf0c422f5dcf54.svg";

export default function HeaderNavigation1440px() {
  return (
    <div className="bg-[#1a1a1a] flex items-center justify-between px-20 py-3.5 relative w-full" data-name="Navigation Bar" data-node-id="139:6306">
      {/* Logo */}
      <div className="relative w-[113px] h-8 shrink-0" data-name="Logo" data-node-id="139:6307">
        <div className="absolute left-0 right-[70%] top-0 bottom-0" data-name="Symbol" data-node-id="139:6308">
          <img alt="Estatein Logo" className="block max-w-none w-full h-full" src={imgSymbol} />
        </div>
        <div className="absolute left-[36.4%] right-0 top-[30.47%] bottom-[26.77%]" data-name="Text" data-node-id="139:6313">
          <img alt="Estatein" className="block max-w-none w-full h-full" src={imgText} />
        </div>
      </div>

      {/* Center Navigation */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-6" data-name="Buttons Container" data-node-id="139:6324">
        {/* Home Button with background */}
        <div className="bg-[#141414] border border-neutral-800 rounded-lg flex items-center gap-2.5 px-5 py-3 relative shrink-0 hover:bg-[#262626] transition-colors cursor-pointer" data-name="Button" data-node-id="139:6325">
          <p className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6326">
            Home
          </p>
        </div>

        {/* Navigation Links */}
        <p className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap hover:text-purple-400 transition-colors cursor-pointer" data-node-id="139:6327">
          About Us
        </p>

        <p className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap hover:text-purple-400 transition-colors cursor-pointer" data-node-id="139:6328">
          Properties
        </p>

        <p className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap hover:text-purple-400 transition-colors cursor-pointer" data-node-id="139:6329">
          Services
        </p>
      </div>

      {/* Contact Us Button */}
      <div className="bg-[#141414] border border-neutral-800 rounded-lg flex items-center gap-2 px-5 py-3.5 relative shrink-0 hover:bg-[#262626] transition-colors cursor-pointer" data-name="Button" data-node-id="139:6322">
        <p className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6323">
          Contact Us
        </p>
      </div>
    </div>
  );
}