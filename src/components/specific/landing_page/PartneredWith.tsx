import plumGuideLogo from "../../../assets/images/Plum Guide.svg";
import bookingsLogo from "../../../assets/images/booking.svg";
import airbnbLogo from "../../../assets/images/airbnb.svg";
const PartneredWith = () => {
  return (
    <div className="container mt-10">
      <h5>Partnered With:</h5>
      <div className="md:flex mt-2">
        <img src={bookingsLogo} alt="" />
        <img src={plumGuideLogo} alt="" />
        <img src={airbnbLogo} alt="" />
      </div>
    </div>
  );
};

export default PartneredWith;
