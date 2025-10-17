export default function CTA1440px() {
  return (
    <div className="bg-[#1a1a1a] relative w-full overflow-hidden" data-name="CTA" data-node-id="181:358">
      {/* Abstract Design Background */}
      <div className="absolute right-0 top-0 opacity-20" data-name="Abstract Design" data-node-id="181:359">
        <div className="w-[569px] h-[310px] bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute left-0 top-0 opacity-20" data-name="Abstract Design" data-node-id="181:534">
        <div className="w-[474px] h-[258px] bg-gradient-to-l from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-20 py-15 flex items-center justify-between">
        <div className="flex-1 max-w-3xl" data-name="Text Container" data-node-id="181:709">
          <h2 className="font-sans font-semibold text-[38px] leading-[1.5] text-white mb-6" data-node-id="181:710">
            Find Your Dream Property Today
          </h2>
          <p className="font-sans font-medium text-[18px] leading-[1.5] text-[#999999] mb-0" data-node-id="181:711">
            Start your journey with Estatein and discover the perfect property that meets your needs and exceeds your expectations.
          </p>
        </div>

        <button className="bg-[#703bf7] hover:bg-[#8049ff] transition-colors px-5 py-3.5 rounded-lg flex items-center gap-2 shrink-0 ml-10" data-name="Button" data-node-id="181:712">
          <span className="font-sans font-medium text-sm text-white" data-node-id="181:713">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
}