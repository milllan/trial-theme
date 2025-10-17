import React from 'react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More",
      image: "/demo-assets-images/property-seaside-villa.png",
      price: "$550,000",
      features: ["4-Bedroom", "3-Bathroom", "Villa"]
    },
    {
      id: 2,
      title: "Metropolitan Haven",
      description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      image: "/demo-assets-images/property-metropolitan-haven.png",
      price: "$550,000",
      features: ["2-Bedroom", "2-Bathroom", "Apartment"]
    },
    {
      id: 3,
      title: "Rustic Retreat Cottage",
      description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More",
      image: "/demo-assets-images/property-rustic-cottage.png",
      price: "$550,000",
      features: ["3-Bedroom", "3-Bathroom", "Townhouse"]
    }
  ];

  return (
    <section className="max-w-desktop mx-auto px-40 py-20">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-20">
        <div className="flex flex-col gap-3.5 max-w-[600px]">
          <h2 className="text-white font-sans font-semibold text-4xl leading-[72px]">
            Featured Properties
          </h2>
          <p className="text-grey-60 font-sans font-medium text-base leading-[27px]">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
          </p>
        </div>
        <button className="flex items-center gap-2 py-5 px-6 bg-grey-10 border border-grey-15 rounded-lg hover:bg-[#262626] transition-colors">
          <span className="text-white font-sans font-medium text-base leading-[27px]">
            View All Properties
          </span>
        </button>
      </div>

      {/* Properties Grid */}
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex flex-col gap-8 p-10 bg-grey-08 border border-grey-15 rounded-lg hover:border-[#703BF7] transition-colors"
            >
              {/* Property Image */}
              <div className="w-full h-[318px] rounded-lg overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Property Content */}
              <div className="flex flex-col gap-8">
                {/* Title and Description */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-sans font-semibold text-xl leading-[36px]">
                    {property.title}
                  </h3>
                  <p className="text-grey-60 font-sans font-medium text-base leading-[27px]">
                    {property.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2.5">
                  {property.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3.5 py-2 bg-grey-10 border border-grey-15 rounded-pill"
                    >
                      {feature.includes("Bedroom") && (
                        <img
                          src="/demo-assets-images/icon-bedroom.svg"
                          alt="Bedroom icon"
                          className="w-6 h-6"
                        />
                      )}
                      {feature.includes("Bathroom") && (
                        <img
                          src="/demo-assets-images/icon-bathroom.svg"
                          alt="Bathroom icon"
                          className="w-6 h-6"
                        />
                      )}
                      <span className="text-white font-sans font-medium text-base leading-[27px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-end justify-between gap-12">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-grey-60 font-sans font-medium text-base leading-[27px]">
                      Price
                    </div>
                    <div className="text-white font-sans font-semibold text-xl leading-[36px]">
                      {property.price}
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 py-5 px-6 bg-purple-60 rounded-lg hover:bg-purple-75 transition-colors">
                    <span className="text-white font-sans font-medium text-base leading-[27px]">
                      View Property Details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-5 border-t border-grey-15">
          <div className="text-grey-60 font-sans font-medium text-lg leading-[30px]">
            01 of 60
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src="/demo-assets-images/pagination-arrows.svg"
              alt="Pagination arrows"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;