import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/sections/Features";
import Intro from "./components/sections/Intro";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import WorkingOn from "./components/sections/workingOn";
import Project from "./components/sections/ProjectsHome";
import MainLayout from "./layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      {/* <Features /> */}
      <Intro />
      <Project />
      <WorkingOn />
      {/* <Pricing /> */}
    </MainLayout>
  );
};

export default Home;
 
