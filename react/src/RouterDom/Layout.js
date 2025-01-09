import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? { color: red } : undefined)}
            >
              소개
            </NavLink>
          </li>
          <li>
            <Link to="/info">정보</Link>
          </li>
          <li>
            <Link to="/profiles">프로파일</Link>
          </li>
        </ul>
        <button onClick={() => navigate(-1)}>이전 페이지로 이동 </button>
        <button onClick={() => navigate("/info")}>정보 페이지로 이동</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
