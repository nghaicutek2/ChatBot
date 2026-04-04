import './index.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-surface text-on-surface">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Footer />
    </div>
  );
}

export default App;