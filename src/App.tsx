import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import "./App.css";
import TechStack from "./components/tech-stack.tsx";

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
      <div className="container"></div>
    </>
  );
}

export default App;
