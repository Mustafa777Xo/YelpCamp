import BaseButton from "@/components/common/BaseButton";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
interface AddCampLayoutProps {
  form: React.ReactNode;
}
const AddCampLayout: React.FC<AddCampLayoutProps> = ({ form }) => {
  return (
    <div className="container h-screen mx-auto">
      <Link to="/home">
        <BaseButton text="back" btnType="text" icon={FaArrowLeft} />
      </Link>

      <div className="container flex justify-center">{form}</div>
    </div>
  );
};

export default AddCampLayout;
