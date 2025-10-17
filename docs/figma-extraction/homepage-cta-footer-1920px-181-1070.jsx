export default function CTAFooterSection1920px() {
  return (
    <div className="flex flex-col items-stretch bg-[#141414] w-full" data-name="CTA + Footer" data-node-id="181:1070">
      {/* CTA Section */}
      <div className="flex flex-row items-center gap-[250px] p-25 px-[162px] bg-[#141414] border-t border-b border-[#262626] w-full" data-name="CTA" data-node-id="181:1071">
        {/* CTA Content */}
        <div className="flex flex-col gap-5 flex-1" data-name="Text Container" data-node-id="181:1072">
          <h2 className="font-sans font-semibold text-[48px] leading-[72px] text-white w-full" data-name="Heading" data-node-id="181:1073">
            Start Your Real Estate Journey Today
          </h2>
          <p className="font-sans font-medium text-[18px] leading-[27px] text-[#999999] w-full" data-name="Paragraph" data-node-id="181:1074">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-row items-center gap-2.5 p-4.5 px-8 bg-[#703BF7] rounded-lg" data-name="Button" data-node-id="181:1075">
          <span className="font-sans font-semibold text-[18px] leading-[27px] text-white whitespace-nowrap" data-name="Text" data-node-id="181:1076">
            Explore Properties
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col gap-25 bg-[#141414] border-t border-[#262626] w-full" data-name="Footer" data-node-id="181:1077">
        {/* Main Footer Content */}
        <div className="flex flex-row justify-between gap-25 p-25 px-[162px] w-full" data-name="Main Content" data-node-id="181:1078">
          {/* Logo and Description */}
          <div className="flex flex-col gap-6" data-name="Left Section" data-node-id="181:1079">
            {/* Logo */}
            <div className="flex flex-row items-center gap-2" data-name="Logo" data-node-id="181:1080">
              <div className="w-8 h-8 bg-[#703BF7] rounded-lg" data-name="Icon" data-node-id="181:1081"></div>
              <span className="font-sans font-bold text-[32px] leading-[48px] text-white" data-name="Text" data-node-id="181:1082">
                Estatein
              </span>
            </div>

            {/* Description */}
            <p className="font-sans font-normal text-[18px] leading-[27px] text-[#999999] w-80" data-name="Description" data-node-id="181:1083">
              Your trusted partner in finding the perfect property. Discover exceptional homes and investment opportunities with Estatein.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-row justify-between gap-20 flex-1" data-name="Links Section" data-node-id="181:1084">
            {/* Home Column */}
            <div className="flex flex-col gap-4" data-name="Column" data-node-id="181:1085">
              <h3 className="font-sans font-semibold text-[18px] leading-[27px] text-[#999999]" data-name="Heading" data-node-id="181:1086">
                Home
              </h3>
              <a href="#" className="font-sans font-medium text-[16px] leading-[24px] text-white hover:text-purple-400 transition-colors" data-name="Link" data-node-id="181:1087">
                Hero Section
              </a>
            </div>

            {/* About Us Column */}
            <div className="flex flex-col gap-4" data-name="Column" data-node-id="181:1088">
              <h3 className="font-sans font-semibold text-[18px] leading-[27px] text-[#999999]" data-name="Heading" data-node-id="181:1089">
                About Us
              </h3>
              <a href="#" className="font-sans font-medium text-[16px] leading-[24px] text-white hover:text-purple-400 transition-colors" data-name="Link" data-node-id="181:1090">
                Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-row justify-between items-center p-[50px] px-[162px] border-t border-[#262626] w-full" data-name="Bottom Section" data-node-id="181:1091">
          {/* Copyright */}
          <p className="font-sans font-normal text-[18px] leading-[27px] text-[#666666]" data-name="Copyright" data-node-id="181:1092">
            © 2024 Estatein. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex flex-row gap-4" data-name="Social Links" data-node-id="181:1093">
            <div className="w-6 h-6 bg-[#703BF7] rounded-full" data-name="Social Icon" data-node-id="181:1094"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}