import "./App.css";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import Projects from "./components/projects.tsx";
import TechStack from "./components/tech-stack.tsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col reveal">
            <h1 className="">My Tech Stack</h1>
            <TechStack />
          </div>
        </div>
        <Projects />
      </div>
    </>
  );
}

export default App;
