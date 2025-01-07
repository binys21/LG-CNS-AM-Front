import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Profiler } from "react";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/mrgo">고길동 프로파일</Link>
        </li>
        <li>
          <Link to="/profile/mrhong">홍길동 프로파일</Link>
        </li>
        <li>
          <Link to="/profile/none">존재하지 않는 프로파일</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/profile/:username" element={<Profiler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
