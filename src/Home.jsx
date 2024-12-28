import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import WorkingOn from "./components/workingOn";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Project from "./components/ProjectsHome";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Features /> */}
        <Intro />
        <Project />
        <WorkingOn />
        {/* <Pricing /> */}
        <Footer />
        <ScrollToTopButton />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
 