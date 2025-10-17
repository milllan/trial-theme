import React from 'react';
import HeaderBanner390px from './homepage-header-banner-390px-139-7837';
import HeaderNavigation390px from './homepage-header-navigation-390px-139-7815';
import HeroSection390px from './homepage-hero-390px-139-7905';
import StatisticsSection390px from './homepage-statistics-390px-139-7959';
import ServicesSection390px from './homepage-services-390px-139-8120';
import FeaturedPropertiesSection390px from './homepage-featured-properties-390px-139-8184';
import TestimonialsSection390px from './homepage-testimonials-390px-139-8374';
import FAQSection390px from './homepage-faq-390px-139-8543';
import CTAFooterSection390px from './homepage-cta-footer-390px-181-1070';

const HomePage390px = () => {
  return (
    <div className="min-h-screen bg-[#141414] max-w-[390px] mx-auto">
      {/* Header Components */}
      <header>
        <HeaderBanner390px />
        <HeaderNavigation390px />
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <HeroSection390px />
        <div className="my-8">
          <StatisticsSection390px />
        </div>
        <div className="my-8">
          <ServicesSection390px />
        </div>
        <div className="my-8">
          <FeaturedPropertiesSection390px />
        </div>
        <div className="my-8">
          <TestimonialsSection390px />
        </div>
        <div className="my-8">
          <FAQSection390px />
        </div>
      </main>

      {/* CTA and Footer */}
      <footer>
        <CTAFooterSection390px />
      </footer>
    </div>
  );
};

export default HomePage390px;