import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import ProjectCard from "./components/ui/projectCard";
import MainLayout from "./layouts/MainLayout";
import { projects } from "./constants";

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
    <MainLayout>
        <Features />
        <Pricing />
        <ProjectsList />
    </MainLayout>
  );
};

export default Home;