import placehodlerImg from "@/assets/images/camps/Buloy_Springs.jpg";
function CampCard() {
  return (
    <>
      <div className="container border rounded p-20">
        <div className="flex flex-col">
          <img src={placehodlerImg} alt="" />
          <div className="flex justify-between items-center mt-2 mb-2">
            <h1 className="font-bold lg:text-2xl  ">Mount Ulap</h1>
            <h1>$104.99/night</h1>
          </div>
          <p className="text-gray-500">
            Mount IJIap is a 7.7 kilometer moderately trafficked point-to-point
            trail located near Tuba, Benguet, Philippines that offers the chance
            to see wildlife and is rated as moderate. The trail is primarily
            used for hiking.
          </p>
          <p>Submitted by Andrew Mike</p>
        </div>
      </div>
    </>
  );
}

export default CampCard;
