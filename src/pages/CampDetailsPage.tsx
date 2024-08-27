import CampDetailsLayout from "@/layouts/CampDetailsLayout";
import CampCard from "@/components/specific/camp_details_page/CampCard";
const CampDetailsPage = () => {
  return (
    <>
      <CampDetailsLayout
        maps="maps"
        campCard={<CampCard />}
        commentsSection="comment section here"
      />
    </>
  );
};

export default CampDetailsPage;
