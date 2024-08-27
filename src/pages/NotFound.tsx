import notFoundImg from "@/assets/images/not_found.svg";
const NotFound = () => {
  return (
    <div>
      <div className="container-sm h-screen my-auto lg:w-2/5 mx-auto">
          <img src={notFoundImg} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
