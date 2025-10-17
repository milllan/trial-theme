const imgImage = "http://localhost:3845/assets/597f545bcb329f29999c8c335bec608731f34db8.png";
const imgImage1 = "http://localhost:3845/assets/a2b4e0260c692d688fb8fd238642558f0aee6697.png";
const imgImage2 = "http://localhost:3845/assets/788f8cf7af7e05c7ae4a90ebd4dcf750b626e1f4.png";
const imgGroup = "http://localhost:3845/assets/6d7a80b1bb2d5bea1b6bfb9d6539620f81a3c7d7.svg";
const imgGroup1 = "http://localhost:3845/assets/419644af77b8ac31ce21f0328ff1f890f78c9050.svg";
const imgGroup2 = "http://localhost:3845/assets/ca36eaac36ab3589c83d2295dbf53167925469ed.svg";
const imgBackground2 = "http://localhost:3845/assets/2e851c982c4efa29d8488139c3779ab6fdb3220e.svg";
const imgBackground3 = "http://localhost:3845/assets/cb953898895bdf9a7d27fe61c024d36ab91fb22a.svg";
const imgIcon = "http://localhost:3845/assets/e35cffda62971ad80fc65ec24873fd9c0c4070be.svg";
const imgIcon1 = "http://localhost:3845/assets/51c45c8621a1dda3ecd1fbc215ebade7835cc5ea.svg";
const imgIcon2 = "http://localhost:3845/assets/57c46c86102b4f9ec38ba52040301b88d39735b6.svg";

export default function FeaturedProperties1440px() {
  return (
    <div className="flex flex-col gap-16 items-start relative w-full px-20" data-name="Container" data-node-id="139:6487">
      {/* Section Header */}
      <div className="flex gap-40 items-end relative shrink-0 w-full justify-between" data-name="Sub Container" data-node-id="139:6488">
        <div className="flex-0 flex flex-col gap-2.5 grow items-start min-h-0 min-w-0 relative shrink-0" data-name="Text Container" data-node-id="139:6489">
          <h2 className="font-sans font-semibold leading-[1.5] min-w-full relative shrink-0 text-3xl text-white w-[min-content]" data-node-id="139:6490">
            Featured Properties
          </h2>
          <p className="font-sans font-medium leading-[1.5] min-w-full relative shrink-0 text-grey-60 text-base w-[min-content]" data-node-id="139:6491">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
          </p>
          {/* Abstract Design */}
          <div className="absolute h-6 left-[-10px] top-[-30px] w-[54.72px]" data-name="Abstract Design" data-node-id="139:6492">
            <div className="absolute bottom-0 left-0 overflow-clip right-[56.14%] top-0" data-node-id="139:6493">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6494">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
              </div>
            </div>
            <div className="absolute inset-[20%_21.05%_20%_52.63%] overflow-clip" data-node-id="139:6500">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6501">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
              </div>
            </div>
            <div className="absolute bottom-[36%] left-[87.72%] overflow-clip right-0 top-[36%]" data-node-id="139:6507">
              <div className="absolute inset-[-50%]" data-name="Group" data-node-id="139:6508">
                <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-grey-10 border border-grey-15 flex gap-2 items-center px-5 py-4 relative rounded-lg shrink-0 hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:6514">
          <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6515">
            View All Properties
          </span>
        </button>
      </div>

      {/* Properties Grid */}
      <div className="flex flex-col gap-10 items-start relative shrink-0 w-full" data-name="Sub Container" data-node-id="139:6516">
        <div className="flex gap-5 items-start relative shrink-0 w-full" data-name="Items Container" data-node-id="139:6517">
          {/* Property Card 1 */}
          <div className="flex-0 bg-grey-08 border border-grey-15 grow min-h-0 min-w-0 relative rounded-lg shrink-0 hover:border-purple-60 transition-colors" data-name="Card" data-node-id="139:6518">
            <div className="flex flex-col gap-5 items-start overflow-clip p-8 relative rounded-[inherit] w-full">
              <div className="h-64 relative rounded-lg shrink-0 w-full overflow-hidden" data-name="Image" data-node-id="139:6519">
                <img alt="Seaside Serenity Villa" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg w-full h-full hover:scale-105 transition-transform duration-300" src={imgImage} />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Container" data-node-id="139:6520">
                <div className="flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="139:6521">
                  <h3 className="font-sans font-semibold leading-6 relative shrink-0 text-xl text-white w-full" data-node-id="139:6522">
                    Seaside Serenity Villa
                  </h3>
                  <p className="font-sans font-medium leading-6 relative shrink-0 text-grey-60 text-base w-full" data-node-id="139:6523">
                    <span>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... </span>
                    <a href="/properties/seaside-serenity-villa" className="text-white underline hover:text-purple-75 transition-colors cursor-pointer">Read More</a>
                  </p>
                </div>
                <div className="flex gap-2 items-start relative shrink-0 w-full flex-wrap" data-name="Sub Container" data-node-id="139:6524">
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6525">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6526">
                      <div className="absolute h-[17px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px]" data-name="BACKGROUND_2" data-node-id="139:6527">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground2} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6530">
                      4-Bedroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6531">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6532">
                      <div className="absolute h-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[21.017px]" data-name="BACKGROUND_2" data-node-id="139:6533">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground3} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6539">
                      3-Bathroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6540">
                    <div className="relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6541">
                      <img alt="" className="block max-w-none w-full h-full" src={imgIcon} />
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6548">
                      Villa
                    </span>
                  </div>
                </div>
                <div className="flex gap-10 items-end relative shrink-0 w-full justify-between" data-name="Sub Container" data-node-id="139:6549">
                  <div className="flex flex-col items-start leading-6 relative shrink-0" data-name="Text Container" data-node-id="139:6550">
                    <span className="font-sans font-medium relative shrink-0 text-grey-60 text-sm w-full" data-node-id="139:6551">
                      Price
                    </span>
                    <span className="font-sans font-semibold relative shrink-0 text-xl text-white w-full" data-node-id="139:6552">
                      $550,000
                    </span>
                  </div>
                  <button className="flex-0 bg-purple-60 flex gap-2 grow items-center justify-center min-h-0 min-w-0 px-5 py-4 relative rounded-lg shrink-0 hover:bg-purple-75 transition-colors" data-name="Button" data-node-id="139:6553">
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6554">
                      View Property Details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="flex-0 bg-grey-08 border border-grey-15 grow min-h-0 min-w-0 relative rounded-lg shrink-0 hover:border-purple-60 transition-colors" data-name="Card" data-node-id="139:6555">
            <div className="flex flex-col gap-5 items-start overflow-clip p-8 relative rounded-[inherit] w-full">
              <div className="h-64 relative rounded-lg shrink-0 w-full overflow-hidden" data-name="Image" data-node-id="139:6556">
                <img alt="Metropolitan Haven" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg w-full h-full hover:scale-105 transition-transform duration-300" src={imgImage1} />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Container" data-node-id="139:6557">
                <div className="flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="139:6558">
                  <h3 className="font-sans font-semibold leading-6 relative shrink-0 text-xl text-white w-full" data-node-id="139:6559">
                    Metropolitan Haven
                  </h3>
                  <p className="font-sans font-medium leading-6 relative shrink-0 text-grey-60 text-base w-full" data-node-id="139:6560">
                    <span>A chic and fully-furnished 2-bedroom apartment with panoramic city views... </span>
                    <span className="text-white underline hover:text-purple-75 transition-colors cursor-pointer">Read More</span>
                  </p>
                </div>
                <div className="flex gap-2 items-start relative shrink-0 w-full flex-wrap" data-name="Sub Container" data-node-id="139:6638">
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6639">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6640">
                      <div className="absolute h-[17px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px]" data-name="BACKGROUND_2" data-node-id="139:6641">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground2} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6644">
                      2-Bedroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6645">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6646">
                      <div className="absolute h-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[21.017px]" data-name="BACKGROUND_2" data-node-id="139:6647">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground3} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6653">
                      2-Bathroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6654">
                    <div className="relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6655">
                      <img alt="" className="block max-w-none w-full h-full" src={imgIcon} />
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6662">
                      Villa
                    </span>
                  </div>
                </div>
                <div className="flex gap-10 items-end relative shrink-0 w-full justify-between" data-name="Sub Container" data-node-id="139:6586">
                  <div className="flex flex-col items-start leading-6 relative shrink-0" data-name="Text Container" data-node-id="139:6587">
                    <span className="font-sans font-medium relative shrink-0 text-grey-60 text-sm w-full" data-node-id="139:6588">
                      Price
                    </span>
                    <span className="font-sans font-semibold relative shrink-0 text-xl text-white w-full" data-node-id="139:6589">
                      $550,000
                    </span>
                  </div>
                  <button className="flex-0 bg-purple-60 flex gap-2 grow items-center justify-center min-h-0 min-w-0 px-5 py-4 relative rounded-lg shrink-0 hover:bg-purple-75 transition-colors" data-name="Button" data-node-id="139:6590">
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6591">
                      View Property Details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="flex-0 bg-grey-08 border border-grey-15 grow min-h-0 min-w-0 relative rounded-lg shrink-0 hover:border-purple-60 transition-colors" data-name="Card" data-node-id="139:6592">
            <div className="flex flex-col gap-5 items-start overflow-clip p-8 relative rounded-[inherit] w-full">
              <div className="h-64 relative rounded-lg shrink-0 w-full overflow-hidden" data-name="Image" data-node-id="139:6593">
                <img alt="Rustic Retreat Cottage" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-lg w-full h-full hover:scale-105 transition-transform duration-300" src={imgImage2} />
              </div>
              <div className="flex flex-col gap-6 items-start relative shrink-0 w-full" data-name="Container" data-node-id="139:6594">
                <div className="flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="139:6595">
                  <h3 className="font-sans font-semibold leading-6 relative shrink-0 text-xl text-white w-full" data-node-id="139:6596">
                    Rustic Retreat Cottage
                  </h3>
                  <p className="font-sans font-medium leading-6 relative shrink-0 text-grey-60 text-base w-full" data-node-id="139:6597">
                    <span>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... </span>
                    <span className="text-white underline hover:text-purple-75 transition-colors cursor-pointer">Read More</span>
                  </p>
                </div>
                <div className="flex gap-2 items-start relative shrink-0 w-full flex-wrap" data-name="Sub Container" data-node-id="139:6663">
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6664">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6665">
                      <div className="absolute h-[17px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22px]" data-name="BACKGROUND_2" data-node-id="139:6666">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground2} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6669">
                      3-Bedroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6670">
                    <div className="overflow-clip relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6671">
                      <div className="absolute h-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[21.017px]" data-name="BACKGROUND_2" data-node-id="139:6672">
                        <img alt="" className="block max-w-none w-full h-full" src={imgBackground3} />
                      </div>
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6678">
                      3-Bathroom
                    </span>
                  </div>
                  <div className="bg-grey-10 border border-grey-15 flex gap-1 items-center px-4 py-2 relative rounded-pill shrink-0" data-name="Container" data-node-id="139:6679">
                    <div className="relative shrink-0 w-5 h-5" data-name="Icon" data-node-id="139:6680">
                      <img alt="" className="block max-w-none w-full h-full" src={imgIcon} />
                    </div>
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6687">
                      Villa
                    </span>
                  </div>
                </div>
                <div className="flex gap-10 items-end relative shrink-0 w-full justify-between" data-name="Sub Container" data-node-id="139:6623">
                  <div className="flex flex-col items-start leading-6 relative shrink-0" data-name="Text Container" data-node-id="139:6624">
                    <span className="font-sans font-medium relative shrink-0 text-grey-60 text-sm w-full" data-node-id="139:6625">
                      Price
                    </span>
                    <span className="font-sans font-semibold relative shrink-0 text-xl text-white w-full" data-node-id="139:6626">
                      $550,000
                    </span>
                  </div>
                  <button className="flex-0 bg-purple-60 flex gap-2 grow items-center justify-center min-h-0 min-w-0 px-5 py-4 relative rounded-lg shrink-0 hover:bg-purple-75 transition-colors" data-name="Button" data-node-id="139:6627">
                    <span className="font-sans font-medium text-sm leading-6 relative shrink-0 text-white whitespace-nowrap" data-node-id="139:6628">
                      View Property Details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="border-t border-grey-15 flex items-start justify-between pt-4 relative shrink-0 w-full" data-name="Container" data-node-id="139:6629">
          <p className="font-sans font-medium leading-6 relative shrink-0 text-grey-60 text-base whitespace-nowrap" data-node-id="139:6630">
            <span className="text-white">01</span>
            <span> of 60</span>
          </p>
          <div className="flex gap-2.5 items-start relative shrink-0" data-name="Buttons Container" data-node-id="139:6631">
            <button className="border border-grey-15 flex gap-2.5 items-start p-2.5 relative rounded-full shrink-0 hover:bg-grey-10 transition-colors" data-name="Button" data-node-id="139:6632">
              <div className="relative shrink-0 w-6 h-6" data-name="Icon" data-node-id="139:6633">
                <img alt="Previous" className="block max-w-none w-full h-full" src={imgIcon1} />
              </div>
            </button>
            <button className="bg-grey-10 border border-grey-15 flex gap-2.5 items-start p-2.5 relative rounded-full shrink-0 hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:6635">
              <div className="relative shrink-0 w-6 h-6" data-name="Icon" data-node-id="139:6636">
                <img alt="Next" className="block max-w-none w-full h-full" src={imgIcon2} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}