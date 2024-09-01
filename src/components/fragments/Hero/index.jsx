import Banner from "../../elements/Hero/Banner";
import Header from "../../elements/Hero/Header";

export default function Hero() {
  return (
    <section className="flex flex-col gap-9 mb-16">
      <Header />
      <Banner />
    </section>
  );
}
