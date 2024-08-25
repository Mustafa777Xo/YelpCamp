import heroBackground from "@/assets/images/hero_bg.svg";
const HeroSection = () => {
  return (
    <div className="container-lg mt-10 px-5 lg:px-48">
      <div
        className="p-5 lg:p-20 "
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="flex flex-col xl:w-2/3 text-balance">
          <p className="text-2xl lg:text-4xl font-bold mb-2">
            Welcome to YelpCamp!
          </p>
          <p className="text-sm pr-20 xl:text-xl text-black ">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </p>
        </div>

        <h1>test</h1>
      </div>
    </div>
  );
};

export default HeroSection;
