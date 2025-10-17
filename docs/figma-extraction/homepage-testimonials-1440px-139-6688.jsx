const imgProfile = "http://localhost:3845/assets/d0cf299bb82ecb9b6ca2bb97b1bbc5d528b964d4.png";
const imgProfile1 = "http://localhost:3845/assets/2e80be9803bc1bf0b386581c4bec920920d8b6e7.png";
const imgProfile2 = "http://localhost:3845/assets/8dc30214275452277e6fe53845adb32340143875.png";
const imgGroup = "http://localhost:3845/assets/6d7a80b1bb2d5bea1b6bfb9d6539620f81a3c7d7.svg";
const imgGroup1 = "http://localhost:3845/assets/419644af77b8ac31ce21f0328ff1f890f78c9050.svg";
const imgGroup2 = "http://localhost:3845/assets/ca36eaac36ab3589c83d2295dbf53167925469ed.svg";
const imgSubContainer = "http://localhost:3845/assets/30307d1f415b41d895bedc9e941aceac3e2e3660.svg";
const imgIcon = "http://localhost:3845/assets/51c45c8621a1dda3ecd1fbc215ebade7835cc5ea.svg";
const imgIcon1 = "http://localhost:3845/assets/57c46c86102b4f9ec38ba52040301b88d39735b6.svg";

export default function Testimonials1440px() {
  return (
    <div className="flex flex-col gap-16 items-start relative w-full" data-name="Container" data-node-id="139:6688">
      {/* Section Header */}
      <div className="flex gap-40 items-end relative shrink-0 w-full justify-between" data-name="Sub Container" data-node-id="139:6689">
        <div className="flex-0 flex flex-col gap-2.5 grow items-start min-h-0 min-w-0 relative shrink-0" data-name="Text Container" data-node-id="139:6690">
          <h2 className="font-sans font-semibold leading-[1.5] min-w-full relative shrink-0 text-[38px] text-white w-[min-content]" data-node-id="139:6691">
            What Our Clients Say
          </h2>
          <p className="font-sans font-medium leading-[1.5] min-w-full relative shrink-0 text-[#999999] text-base w-[min-content]" data-node-id="139:6692">
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </p>
          {/* Abstract Design */}
          <div className="absolute h-6 left-[-10px] top-[-30px] w-[54.72px]" data-name="Abstract Design" data-node-id="139:6788">
            <div className="absolute bottom-0 left-0 overflow-clip right-[56.14%] top-0" data-node-id="139:6789">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6790">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
              </div>
            </div>
            <div className="absolute inset-[20%_21.05%_20%_52.63%] overflow-clip" data-node-id="139:6796">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6797">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
              </div>
            </div>
            <div className="absolute bottom-[36%] left-[87.72%] overflow-clip right-0 top-[36%]" data-node-id="139:6803">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6804">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#1a1a1a] border border-neutral-800 flex gap-2 items-center px-5 py-3.5 relative rounded-lg shrink-0 hover:bg-[#262626] transition-colors" data-name="Button" data-node-id="139:6715">
          <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6716">
            View All Testimonials
          </span>
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-col gap-10 items-start relative shrink-0 w-full" data-name="Sub Container" data-node-id="139:6717">
        <div className="flex gap-5 items-start relative shrink-0 w-full" data-name="Items Container" data-node-id="139:6718">
          {/* Testimonial Card 1 */}
          <div className="flex-0 bg-[#141414] border border-neutral-800 flex flex-col gap-8 grow items-start min-h-0 min-w-0 p-10 relative rounded-[10px] shrink-0 hover:border-purple-500 transition-colors" data-name="Card" data-node-id="139:6719">
            {/* Rating Stars */}
            <div className="flex gap-2 items-start relative shrink-0" data-name="Container" data-node-id="139:6720">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="h-9 relative shrink-0 w-9" data-name={`Sub Container ${star}`}>
                  <img alt="" className="block max-w-none w-full h-full" src={imgSubContainer} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 items-start leading-6 relative shrink-0 text-white w-full" data-name="Text Container" data-node-id="139:6731">
              <h3 className="font-sans font-semibold relative shrink-0 text-xl w-full" data-node-id="139:6732">
                Exceptional Service!
              </h3>
              <p className="font-sans font-medium relative shrink-0 text-base w-full" data-node-id="139:6733">
                Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!
              </p>
            </div>

            <div className="flex gap-2.5 items-center relative shrink-0 w-full" data-name="Container" data-node-id="139:6734">
              <div className="relative shrink-0 w-12 h-12" data-name="Profile" data-node-id="139:6735">
                <img alt="Wade Warren" className="block max-w-none w-full h-full rounded-full" src={imgProfile} />
              </div>
              <div className="flex-0 flex flex-col font-sans font-medium grow items-start leading-6 min-h-0 min-w-0 relative shrink-0" data-name="Text Container" data-node-id="139:6736">
                <p className="relative shrink-0 text-lg text-white w-full" data-node-id="139:6737">
                  Wade Warren
                </p>
                <p className="relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6738">
                  USA, California
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="flex-0 bg-[#141414] border border-neutral-800 flex flex-col gap-8 grow items-start min-h-0 min-w-0 p-10 relative rounded-[10px] shrink-0 hover:border-purple-500 transition-colors" data-name="Card" data-node-id="139:6739">
            {/* Rating Stars */}
            <div className="flex gap-2 items-start relative shrink-0" data-name="Container" data-node-id="139:6740">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="h-9 relative shrink-0 w-9" data-name={`Sub Container ${star}`}>
                  <img alt="" className="block max-w-none w-full h-full" src={imgSubContainer} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 items-start leading-6 relative shrink-0 text-white w-full" data-name="Text Container" data-node-id="139:6751">
              <h3 className="font-sans font-semibold relative shrink-0 text-xl w-full" data-node-id="139:6752">
                Efficient and Reliable
              </h3>
              <p className="font-sans font-medium relative shrink-0 text-base w-full" data-node-id="139:6753">
                Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.
              </p>
            </div>

            <div className="flex gap-2.5 items-center relative shrink-0 w-full" data-name="Container" data-node-id="139:6754">
              <div className="relative shrink-0 w-12 h-12" data-name="Profile" data-node-id="139:6755">
                <img alt="Emelie Thomson" className="block max-w-none w-full h-full rounded-full" src={imgProfile1} />
              </div>
              <div className="flex-0 flex flex-col font-sans font-medium grow items-start leading-6 min-h-0 min-w-0 relative shrink-0" data-name="Text Container" data-node-id="139:6756">
                <p className="relative shrink-0 text-lg text-white w-full" data-node-id="139:6757">
                  Emelie Thomson
                </p>
                <p className="relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6758">
                  USA, Florida
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="flex-0 bg-[#141414] border border-neutral-800 flex flex-col gap-8 grow items-start min-h-0 min-w-0 p-10 relative rounded-[10px] shrink-0 hover:border-purple-500 transition-colors" data-name="Card" data-node-id="139:6759">
            {/* Rating Stars */}
            <div className="flex gap-2 items-start relative shrink-0" data-name="Container" data-node-id="139:6760">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="h-9 relative shrink-0 w-9" data-name={`Sub Container ${star}`}>
                  <img alt="" className="block max-w-none w-full h-full" src={imgSubContainer} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 items-start leading-6 relative shrink-0 text-white w-full" data-name="Text Container" data-node-id="139:6771">
              <h3 className="font-sans font-semibold relative shrink-0 text-xl w-full" data-node-id="139:6772">
                Trusted Advisors
              </h3>
              <p className="font-sans font-medium relative shrink-0 text-base w-full" data-node-id="139:6773">
                The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!
              </p>
            </div>

            <div className="flex gap-2.5 items-center relative shrink-0 w-full" data-name="Container" data-node-id="139:6774">
              <div className="relative shrink-0 w-12 h-12" data-name="Profile" data-node-id="139:6775">
                <img alt="John Mans" className="block max-w-none w-full h-full rounded-full" src={imgProfile2} />
              </div>
              <div className="flex-0 flex flex-col font-sans font-medium grow items-start leading-6 min-h-0 min-w-0 relative shrink-0" data-name="Text Container" data-node-id="139:6776">
                <p className="relative shrink-0 text-lg text-white w-full" data-node-id="139:6777">
                  John Mans
                </p>
                <p className="relative shrink-0 text-[#999999] text-base w-full" data-node-id="139:6778">
                  USA, Nevada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="border-t border-neutral-800 flex items-start justify-between pt-4 relative shrink-0 w-full" data-name="Container" data-node-id="139:6810">
          <p className="font-sans font-medium leading-6 relative shrink-0 text-[#999999] text-base whitespace-nowrap" data-node-id="139:6811">
            <span className="text-white">01</span>
            <span> of</span>
            <span> 10</span>
          </p>
          <div className="flex gap-2.5 items-start relative shrink-0" data-name="Buttons Container" data-node-id="139:6812">
            <button className="border border-neutral-800 flex gap-2.5 items-start p-2.5 relative rounded-[69px] shrink-0 hover:bg-[#1a1a1a] transition-colors" data-name="Button" data-node-id="139:6813">
              <div className="relative shrink-0 w-6 h-6" data-name="Icon" data-node-id="139:6814">
                <img alt="Previous" className="block max-w-none w-full h-full" src={imgIcon} />
              </div>
            </button>
            <button className="bg-[#1a1a1a] border border-neutral-800 flex gap-2.5 items-start p-2.5 relative rounded-[69px] shrink-0 hover:bg-[#262626] transition-colors" data-name="Button" data-node-id="139:6816">
              <div className="relative shrink-0 w-6 h-6" data-name="Icon" data-node-id="139:6817">
                <img alt="Next" className="block max-w-none w-full h-full" src={imgIcon1} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}