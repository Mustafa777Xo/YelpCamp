import BaseButton from "@/components/common/BaseButton";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const CampgroundCard: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded overflow-hidden border p-5 flex flex-col h-full">
      <div className="h-48 w-full overflow-hidden">
        <img className="object-cover h-full w-full" src={image} alt={title} />
      </div>
      <div className="flex-grow">
        <div className="py-5">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="py-4">
        <BaseButton text="View Campground" btnType="outlined"></BaseButton>
      </div>
    </div>
  );
};

export default CampgroundCard;
