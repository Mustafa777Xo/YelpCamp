import BaseButton from "@/components/common/BaseButton";
import BaseTextField from "@/components/common/BaseTextfield";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center xl:flex-row xl:items-stretch xl:space-x-4 mb-4 xl:mb-0">
      <BaseTextField
        type="text"
        placeholder="Search for camps"
        icon={<FaSearch />}
      />
      <BaseButton text="Search" btnType="filled" />
    </div>
  );
};

export default SearchBar;

