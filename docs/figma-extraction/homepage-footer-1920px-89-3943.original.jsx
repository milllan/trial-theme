import React, { useState } from 'react';

const FooterSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  const footerLinks = {
    home: [
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    aboutUs: [
      { label: 'Who We Are', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'Our Vision', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'Our Team', href: '#' }
    ],
    properties: [
      { label: 'Listings', href: '#' },
      { label: 'Apartments', href: '#' },
      { label: 'Houses', href: '#' },
      { label: 'Villas', href: '#' },
      { label: 'Commercial', href: '#' }
    ],
    services: [
      { label: 'Buy Property', href: '#' },
      { label: 'Sell Property', href: '#' },
      { label: 'Rent Property', href: '#' },
      { label: 'Property Management', href: '#' },
      { label: 'Investment Consulting', href: '#' }
    ],
    contactUs: [
      { label: 'Contact Info', href: '#' },
      { label: 'Our Offices', href: '#' },
      { label: 'Support Center', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="flex items-center w-full py-[100px] px-[162px] bg-[#141414] border-t border-[#262626]">
      <div className="w-full max-w-[1596px] mx-auto">
        <div className="flex flex-col gap-[100px]">
          {/* Main Footer Content */}
          <div className="flex items-start justify-between">
            {/* Left Section - Logo, Description, and Newsletter */}
            <div className="flex flex-col gap-6 max-w-[350px]">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-[32px] h-[32px] bg-[#703BF7] rounded-[8px] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <span className="text-white font-sans font-bold text-[32px] leading-[48px]">
                  Estatein
                </span>
              </div>

              {/* Description */}
              <p className="text-[#999999] font-sans font-normal text-[18px] leading-[27px]">
                Your trusted partner in finding the perfect property. Discover exceptional homes and investment opportunities with Estatein.
              </p>

              {/* Newsletter Signup */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  Subscribe to our newsletter
                </h3>
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="py-[18px] px-[24px] bg-[#1A1A1A] border border-[#262626] rounded-[10px] text-white placeholder-[#666666] focus:outline-none focus:border-[#703BF7] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="py-4.5 px-6 bg-[#703BF7] rounded-[10px] hover:bg-[#A685FA] transition-all duration-300 hover:scale-105 text-white font-sans font-medium text-[18px] leading-[27px]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="flex items-start gap-[100px]">
              {/* Home Links */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  Home
                </h4>
                <div className="flex flex-col gap-4">
                  {footerLinks.home.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#999999] font-sans font-normal text-[18px] leading-[27px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* About Us Links */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  About Us
                </h4>
                <div className="flex flex-col gap-4">
                  {footerLinks.aboutUs.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#999999] font-sans font-normal text-[18px] leading-[27px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Properties Links */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  Properties
                </h4>
                <div className="flex flex-col gap-4">
                  {footerLinks.properties.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#999999] font-sans font-normal text-[18px] leading-[27px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Links */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  Services
                </h4>
                <div className="flex flex-col gap-4">
                  {footerLinks.services.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#999999] font-sans font-normal text-[18px] leading-[27px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Us Links */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-sans font-bold text-[18px] leading-[27px]">
                  Contact Us
                </h4>
                <div className="flex flex-col gap-4">
                  {footerLinks.contactUs.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-[#999999] font-sans font-normal text-[18px] leading-[27px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Social Links */}
          <div className="flex items-center justify-between pt-[50px] border-t border-[#262626]">
            {/* Copyright */}
            <p className="text-[#666666] font-sans font-normal text-[18px] leading-[27px]">
              © 2024 Estatein. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-[40px] h-[40px] bg-[#1A1A1A] border border-[#262626] rounded-[10px] flex items-center justify-center hover:bg-[#262626] hover:border-[#703BF7] transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-[#999999] hover:text-white transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        social.name === 'Facebook'
                          ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
                          : social.name === 'Twitter'
                          ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
                          : social.name === 'Instagram'
                          ? 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z'
                          : 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'
                      }
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;