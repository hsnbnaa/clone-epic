import React, { useEffect } from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import feather from "feather-icons";
import Banner from "./components/fragments/Banner";
import Discover from "./components/fragments/Discover";
import Spotlight from "./components/fragments/Spotlight";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <Header />
      <main className="flex flex-col mx-[18%] my-[1.5%] max-w-[1600px]">
        <Hero />
        <Banner />
        <Discover />
        <Spotlight />
      </main>
    </>
  );
}

export default App;
