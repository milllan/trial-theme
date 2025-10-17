import React, { useState } from 'react';

const FAQSection = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I search for properties on Estatein?",
      shortAnswer: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      fullAnswer: "Our advanced search platform allows you to filter properties by location, price range, property type, number of bedrooms, bathrooms, and many other specific features. You can save your searches, set up alerts for new listings, and even take virtual tours of properties from the comfort of your home."
    },
    {
      id: 2,
      question: "What documents do I need to sell my property through Estatein?",
      shortAnswer: "Find out about the necessary documentation for listing your property with us.",
      fullAnswer: "To list your property, you'll need: property deed, recent tax statements, utility bills, mortgage information, property survey, home inspection report, photos and floor plans, and any relevant permits or renovations documentation. Our team will guide you through the entire process."
    },
    {
      id: 3,
      question: "How can I contact an Estatein agent?",
      shortAnswer: "Discover the different ways you can get in touch with our experienced agents.",
      fullAnswer: "You can reach our agents through multiple channels: phone our main office, use our online contact form, schedule a video consultation, visit one of our local offices, or connect through our mobile app. We also offer 24/7 online chat for immediate assistance with general inquiries."
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="max-w-[1596px] mx-auto px-[162px] py-[100px]">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-20">
        <div className="flex flex-col gap-[50px] max-w-[600px]">
          <h2 className="text-white font-urbanist font-urbanist-600 text-[48px] leading-[72px]">
            Frequently Asked Questions
          </h2>
          <p className="text-grey-60 font-urbanist font-urbanist-500 text-[18px] leading-[27px]">
            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
          </p>
        </div>
        <button className="flex items-center gap-2 py-[18px] px-[24px] bg-grey-10 border border-grey-15 rounded-[12px] hover:bg-grey-20 transition-colors">
          <span className="text-white font-urbanist font-urbanist-500 text-[18px] leading-[27px]">
            View All FAQ's
          </span>
        </button>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-[50px]">
        <div className="grid grid-cols-3 gap-[30px]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col gap-[30px] p-[50px] bg-grey-08 border border-grey-15 rounded-[12px] hover:border-purple-60 transition-all duration-300"
            >
              {/* Question */}
              <h3 className="text-white font-urbanist font-urbanist-600 text-[24px] leading-[36px]">
                {faq.question}
              </h3>

              {/* Answer */}
              <div className="flex flex-col gap-[20px] flex-grow">
                <p className="text-grey-60 font-urbanist font-urbanist-500 text-[18px] leading-[27px]">
                  {expandedItem === faq.id ? faq.fullAnswer : faq.shortAnswer}
                </p>

                {/* Read More/Less Button */}
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="flex items-center gap-[10px] py-[18px] px-[24px] bg-grey-10 border border-grey-15 rounded-[10px] hover:bg-grey-20 transition-colors self-start"
                >
                  <span className="text-white font-urbanist font-urbanist-500 text-[18px] leading-[23.58px]">
                    {expandedItem === faq.id ? "Read Less" : "Read More"}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedItem === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-5 border-t border-grey-15">
          <div className="text-grey-60 font-urbanist font-urbanist-500 text-[20px] leading-[30px]">
            01 of 10
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center justify-center w-11 h-11 rounded-full border border-grey-15 hover:bg-grey-10 transition-colors">
              <svg className="w-6 h-6 text-grey-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center w-11 h-11 rounded-full bg-grey-10 border border-grey-15 hover:bg-grey-20 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;