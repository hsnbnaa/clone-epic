import BannerLeft from "../../elements/BannerLeft";
import BannerRight from "../../elements/BannerRight";

const item = [
  {
    source:
      "https://cdn2.unrealengine.com/egs-star-wars-outlaws-carousel-thumb-1200x1600-22a60ae26111.png?h=128&quality=medium&resize=1&w=96",
    title: "Star Wars Outlaws",
  },
  {
    source:
      "https://cdn2.unrealengine.com/en-egs-black-myth-wukong-carousel-thumb-1200x1600-cb8e6720c073.jpg?h=128&quality=medium&resize=1&w=96",
    title: "Black Myth: Wukong",
  },
  {
    source:
      "https://cdn2.unrealengine.com/egs-wh40k-space-marine-2-carousel-thumb-1200x1600-816083ecacc3.jpg?h=128&quality=medium&resize=1&w=96",
    title: "Warhammer 40,000: Space Marine 2",
  },
  {
    source:
      "https://cdn2.unrealengine.com/en-egs-genshin-impact-5-0-carousel-thumb-1200x1600-a9a129d22252.png?h=128&quality=medium&resize=1&w=96",
    title: "Genshin Impact",
  },
  {
    source:
      "https://cdn2.unrealengine.com/egs-monster-jam-showdown-carousel-thumb-1200x1600-9b82c2d81921.jpeg?h=128&quality=medium&resize=1&w=96",
    title: "Monster Jam: Showdown",
  },
  {
    source:
      "https://cdn2.unrealengine.com/egs-squirrel-with-a-gun-carousel-thumb-1200x1600-e0ed91b15a1f.jpg?h=128&quality=medium&resize=1&w=96",
    title: "Squirrel with a Gun",
  },
];

export default function Banner() {
  return (
    <section className="flex mb-16">
      <BannerLeft />
      <div className="ml-8 w-[256px] h-[120px]">
        <ul className="flex flex-col">
          {item.map((item, index) => (
            <BannerRight key={index} source={item.source} title={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}
