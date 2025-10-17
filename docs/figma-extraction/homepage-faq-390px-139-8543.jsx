export default function FAQSection390px() {
  return (
    <div className="flex flex-col items-stretch gap-[30px] relative w-full max-w-[358px] mx-auto px-4" data-name="Sub Container" data-node-id="139:8543">
      {/* FAQ Card */}
      <div className="flex flex-col items-stretch gap-[20px] p-[30px] relative bg-grey-08 border border-grey-15 rounded-urbanist-md w-full" data-name="Card" data-node-id="139:8575">
        {/* FAQ Question */}
        <h3 className="font-urbanist font-urbanist-600 text-[18px] leading-[27px] text-white text-left w-full" data-name="Heading" data-node-id="139:8576">
          How do I search for properties on Estatein?
        </h3>

        {/* FAQ Answer */}
        <p className="font-urbanist font-urbanist-500 text-[14px] leading-[21px] text-grey-60 text-left w-full" data-name="Paragraph" data-node-id="139:8577">
          Learn how to use our user-friendly search tools to find properties that match your criteria.
        </p>

        {/* Read More Button */}
        <div className="flex flex-row justify-center items-center gap-[10px] py-[14px] px-[20px] relative bg-grey-10 border border-grey-15 rounded-urbanist-sm w-full hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:8578">
          <span className="font-urbanist font-urbanist-500 text-[14px] leading-[18px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8579">
            Read More
          </span>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="flex flex-row justify-between items-center gap-[1123px] pt-4 relative w-full border-t border-grey-15" data-name="Container" data-node-id="139:8564">
        {/* View All FAQs Button */}
        <div className="flex flex-row justify-center items-center gap-2 py-[14px] px-[20px] relative bg-grey-10 border border-grey-15 rounded-urbanist-sm h-full hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:8565">
          <span className="font-urbanist font-urbanist-500 text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8566">
            View All FAQ's
          </span>
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center gap-[10px] relative" data-name="Buttons Container" data-node-id="139:8567">
          {/* Previous Button */}
          <div className="flex flex-row gap-[10px] p-[10px] relative border border-grey-15 rounded-full hover:bg-grey-10 transition-colors" data-name="Button" data-node-id="139:8568">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-grey-30"/>
            </svg>
          </div>

          {/* Page Number */}
          <span className="font-urbanist font-urbanist-500 text-[14px] leading-[21px] text-grey-60" data-name="Text" data-node-id="139:8571">
            01 of 10
          </span>

          {/* Next Button */}
          <div className="flex flex-row gap-[10px] p-[10px] relative bg-grey-10 border border-grey-15 rounded-full hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:8572">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}