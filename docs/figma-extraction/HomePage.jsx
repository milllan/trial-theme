import React from 'react';
import HeaderBanner from './homepage-header-banner-1920px-60-3094';
import HeaderNavigation from './homepage-header-navigation-1920px-60-3124';
import HeroSection from './homepage-hero-1920px-121-1772';
import FeaturedProperties from './homepage-featured-properties-1920px-87-1301';
import TestimonialsSection from './homepage-testimonials-1920px-75-599';
import FAQSection from './homepage-faq-1920px-75-952';
import CTASection from './homepage-cta-1920px-181-2';
import FooterSection from './homepage-footer-1920px-89-3943';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#141414]">
      {/* Header Components */}
      <header>
        <HeaderBanner />
        <HeaderNavigation />
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturedProperties />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
};

export default HomePage;