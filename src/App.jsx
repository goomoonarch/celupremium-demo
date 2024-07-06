import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { PromoBar } from "./components/PromoBar";

function App() {
  return (
    <div>
      <PromoBar />
      <NavBar />
      <Hero />
      <MainContent />

    </div>
  );
}

export default App;
