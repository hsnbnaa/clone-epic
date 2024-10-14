import NavbarHero from "../../elements/NavbarHero";
import Search from "../../elements/Search";

export default function HeaderHero() {
  return (
    <section className="flex items-center gap-7 bg-[#101014] sticky top-0 h-[100px] z-[999]">
      <Search />
      <ul className="flex px-1 gap-6">
        <NavbarHero />
      </ul>
    </section>
  );
}
