import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroPage from "./components/HeroPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ChooseUsContent from "./components/ChooseUsContent";

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
      <div className="h-screen"></div>
    </>
  );
}

export default App;
