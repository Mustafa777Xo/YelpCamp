import React from "react";
import SplitScreenLayout from "../layouts/SpiltScreenLayout";
import heroImage from "../assets/images/hero_image.jpg";
import heroImageMobile from "../assets/images/hero_image_mobile.jpg";
import CaptionSection from "../components/specific/landing_page/CaptionSection";
const LandingPage: React.FC = () => {
  return (
    <SplitScreenLayout
      leftChild={
          <CaptionSection />
      }
      rightChild={<div>{}</div>}
      rightBgImageDesktop={heroImage} // Desktop image URL
      rightBgImageMobile={heroImageMobile} // Mobile image URL
    />
  );
};

export default LandingPage;
