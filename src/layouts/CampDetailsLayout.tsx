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
