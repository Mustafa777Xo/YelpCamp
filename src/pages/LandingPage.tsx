import React from "react";
import SplitScreenLayout from "../layouts/SpiltScreenLayout";
import heroImage from "../assets/images/hero_image.jpg";
import heroImageMobile from "../assets/images/hero_image_mobile.jpg";
const LandingPage: React.FC = () => {
  return (
    <SplitScreenLayout
      leftChild={
        <div className="p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore the best camps on Earth.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            YelpCamp is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Add your own camp
              suggestions.
            </li>
            <li className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✔</span> Leave reviews and
              experiences.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> See locations for
              all camps.
            </li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded">
            View Campgrounds
          </button>
        </div>
      }
      rightChild={<div>{}</div>}
      rightBgImageDesktop={heroImage} // Desktop image URL
      rightBgImageMobile={heroImageMobile} // Mobile image URL
    />
  );
};

export default LandingPage;
