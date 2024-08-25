import CampgroundCard from "@/components/specific/home_page/CampgroundCard";
import mountUlapCamp from "@/assets/images/camps/Mount_Ulap.png";
import calaguesIslandsCamp from "@/assets/images/camps/Calagus_Islands.jpg";
import onayBeach from "@/assets/images/camps/Onay_Beach.jpg";
import sevenSistersWaterfall from "@/assets/images/camps/Seven_Sisters_Waterfall.jpg";
import latikReverside from "@/assets/images/camps/Latik_Riverside.jpg";
import buloySprings from "@/assets/images/camps/Buloy_Springs.jpg";
const CampgroundsSection = () => {
  const cards = [
    {
      image: mountUlapCamp,
      title: "Mount Ulap",
      description:
        "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    },
    {
      image: calaguesIslandsCamp,
      title: "Calaguas Islands",
      description:
        "A paradise of islands that can rival the white sand beauty of Boracay.",
    },
    {
      image: onayBeach,
      title: "Onay Beach",
      description:
        "This is one of the best beach camping sites, beautiful and pristine.",
    },
    {
      image: sevenSistersWaterfall,
      title: "Seven Sisters Waterfall",
      description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    },
    {
      image: latikReverside,
      title: "Latik Riverside",
      description:
        "Philippines is one of the most dazzling countries in all of Asia.",
    },
    {
      image: buloySprings,
      title: "Buloy Springs",
      description:
        "This is one of the best beach camping sites, beautiful and pristine.",
    },
  ];

  return (
    <div className="mt-10 px-5 max-w-screen-2xl mx-auto xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <CampgroundCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CampgroundsSection;
