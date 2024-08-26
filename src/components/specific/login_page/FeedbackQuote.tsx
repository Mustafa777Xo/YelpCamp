import userImg from "@/assets/images/User_Testimonial.svg";
const FeedbackQuote = () => {
  return (
    <>
      <div className="container-sm px-5 md:p-40">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-4">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </h1>
          <div className="flex gap-2">
            <img src={userImg} alt="" />
            <div className="flex flex-col">
              <h2 className="font-bold">May Andrews</h2>
              <p>Professional Hiker</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackQuote;
