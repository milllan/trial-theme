import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Exceptional Service!",
      content: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: "Wade Warren",
      location: "USA, California",
      avatar: "/demo-assets-images/testimonial-wade-warren.png"
    },
    {
      id: 2,
      title: "Efficient and Reliable",
      content: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: "Emelie Thomson",
      location: "USA, Florida",
      avatar: "/demo-assets-images/testimonial-emelie-thomson.png"
    },
    {
      id: 3,
      title: "Trusted Advisors",
      content: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: "John Mans",
      location: "USA, Nevada",
      avatar: "/demo-assets-images/testimonial-john-mans.png"
    }
  ];

  return (
    <section className="max-w-[1596px] mx-auto px-[162px] py-20">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-20">
        <div className="flex flex-col gap-3.5 max-w-[600px]">
          <h2 className="text-white font-sans font-semibold text-[48px] leading-[72px]">
            What Our Clients Say
          </h2>
          <p className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
            Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
          </p>
        </div>
        <button className="flex items-center gap-2 py-4.5 px-6 bg-[#1A1A1A] border border-[#262626] rounded-[10px] hover:bg-[#262626] transition-colors">
          <span className="text-white font-sans font-medium text-[18px] leading-[27px]">
            View All Testimonials
          </span>
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-col gap-[50px]">
        <div className="grid grid-cols-3 gap-7.5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-10 p-12 bg-[#141414] border border-[#262626] rounded-[12px] hover:border-[#703BF7] transition-colors"
            >
              {/* Rating Stars */}
              <div className="flex gap-2.5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FFE500"
                    />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col gap-3.5">
                <h3 className="text-white font-sans font-semibold text-[24px] leading-[36px]">
                  {testimonial.title}
                </h3>
                <p className="text-white font-sans font-medium text-[18px] leading-[27px]">
                  {testimonial.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="text-white font-sans font-medium text-[20px] leading-[30px]">
                    {testimonial.author}
                  </div>
                  <div className="text-[#999999] font-sans font-medium text-[18px] leading-[27px]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-5 border-t border-[#262626]">
          <div className="text-[#999999] font-sans font-medium text-[20px] leading-[30px]">
            01 of 10
          </div>
          <div className="flex items-center gap-2.5">
            <img
              src="/demo-assets-images/pagination-testimonials.svg"
              alt="Pagination controls"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;