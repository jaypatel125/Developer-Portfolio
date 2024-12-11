import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-14 lg:my-24">
      <div className="flex justify-center lg:py-8">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-8 left-[41%] translate-x-1/2 filter blur-3xl opacity-20"></div>
        <div className="flex mt-[3rem] items-center">
          <span className="w-24 h-[2px] bg-violet-800"></span>
          <span className="bg-gradient-to-r to-blue-800 from-violet-900 w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-blue-900"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 5).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto lg:max-w-[70%] max-w-full sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
