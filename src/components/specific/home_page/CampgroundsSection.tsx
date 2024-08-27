import CampgroundCard from "@/components/specific/home_page/CampgroundCard";
import mountUlapCamp from "@/assets/images/camps/Mount_Ulap.png";
import calaguesIslandsCamp from "@/assets/images/camps/Calagus_Islands.jpg";
import onayBeach from "@/assets/images/camps/Onay_Beach.jpg";
import sevenSistersWaterfall from "@/assets/images/camps/Seven_Sisters_Waterfall.jpg";
import latikReverside from "@/assets/images/camps/Latik_Riverside.jpg";
import buloySprings from "@/assets/images/camps/Buloy_Springs.jpg";
import { Link } from "react-router-dom";
const CampgroundsSection = () => {
  const cards = [
    {
      id: 1,
      image: mountUlapCamp,
      title: "Mount Ulap",
      description:
        "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    },
    {
      id: 2,
      image: calaguesIslandsCamp,
      title: "Calaguas Islands",
      description:
        "A paradise of islands that can rival the white sand beauty of Boracay.",
    },
    {
      id: 3,
      image: onayBeach,
      title: "Onay Beach",
      description:
        "This is one of the best beach camping sites, beautiful and pristine.",
    },
    {
      id: 4,
      image: sevenSistersWaterfall,
      title: "Seven Sisters Waterfall",
      description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    },
    {
      id: 5,
      image: latikReverside,
      title: "Latik Riverside",
      description:
        "Philippines is one of the most dazzling countries in all of Asia.",
    },
    {
      id: 6,
      image: buloySprings,
      title: "Buloy Springs",
      description:
        "This is one of the best beach camping sites, beautiful and pristine.",
    },
  ];

  return (
    <div className="mt-10 px-5 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link to={`/camp/${card.id}`}>
            <CampgroundCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CampgroundsSection;
