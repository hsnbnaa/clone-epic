import HeroBanner from "../../elements/HeroBanner";
import NavbarHero from "../../elements/NavbarHero";
import Search from "../../elements/Search";

export default function Hero() {
  return (
    <section className="flex flex-col gap-9 mb-16">
      <div className="flex items-center gap-7 bg-[#101014] ">
        <Search />
        <ul className="flex px-1 gap-6">
          <NavbarHero />
        </ul>
      </div>
      <HeroBanner />
    </section>
  );
}
