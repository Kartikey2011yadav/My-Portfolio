import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features";
import Collaboration from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Projects = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Projects;
