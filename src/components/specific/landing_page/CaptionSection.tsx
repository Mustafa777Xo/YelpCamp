import BaseButton from "@/components/common/BaseButton";
import Logo from "@/assets/images/Logo.svg";
import CampFeature from "./CampFeature";
import PartneredWith from "./PartneredWith";
import { Link } from "react-router-dom";

const features = [
  "Add your own camp suggestions.",
  "Leave reviews and experiences.",
  "See locations for all camps.",
];
const CaptionSection = () => {
  return (
    <div className="px-12 xl:h-screen xl:pt-5 xl:px-24 w-screen">
      <img src={Logo} alt="" className="xl:mb-60 mb-3 mt-1" />
      <h1 className="text-2xl xl:text-6xl font-bold mb-2">
        Explore the best camps on Earth.
      </h1>
      <p className="text-sm md:text-md xl:text-xl mb-6 text-gray-500">
        YelpCamp is a curated list of the best camping spots on Earth.
        Unfiltered and unbiased reviews.
      </p>
      <ul className="mb-6">
        {features.map((feature) => (
          <li className="flex items-center mb-1 text-gray-500">
            {<CampFeature featureText={feature} />}
          </li>
        ))}
      </ul>
      <Link to="/home">
        <BaseButton
          btnType="filled"
          text="
        View Campgrounds
      "
        />
      </Link>

      <PartneredWith />
    </div>
  );
};

export default CaptionSection;
