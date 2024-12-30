import ButtonGradient from "./assets/svg/ButtonGradient";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProjectCard from "./components/projectCard";
const projects = [
    {
      id: 1,
      title: "Designing the future of education",
      description: "Designing a platform to help educators build better online courseware.",
      buttonText: "View project",
      buttonLink: "/education",
      demoImage: "/path/to/education-demo.png",
      isImageLeft: true,
    },
    {
      id: 2,
      title: "Video game progress tracking",
      description: "Design and development for a video game tracking app built in React Native.",
      buttonText: "View website",
      buttonLink: "/gaming",
      demoImage: "/path/to/gaming-demo.png",
      isImageLeft: false,
    },
  ];
  
function ProjectsList() {
    return (
      <div className="container mx-auto py-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }
const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Features />
        <Pricing />
        <ProjectsList />
        <Footer />
        <ScrollToTopButton />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;