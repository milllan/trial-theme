export default function TestimonialsSection390px() {
  return (
    <div className="flex flex-col items-stretch gap-7.5 relative w-full" data-name="Sub Container" data-node-id="139:8374">
      {/* Testimonial Card */}
      <div className="flex flex-col items-stretch gap-6 p-7.5 relative bg-[#141414] border border-[#262626] rounded-lg w-full" data-name="Card" data-node-id="139:8421">
        {/* Star Rating */}
        <div className="flex flex-row gap-2 relative" data-name="Container" data-node-id="139:8422">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L11.09 6.26L16.82 6.27L12.36 9.97L14.45 15.23L9 11.54L3.55 15.23L5.64 9.97L1.18 6.27L6.91 6.26L9 1Z" fill="#FFE500"/>
            </svg>
          ))}
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col items-stretch gap-1.5 relative w-full" data-name="Text Container" data-node-id="139:8433">
          <h3 className="font-sans font-semibold text-[18px] leading-[27px] text-white text-left w-full" data-name="Heading" data-node-id="139:8434">
            Exceptional Service!
          </h3>
          <p className="font-sans font-medium text-[14px] leading-[21px] text-white text-left w-full" data-name="Paragraph" data-node-id="139:8435">
            Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!
          </p>
        </div>

        {/* Customer Info */}
        <div className="flex flex-row items-center gap-2.5 relative w-full" data-name="Container" data-node-id="139:8436">
          {/* Profile Image */}
          <div
            className="w-[50px] h-[50px] rounded-full bg-cover bg-center"
            style={{ backgroundImage: "url(https://via.placeholder.com/50x50/1A1A1A/FFFFFF?text=WW)" }}
            data-name="Profile"
            data-node-id="139:8437"
          ></div>

          {/* Name and Location */}
          <div className="flex flex-col relative flex-1" data-name="Text Container" data-node-id="139:8438">
            <h4 className="font-sans font-medium text-[16px] leading-[24px] text-white text-left" data-name="Name" data-node-id="139:8439">
              Wade Warren
            </h4>
            <p className="font-sans font-medium text-[14px] leading-[21px] text-[#999999] text-left" data-name="Text" data-node-id="139:8440">
              USA, California
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Container */}
      <div className="flex flex-row justify-between items-center gap-[1123px] pt-4 relative w-full border-t border-[#262626]" data-name="Container" data-node-id="139:8412">
        {/* View All Testimonials Button */}
        <div className="flex flex-row justify-center items-center gap-2 p-3.5 px-5 relative bg-[#1A1A1A] border border-[#262626] rounded-lg h-full" data-name="Button" data-node-id="139:8444">
          <span className="font-sans font-medium text-[14px] leading-[21px] text-white whitespace-nowrap" data-name="Text" data-node-id="139:8445">
            View All Testimonials
          </span>
        </div>

        {/* Pagination */}
        <div className="flex flex-row items-center gap-2.5 relative" data-name="Buttons Container" data-node-id="139:8414">
          {/* Previous Button */}
          <div className="flex flex-row gap-2.5 p-2.5 relative border border-[#262626] rounded-full" data-name="Button" data-node-id="139:8415">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Page Number */}
          <span className="font-sans font-medium text-[14px] leading-[21px] text-[#999999]" data-name="Text" data-node-id="139:8446">
            01 of 10
          </span>

          {/* Next Button */}
          <div className="flex flex-row gap-2.5 p-2.5 relative bg-[#1A1A1A] border border-[#262626] rounded-full" data-name="Button" data-node-id="139:8418">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}