import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Profiler } from "react";
import Profiles from "./Profiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profiler />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
