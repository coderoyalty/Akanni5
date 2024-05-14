import "./App.css";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import TechStack from "./components/tech-stack.tsx";
import Project from "./components/project.tsx";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import hyperImg from "./assets/hyper.png";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col">
          <h1 className="">My Tech Stack</h1>
          <TechStack />
        </div>
      </div>
      <div className="w-full my-4 px-2" id="projects">
        <h1 className="text-center pt-4">Projects</h1>
        <Project
          imageSrc={hyperImg}
          component={
            <div>
              <h1 className="text-center mb-2">Hyper-Engine</h1>
              <p>
                I've developed a game engine showcasing my expertise in C++ and
                OpenGL.
                <br />
                It's a versatile framework with Lua scripting, ~ideal~ for rapid
                prototyping and well-documented for ease of use.
              </p>

              <div className="flex items-center justify-between">
                <div className="space-x-2">
                  <span className="badge badge-primary">C++</span>
                  <span className="badge badge-primary">OpenGL</span>
                </div>

                <div className="join mt-1">
                  <a
                    href="https://github.com/coderoyalty/hyper"
                    className="btn btn-square btn-ghost join-item"
                  >
                    <GitHubLogoIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default App;
