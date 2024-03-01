import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
