export default function ServicesSection1920px() {
  return (
    <div className="flex flex-col gap-15 p-25 px-[162px] bg-[#141414] w-[1596px]" data-name="Services" data-node-id="60:3200">
      {/* Header */}
      <div className="flex flex-col gap-4 w-full" data-name="Header" data-node-id="60:3201">
        <h2 className="font-sans font-semibold text-[48px] leading-[57.6px] text-white text-left w-full" data-name="Heading" data-node-id="60:3202">
          Our Services
        </h2>
        <p className="font-sans font-medium text-[18px] leading-[27px] text-[#999999] text-left w-full" data-name="Paragraph" data-node-id="60:3203">
          Comprehensive real estate solutions tailored to meet your unique needs and exceed your expectations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="flex flex-row justify-between items-stretch gap-7.5 w-full" data-name="Services Grid" data-node-id="60:3204">
        {/* Service 1: Find Your Dream Home */}
        <div className="flex flex-col items-center gap-6 p-10 px-7.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex-1" data-name="Service Card" data-node-id="60:3205">
          {/* Icon Container with gradient border */}
          <div className="flex flex-row items-center gap-3 p-3 border-[2px] rounded-full bg-gradient-to-r from-[#A685FA] via-transparent to-[#A685FA]" data-name="Icon Container" data-node-id="60:3206">
            <div className="w-6 h-6 bg-[#703BF7] rounded-full"></div>
          </div>

          <h3 className="font-sans font-semibold text-[20px] leading-[30px] text-white text-center w-full" data-name="Text" data-node-id="60:3207">
            Find Your Dream Home
          </h3>

          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#999999] text-center w-full" data-name="Description" data-node-id="60:3208">
            Personalized property search to find your perfect home match.
          </p>
        </div>

        {/* Service 2: Unlock Property Value */}
        <div className="flex flex-col items-center gap-6 p-10 px-7.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex-1" data-name="Service Card" data-node-id="60:3209">
          {/* Icon Container with gradient border */}
          <div className="flex flex-row items-center gap-3 p-3 border-[2px] rounded-full bg-gradient-to-r from-[#A685FA] via-transparent to-[#A685FA]" data-name="Icon Container" data-node-id="60:3210">
            <div className="w-6 h-6 bg-[#703BF7] rounded-full"></div>
          </div>

          <h3 className="font-sans font-semibold text-[20px] leading-[30px] text-white text-center w-full" data-name="Text" data-node-id="60:3211">
            Unlock Property Value
          </h3>

          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#999999] text-center w-full" data-name="Description" data-node-id="60:3212">
            Expert property valuation and investment analysis services.
          </p>
        </div>

        {/* Service 3: Property Management */}
        <div className="flex flex-col items-center gap-6 p-10 px-7.5 bg-[#1A1A1A] border border-[#262626] rounded-xl flex-1" data-name="Service Card" data-node-id="60:3213">
          {/* Icon Container with gradient border */}
          <div className="flex flex-row items-center gap-3 p-3 border-[2px] rounded-full bg-gradient-to-r from-[#A685FA] via-transparent to-[#A685FA]" data-name="Icon Container" data-node-id="60:3214">
            <div className="w-6 h-6 bg-[#703BF7] rounded-full"></div>
          </div>

          <h3 className="font-sans font-semibold text-[20px] leading-[30px] text-white text-center w-full" data-name="Text" data-node-id="60:3215">
            Property Management
          </h3>

          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#999999] text-center w-full" data-name="Description" data-node-id="60:3216">
            Comprehensive management services for your investment properties.
          </p>
        </div>
      </div>
    </div>
  );
}