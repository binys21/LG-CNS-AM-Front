import { Outlet } from "react-router-dom";

export default function Profiles() {
  return (
    <>
      <h1>사용자 목록</h1>
      <ul>
        <li>
          <Link to="/profiles/mrgo">고길동 프로파일</Link>
        </li>
        <li>
          <Link to="/profiles/mrhong">홍길동 프로파일</Link>
        </li>
        <li>
          <Link to="/profiles/none">없는 프로파일</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
