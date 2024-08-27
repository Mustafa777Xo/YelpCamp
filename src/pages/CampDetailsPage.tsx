import CampDetailsLayout from "@/layouts/CampDetailsLayout";
import CampCard from "@/components/specific/camp_details_page/CampCard";
import Map from "@/components/specific/camp_details_page/Map";
import CommentSection from "@/components/specific/camp_details_page/CommentSection";
const CampDetailsPage = () => {
  return (
    <>
      <CampDetailsLayout
        maps={<Map />}
        campCard={<CampCard />}
        commentsSection={<CommentSection />}
      />
    </>
  );
};

export default CampDetailsPage;
