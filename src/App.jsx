import React, { useEffect } from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import feather from "feather-icons";
import Banner from "./components/fragments/Banner";
import Discover from "./components/fragments/Discover";
import Spotlight from "./components/fragments/Spotlight";
import axios from "axios";
import Deals from "./components/fragments/Deals";
import Free from "./components/fragments/Free";
import HeaderHero from "./components/fragments/HeaderHero";
import PlayFree from "./components/fragments/PlayFree";

function App() {
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <Header />
      <main className="flex flex-col max-[1920px]:mx-[12.5%] mx-[18%] mb-[1.5%] max-w-[1600px]">
        <HeaderHero />
        <Hero />
        <Banner />
        <Discover />
        <Spotlight />
        <Deals />
        <Free />
        <PlayFree />
      </main>
    </>
  );
}

export default App;
