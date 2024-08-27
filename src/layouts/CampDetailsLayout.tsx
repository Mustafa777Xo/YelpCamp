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
      <div className="">{maps}</div>
      <div>{campCard}</div>
      <div>{commentsSection}</div>
    </>
  );
};

export default CampDetailsLayout;
