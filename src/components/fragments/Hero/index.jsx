import HeroBanner from "../../elements/HeroBanner";
import NavbarHero from "../../elements/NavbarHero";
import Search from "../../elements/Search";

const banner = [
  {
    source:
      "https://cdn2.unrealengine.com/en-pegi-egs-mobile-qr-code-breaker-1-1920x1080-986d135968e7.jpg?h=480&quality=medium&resize=1&w=854",
  },
  {
    source:
      "https://cdn2.unrealengine.com/en-egs-mobile-rewards-breaker-2-c8020bbb19a7.avif?h=480&quality=medium&resize=1&w=854",
  },
];

export default function Hero() {
  return (
    <section className="flex gap-8 max-w-[1600px] max-h-[441px] mb-16">
      {banner.map((item, index) => (
        <HeroBanner key={index} source={item.source} />
      ))}
    </section>
  );
}
