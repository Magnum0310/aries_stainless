import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroPage from "./components/HeroPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ChooseUsContent from "./components/ChooseUsContent";
import ServicePage from "./components/ServicePage";
import ServiceContectPage from "./components/ServiceContectPage";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroPage />
      <ChooseUsPage />
      <ChooseUsContent />
      <ServicePage />
      <ServiceContectPage />
      <div className="h-screen w-full bg-red-500"></div>
    </>
  );
}

export default App;
