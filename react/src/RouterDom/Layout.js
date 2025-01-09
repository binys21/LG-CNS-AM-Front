import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/info">정보</Link>
          </li>
          <li>
            <Link to="/profiles">프로파일</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
