import DiscoverContent from "../../elements/DiscoverContent";
import DiscoverHeader from "../../elements/DiscoverHeader";

const content = [
  {
    img_url:
      "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2GoldEdition_DeepSilverDambusterStudios_Editions_S2_1200x1600-ab4fadf2fc20e08358d080c4fca3c029_1200x1600-ab4fadf2fc20e08358d080c4fca3c029?h=480&quality=medium&resize=1&w=360",
    title: "Dead Island 2 Gold Edition",
    price: "IDR 855,000",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_TheFinalShapeAnnualPass_S4_1200x1600_1200x1600-e420b82e1a29decd1da4463d4f4ddd1f?h=480&quality=medium&resize=1&w=360",
    title: "Destiny 2: The Final Shape + Annual Pass",
    price: "IDR 1,150,000",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077UltimateEdition_CDPROJEKTRED_Editions_S2_1200x1600-81442c61fd09b45ecd03add7c0c3afdd?h=480&quality=medium&resize=1&w=360",
    title: "Cyberpunk 2077: Ultimate Edition",
    price: "IDR 933,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/spt-assets/57015e643399448f8139291daa15bfc2/f1-manager-2024-15uhb.jpg?h=480&quality=medium&resize=1&w=360",
    title: "F1® Manager 2024",
    price: "IDR 364,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2DeluxeEdition_RemedyEntertainment_Editions_S2_1200x1600-db032e8c839da2be59801023a4cdf083?h=480&quality=medium&resize=1&w=360",
    title: "Alan Wake 2 Deluxe Edition",
    price: "IDR 798,700",
  },

  {
    img_url:
      "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait Store Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360",
    title: "Grand Theft Auto V: Premium Edition",
    price: "IDR 300,750",
  },
];

export default function Spotlight() {
  return (
    <section className="flex flex-col mb-16">
      <DiscoverHeader title="End of Summer Sale Spotlight" />
      <div className="flex gap-5">
        {content.map((content, index) => (
          <DiscoverContent
            key={index}
            img_url={content.img_url}
            title={content.title}
            price={content.price}
          />
        ))}
      </div>
    </section>
  );
}
