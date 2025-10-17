import React from 'react';
import HeaderBanner1440px from './homepage-header-banner-1440px-139-6240';
import HeaderNavigation1440px from './homepage-header-navigation-1440px-139-6306';
import HeroSection1440px from './homepage-hero-1440px-139-6332';
import FeaturedProperties1440px from './homepage-featured-properties-1440px-139-6487';
import TestimonialsSection1440px from './homepage-testimonials-1440px-139-6688';
import FAQSection1440px from './homepage-faq-1440px-139-6819';
import CTASection1440px from './homepage-cta-1440px-181-358';
import FooterSection1440px from './homepage-footer-1440px-139-7262';

const HomePage1440px = () => {
  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Header Components */}
      <header>
        <HeaderBanner1440px />
        <HeaderNavigation1440px />
      </header>

      {/* Main Content */}
      <main>
        <HeroSection1440px />
        <FeaturedProperties1440px />
        <TestimonialsSection1440px />
        <FAQSection1440px />
        <CTASection1440px />
      </main>

      {/* Footer */}
      <footer>
        <FooterSection1440px />
      </footer>
    </div>
  );
};

export default HomePage1440px;