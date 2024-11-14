import ProjectCard from "./projectCard";
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
  
  export default function ProjectsList() {
    return (
      <div className="container mx-auto py-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }
  