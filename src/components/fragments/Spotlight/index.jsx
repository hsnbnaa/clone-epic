import DiscoverContent from "../../elements/DiscoverContent";
import DiscoverHeader from "../../elements/DiscoverHeader";

const content = [
  {
    img_url:
      "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png?h=480&quality=medium&resize=1&w=360",
    title: "Black Myth: Wukong",
    price: "IDR 699,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/spt-assets/8deae61b9cf54e23bb15cd78b02f3ef7/gori-cuddly-carnage-134sw.jpg?h=480&quality=medium&resize=1&w=360",
    title: "Gori Cuddly Carnage",
    price: "IDR 137,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/spt-assets/342f6833f1574e19ba6bb8337edbc522/death-noodle-delivery-1rfxa.png?h=480&quality=medium&resize=1&w=360",
    title: "Death Noodle Delivery",
    price: "IDR 34,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/offer/42c70202dc684966a827bfcb7b49ac5f/EGS_MonsterJamShowdown_MilestoneSrl_S2_1200x1600-a819ba968f7f76350b1fa9bc1ee97f28?h=480&quality=medium&resize=1&w=360",
    title: "Monster Jam™ Showdown",
    price: "IDR 699,999",
  },
  {
    img_url:
      "https://cdn1.epicgames.com/offer/333cce509c6b413c852e5177f19f8e84/EGS_EASPORTSMaddenNFL25_Tiburon_S2_1200x1600-289740792de6bbf7eefe8c40301b4077?h=480&quality=medium&resize=1&w=360",
    title: "EA SPORTS™ Madden NFL 25",
    price: "IDR 799,000",
  },

  {
    img_url:
      "https://cdn1.epicgames.com/spt-assets/94717ce5197c45919cce272f7e23c1f1/deathbound-1x2oq.jpg?h=480&quality=medium&resize=1&w=360",
    title: "Deathbound",
    price: "IDR 299,999",
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
