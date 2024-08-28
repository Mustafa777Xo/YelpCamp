import { Link } from "react-router-dom";

const AddCampgroundLink = () => {
  return (
    <Link to="/add-camp">
      <a href="#" className="text-green-500 underline mt-4 block xl:mt-4">
        Or add your own campground
      </a>
    </Link>
  );
};

export default AddCampgroundLink;
