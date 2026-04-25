import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <>
      <ParticleBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </>
  );
}

export default App;