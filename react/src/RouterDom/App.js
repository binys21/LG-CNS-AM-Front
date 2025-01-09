import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Profiler } from "react";
import Profiles from "./Profiles";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/profiles" element={<Profiles />}>
            <Route path=":username" element={<Profiler />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
