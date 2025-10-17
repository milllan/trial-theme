
export default function Footer1440px() {
  return (
    <footer className="bg-grey-10 relative w-full" data-name="Footer" data-node-id="139:7262">
      {/* Main Footer Content */}
      <div className="px-20 py-20" data-name="Container" data-node-id="139:7263">
        <div className="flex items-start justify-between">
          {/* Logo and Newsletter Section */}
          <div className="flex-0 w-[326px]" data-name="Sub Container" data-node-id="139:7264">
            {/* Logo */}
            <div className="relative w-[113px] h-8 mb-[58px]" data-name="Logo" data-node-id="139:7797">
              <div className="w-full h-full bg-grey-08 rounded-lg flex items-center justify-center">
                <span className="font-sans font-bold text-white">Estatein</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-grey-08 border border-grey-15 rounded-lg p-[13px] relative flex items-center" data-name="Input Field" data-node-id="139:7280">
              <div className="w-5 h-5 mr-3" data-name="Icon" data-node-id="139:7281">
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-grey-60">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-white placeholder-grey-60 outline-none text-sm"
                data-node-id="139:7283"
              />
              <button className="w-6 h-6 flex items-center justify-center" data-node-id="139:7284">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex-1 max-w-[875px] ml-auto" data-name="Footer Link Container" data-node-id="139:7289">
            <div className="flex justify-between gap-12">
              {/* Home Column */}
              <div className="w-[89px]" data-name="Column" data-node-id="139:7290">
                <h3 className="font-sans font-semibold text-white mb-12 text-sm" data-node-id="139:7291">Home</h3>
                <div className="space-y-10" data-name="Link Container" data-node-id="139:7292">
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7293">Home</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7294">About Us</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7295">Properties</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7296">Services</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7297">Contact Us</a>
                </div>
              </div>

              {/* About Us Column */}
              <div className="w-[90px]" data-name="Column" data-node-id="139:7298">
                <h3 className="font-sans font-semibold text-white mb-12 text-sm" data-node-id="139:7299">About Us</h3>
                <div className="space-y-10" data-name="Link Container" data-node-id="139:7300">
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7301">Our Story</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7302">Our Team</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7303">Our Mission</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7304">Our Values</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7305">Contact Us</a>
                </div>
              </div>

              {/* Properties Column */}
              <div className="w-[79px]" data-name="Column" data-node-id="139:7306">
                <h3 className="font-sans font-semibold text-white mb-12 text-sm" data-node-id="139:7307">Properties</h3>
                <div className="space-y-10" data-name="Link Container" data-node-id="139:7308">
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7309">Residential</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7310">Commercial</a>
                </div>
              </div>

              {/* Services Column */}
              <div className="w-[159px]" data-name="Column" data-node-id="139:7311">
                <h3 className="font-sans font-semibold text-white mb-12 text-sm" data-node-id="139:7312">Services</h3>
                <div className="space-y-10" data-name="Link Container" data-node-id="139:7313">
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7314">Property Management</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7315">Real Estate Consulting</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7316">Property Valuation</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7317">Market Analysis</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7318">Investment Advisory</a>
                </div>
              </div>

              {/* Contact Us Column */}
              <div className="w-[96px]" data-name="Column" data-node-id="139:7319">
                <h3 className="font-sans font-semibold text-white mb-12 text-sm" data-node-id="139:7320">Contact Us</h3>
                <div className="space-y-10" data-name="Link Container" data-node-id="139:7321">
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7322">Contact Form</a>
                  <a href="#" className="block text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7323">Office Locations</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-grey-15 px-20 py-3" data-name="Container" data-node-id="139:7324">
        <div className="flex items-center justify-between">
          {/* Copyright and Links */}
          <div className="flex items-center gap-14" data-name="Sub Link Container" data-node-id="139:7325">
            <a href="#" className="text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7326">
              © 2024 Estatein. All rights reserved.
            </a>
            <a href="#" className="text-grey-60 text-sm hover:text-white transition-colors" data-node-id="139:7327">
              Privacy Policy
            </a>
            <a href="#" className="text-grey-60 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3" data-name="Social Icon" data-node-id="139:7328">
            <a href="#" className="w-10 h-10 bg-grey-08 border border-grey-15 rounded-lg flex items-center justify-center hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:7329">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-node-id="139:7778">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-grey-08 border border-grey-15 rounded-lg flex items-center justify-center hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:7331">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-node-id="139:7332">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-grey-08 border border-grey-15 rounded-lg flex items-center justify-center hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:7334">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-node-id="139:7335">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-grey-08 border border-grey-15 rounded-lg flex items-center justify-center hover:bg-grey-20 transition-colors" data-name="Button" data-node-id="139:7337">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-node-id="139:7338">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}