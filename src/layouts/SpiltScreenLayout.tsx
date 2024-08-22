interface SplitScreenLayoutProps {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  rightBgImageDesktop: string; // Background image for desktop
  rightBgImageMobile: string; // Background image for mobile
}

const SplitScreenLayout: React.FC<SplitScreenLayoutProps> = ({
  leftChild,
  rightChild,
  rightBgImageDesktop,
  rightBgImageMobile,
}) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-gray-100">
        {leftChild}
      </div>
      <div
        className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url(${rightBgImageMobile})`,
        }}
        // Visible only on mobile
      >
        {rightChild}
      </div>
      <div
        className="w-full md:w-1/2 items-center justify-center bg-cover bg-center hidden md:flex"
        style={{
          backgroundImage: `url(${rightBgImageDesktop})`,
        }}
      >
        {rightChild}
      </div>
    </div>
  );
};

export default SplitScreenLayout;
