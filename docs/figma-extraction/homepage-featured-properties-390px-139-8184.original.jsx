export default function FeaturedPropertiesSection390px() {
  return (
    <div className="flex flex-col items-stretch gap-7.5 relative w-full" data-name="Sub Container" data-node-id="139:8184">
      {/* Property Card */}
      <div className="flex flex-col items-stretch gap-4 p-6 relative bg-[#141414] border border-[#262626] rounded-xl w-full" data-name="Card" data-node-id="139:8306">
        {/* Property Image */}
        <div
          className="w-full h-[210px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url(https://via.placeholder.com/350x210/1A1A1A/FFFFFF?text=Property+Image)" }}
          data-name="Image"
          data-node-id="139:8307"
        ></div>

        {/* Property Details Container */}
        <div className="flex flex-col items-stretch gap-5 relative w-full" data-name="Container" data-node-id="139:8308">
          {/* Title and Description */}
          <div className="flex flex-col items-stretch gap-0.5 relative w-full" data-name="Text Container" data-node-id="139:8309">
            <h3 className="font-sans font-semibold text-[18px] leading-[27px] text-white text-left w-full" data-name="Heading" data-node-id="139:8310">
              Rustic Retreat Cottage
            </h3>
            <p className="font-sans font-medium text-[14px] leading-[21px] text-[#999999] text-left w-full" data-name="Paragraph" data-node-id="139:8311">
              An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More
            </p>
          </div>

          {/* Property Tags */}
          <div className="flex flex-row flex-wrap items-stretch gap-1.5 relative w-full" data-name="Sub Container" data-node-id="139:8312">
            {/* 4-Bedroom Tag */}
            <div className="flex flex-row items-center flex-wrap gap-1 p-1.5 px-3.5 relative bg-[#1A1A1A] border border-[#262626] rounded-full" data-name="Container" data-node-id="139:8313">
              <div className="w-5 h-5 relative" data-name="Icon" data-node-id="139:8314">
                {/* Bedroom icon placeholder */}
                <div className="w-5 h-5 bg-[#703BF7] rounded-full"></div>
              </div>
              <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8318">
                4-Bedroom
              </span>
            </div>

            {/* 3-Bathroom Tag */}
            <div className="flex flex-row items-center flex-wrap gap-1 p-1.5 px-3.5 relative bg-[#1A1A1A] border border-[#262626] rounded-full" data-name="Container" data-node-id="139:8319">
              <div className="w-5 h-5 relative" data-name="Icon" data-node-id="139:8320">
                {/* Bathroom icon placeholder */}
                <div className="w-5 h-5 bg-[#703BF7] rounded-full"></div>
              </div>
              <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8327">
                3-Bathroom
              </span>
            </div>

            {/* Villa Tag */}
            <div className="flex flex-row items-center flex-wrap gap-1 p-1.5 px-3.5 relative bg-[#1A1A1A] border border-[#262626] rounded-full" data-name="Container" data-node-id="139:8328">
              <div className="w-5 h-5 relative" data-name="Icon" data-node-id="139:8329">
                {/* Villa icon placeholder */}
                <div className="w-5 h-5 bg-[#703BF7] rounded-full"></div>
              </div>
              <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8336">
                Villa
              </span>
            </div>
          </div>

          {/* Price and Button Container */}
          <div className="flex flex-row items-end justify-between gap-7.5 relative w-full" data-name="Sub Container" data-node-id="139:8337">
            {/* Price */}
            <div className="flex flex-col relative" data-name="Text Container" data-node-id="139:8338">
              <span className="font-sans font-medium text-[14px] leading-[21px] text-[#999999]" data-name="Heading" data-node-id="139:8339">
                Price
              </span>
              <span className="font-sans font-semibold text-[18px] leading-[27px] text-white" data-name="Paragraph" data-node-id="139:8340">
                $550,000
              </span>
            </div>

            {/* View Details Button */}
            <div className="flex flex-row justify-center items-center gap-2 p-3.5 px-5 relative bg-[#703BF7] rounded-lg flex-1" data-name="Button" data-node-id="139:8341">
              <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8342">
                View Property Details
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="flex flex-row justify-between items-center gap-[1123px] pt-4 relative w-full border-t border-[#262626]" data-name="Container" data-node-id="139:8481">
        {/* View All Properties Button */}
        <div className="flex flex-row justify-center items-center gap-2 p-3.5 px-5 relative bg-[#1A1A1A] border border-[#262626] rounded-lg h-full" data-name="Button" data-node-id="139:8482">
          <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8483">
            View All Properties
          </span>
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center gap-2.5 relative" data-name="Buttons Container" data-node-id="139:8484">
          {/* Previous Button */}
          <div className="flex flex-row gap-2.5 p-2.5 relative border border-[#262626] rounded-full" data-name="Button" data-node-id="139:8485">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Page Number */}
          <span className="font-sans font-medium text-[14px] leading-[21px] text-[#999999]" data-name="Text" data-node-id="139:8488">
            01 of 60
          </span>

          {/* Next Button */}
          <div className="flex flex-row gap-2.5 p-2.5 relative bg-[#1A1A1A] border border-[#262626] rounded-full" data-name="Button" data-node-id="139:8489">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}