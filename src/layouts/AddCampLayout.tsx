import BaseButton from "@/components/common/BaseButton";
import { FaArrowLeft } from "react-icons/fa";
interface AddCampLayoutProps {
  form: React.ReactNode;
}
const AddCampLayout: React.FC<AddCampLayoutProps> = ({ form }) => {
  return (
    <div className="container h-screen mx-auto">
      <BaseButton text="back" btnType="text" icon={FaArrowLeft} />
      <div className="container flex justify-center">{form}</div>
    </div>
  );
};

export default AddCampLayout;
