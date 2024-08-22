import React from "react";

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
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <div className="w-full h-3/4 lg:w-3/5 lg:h-screen flex items-center justify-center bg-gray-100">
        {leftChild}
      </div>

      {/* Mobile background image - Hidden on large screens */}
      <div
        className="w-full h-1/2 lg:hidden flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${rightBgImageMobile})`,
        }}
      >
        <div className="flex flex-col">
            {rightChild}</div>
      </div>

      {/* Desktop background image - Visible only on large screens */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center"
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
