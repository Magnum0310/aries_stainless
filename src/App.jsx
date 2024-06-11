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
import Stagger from "./components/animations/StaggerText";

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
      <ProjectPage />
      <ProjectsContent />
      <ContactPage />
      <div className="h-[50vh] w-full bg-lime-500">
        <Stagger
          text={"HELLO"}
          className={
            "flex h-full w-full items-center justify-center bg-amber-500 text-5xl"
          }
        />
      </div>
    </>
  );
}

export default App;
