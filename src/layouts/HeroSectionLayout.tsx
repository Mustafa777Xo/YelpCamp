import heroBackground from "@/assets/images/hero_bg.svg";

const HeroSectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container-lg mt-10 max-w-screen-2xl mx-auto">
      <div
        className="p-5 xl:p-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="container mx-auto text-center xl:text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLayout;
