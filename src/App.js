import { HashRouter, Route, Routes } from "react-router-dom";
import OneGeneration from "./pages/OneGeneration";
import TwoGeneration from "./pages/TwoGeneration";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<OneGeneration />} />
          <Route path="/twogeneration" element={<TwoGeneration />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
