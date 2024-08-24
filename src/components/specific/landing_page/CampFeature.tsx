import checkMarkIcon from "@/assets/icons/checkmark.svg";
interface featureProp {
  featureText: string;
}
const CampFeature: React.FC<featureProp> = ({ featureText }) => {
  return (
    <>
      <li className="flex items-center mb-2 text-gray-500">
        <img src={checkMarkIcon} className="mr-2" alt="" />
        {featureText}
      </li>
    </>
  );
};

export default CampFeature;
