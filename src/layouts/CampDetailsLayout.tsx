import BaseButton from "@/components/common/BaseButton";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CampDetailsLayoutProps {
  maps: React.ReactNode;
  campCard: React.ReactNode;
  commentsSection: React.ReactNode;
}
const CampDetailsLayout: React.FC<CampDetailsLayoutProps> = ({
  maps,
  campCard,
  commentsSection,
}) => {
  return (
    <>
      <div className="container mx-auto py-10">
        <Link to="/home">
          <BaseButton text="back" btnType="text" icon={FaArrowLeft} />
        </Link>
        <div className="colmuns-1 lg:columns-2 lg:gap-5 ">
          <div className="p-5">{maps}</div>
          <div className="mt-16 lg:mt-96 p-5">{campCard}</div>
          <div className="mt-6 lg:mt-10 p-5 ">{commentsSection}</div>
        </div>
      </div>
    </>
  );
};

export default CampDetailsLayout;
