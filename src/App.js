import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import OneGeneration from "./pages/OneGeneration";
import TwoGeneration from "./pages/TwoGeneration";
import ThreeGeneration from "./pages/ThreeGeneration";
import FourGeneration from "./pages/FourGeneration";
import FiveGeneration from "./pages/FiveGeneration";
import SixGeneration from "./pages/SixGeneration";
import SevenGeneration from "./pages/SevenGeneration";
import EightGeneration from "./pages/EightGeneration";
import NineGeneration from "./pages/NineGeneration";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onegeneration" element={<OneGeneration />} />
          <Route path="/twogeneration" element={<TwoGeneration />} />
          <Route path="/threegeneration" element={<ThreeGeneration />} />
          <Route path="/fourgeneration" element={<FourGeneration />} />
          <Route path="/fivegeneration" element={<FiveGeneration />} />
          <Route path="/sixgeneration" element={<SixGeneration />} />
          <Route path="/sevengeneration" element={<SevenGeneration />} />
          <Route path="/eightgeneration" element={<EightGeneration />} />
          <Route path="/ninegeneration" element={<NineGeneration />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
