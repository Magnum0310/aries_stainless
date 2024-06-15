import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroPage from "./components/HeroPage";
import ChooseUsPage from "./components/ChooseUsPage";
import ChooseUsContent from "./components/ChooseUsContent";
import ServicePage from "./components/ServicePage";
import ServiceContectPage from "./components/ServiceContectPage";
import ProjectPage from "./components/ProjectsPage";
import ProjectsContent from "./components/ProjectsContent";
import ContactPage from "./components/ContactPage";
import AnimateSquare from "./components/animations/AnimateSquare";
import AnimateCircle from "./components/animations/AnimateCircle";
import AnimateCurveLine from "./components/animations/AnimateCurveLine";
import { StatusProvider } from "./components/context/StatusContext";
import Lines from "./components/animations/AnimateLine";

import TEST from "./components/animations/TEST";

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
    <StatusProvider>
      {/* <AnimateCurveLine /> */}
      <div className="">
        <HeroPage />
      </div>
      <div className="">
        <ChooseUsPage />
      </div>
      <AnimateSquare />
      <ChooseUsContent />
      <ServicePage />
      <ServiceContectPage />
      <ProjectPage />
      <div className="md:mx-10 xl:mx-32">
        <ProjectsContent />
      </div>
      <AnimateCircle />
      <div className="md:mx-10 xl:mx-32">
        <ContactPage />
      </div>
    </StatusProvider>
  );
}

export default App;
