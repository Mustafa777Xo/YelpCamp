import HeroSectionLayout from "@/layouts/HeroSectionLayout";
import AddCampgroundLink from "./AddCampgroundLink";
import HeroContent from "./HeroContent";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <HeroSectionLayout>
      <HeroContent />
      <SearchBar />
      <AddCampgroundLink />
    </HeroSectionLayout>
  );
};

export default HeroSection;
