export default function StatisticsSection1920px() {
  return (
    <div className="flex flex-col gap-20 p-25 px-[162px] bg-[#141414] w-[1596px]" data-name="Statistics" data-node-id="60:3150">
      {/* Header */}
      <div className="flex flex-col gap-4 w-full" data-name="Header" data-node-id="60:3151">
        <h2 className="font-sans font-semibold text-[48px] leading-[57.6px] text-white text-left w-full" data-name="Heading" data-node-id="60:3152">
          Our Achievements in Numbers
        </h2>
        <p className="font-sans font-medium text-[18px] leading-[27px] text-[#999999] text-left w-full" data-name="Paragraph" data-node-id="60:3153">
          Discover the milestones that define our success and commitment to excellence in real estate.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="flex flex-row justify-between items-stretch gap-7.5 w-full" data-name="Stats Grid" data-node-id="60:3154">
        {/* Stat Card 1: Properties Sold */}
        <div className="flex flex-col items-center gap-5 p-10 bg-[#1A1A1A] rounded-xl flex-1" data-name="Stat Card" data-node-id="60:3155">
          <div className="font-sans font-bold text-[48px] leading-[57.6px] text-[#703BF7] text-center" data-name="Number" data-node-id="60:3156">
            1000+
          </div>
          <div className="font-sans font-medium text-[18px] leading-[27px] text-white text-center" data-name="Label" data-node-id="60:3157">
            Properties Sold
          </div>
        </div>

        {/* Stat Card 2: Happy Clients */}
        <div className="flex flex-col items-center gap-5 p-10 bg-[#1A1A1A] rounded-xl flex-1" data-name="Stat Card" data-node-id="60:3158">
          <div className="font-sans font-bold text-[48px] leading-[57.6px] text-[#703BF7] text-center" data-name="Number" data-node-id="60:3159">
            500+
          </div>
          <div className="font-sans font-medium text-[18px] leading-[27px] text-white text-center" data-name="Label" data-node-id="60:3160">
            Happy Clients
          </div>
        </div>

        {/* Stat Card 3: Years Experience */}
        <div className="flex flex-col items-center gap-5 p-10 bg-[#1A1A1A] rounded-xl flex-1" data-name="Stat Card" data-node-id="60:3161">
          <div className="font-sans font-bold text-[48px] leading-[57.6px] text-[#703BF7] text-center" data-name="Number" data-node-id="60:3162">
            20+
          </div>
          <div className="font-sans font-medium text-[18px] leading-[27px] text-white text-center" data-name="Label" data-node-id="60:3163">
            Years Experience
          </div>
        </div>

        {/* Stat Card 4: Client Satisfaction */}
        <div className="flex flex-col items-center gap-5 p-10 bg-[#1A1A1A] rounded-xl flex-1" data-name="Stat Card" data-node-id="60:3164">
          <div className="font-sans font-bold text-[48px] leading-[57.6px] text-[#703BF7] text-center" data-name="Number" data-node-id="60:3165">
            99%
          </div>
          <div className="font-sans font-medium text-[18px] leading-[27px] text-white text-center" data-name="Label" data-node-id="60:3166">
            Client Satisfaction
          </div>
        </div>
      </div>
    </div>
  );
}