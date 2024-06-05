import Project from "../components/project.tsx";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import MarkdownRenderer from "../components/utils/md-renderer.tsx";

import projects from "../projects.json";

const Projects = () => {
  return (
    <div className="w-full mt-4 px-2 bg-slate-950/100" id="projects">
      <h1 className="text-center pt-4">Projects</h1>

      {projects.map((project, idx) => (
        <div key={idx} className="sticky top-0 bg-inherit">
          <div className="reveal">
            <Project
              imageSrc={project.image}
              component={
                <>
                  <MarkdownRenderer content={project.content} />

                  <span className="mt-2 badge badge-info">
                    {project.status}
                  </span>
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      {project.tags.map((tag, idx) => (
                        <span className="badge badge-secondary" key={idx}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="join">
                      {project.links.map((link, idx) => {
                        return (
                          <a
                            key={idx}
                            href={link.url}
                            className="btn btn-square btn-ghost join-item"
                          >
                            {link.type == "github" ? (
                              <GitHubLogoIcon className="w-6 h-6" />
                            ) : (
                              <Link1Icon className="w-6 h-6" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
