import BaseButton from "../../common/BaseButton";
import Logo from "../../../assets/images/Logo.svg";
import CampFeature from "./CampFeature";

const features = [
  "Add your own camp suggestions.",
  "Leave reviews and experiences.",
  "See locations for all camps.",
];
const CaptionSection = () => {
  return (
    <div className="p-8 lg:h-screen lg:pt-5 lg:px-24">
      <img src={Logo} alt="" className="lg:mb-60 mb-10" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Explore the best camps on Earth.
      </h1>
      <p className="text-lg lg:text-xl mb-6 text-gray-500">
        YelpCamp is a curated list of the best camping spots on Earth.
        Unfiltered and unbiased reviews.
      </p>
      <ul className="mb-6">
        {features.map((feature) => (
          <li className="flex items-center mb-2 text-gray-500">
            {<CampFeature featureText={feature} />}
          </li>
        ))}
      </ul>
      <BaseButton
        btnType="filled"
        text="
        View Campgrounds
      "
      />
    </div>
  );
};

export default CaptionSection;
