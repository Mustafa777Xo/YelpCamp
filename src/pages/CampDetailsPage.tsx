import CampDetailsLayout from "@/layouts/CampDetailsLayout";
import CampCard from "@/components/specific/camp_details_page/CampCard";
import Map from "@/components/specific/camp_details_page/Map";
const CampDetailsPage = () => {
  return (
    <>
      <CampDetailsLayout
        maps={<Map />}
        campCard={<CampCard />}
        commentsSection="comment section here"
      />
    </>
  );
};

export default CampDetailsPage;
