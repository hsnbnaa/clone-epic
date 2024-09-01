import React, { useEffect } from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import feather from "feather-icons";
import Banner from "./components/fragments/Banner";

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
      </main>
    </>
  );
}

export default App;
