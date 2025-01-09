import { useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <>
      <h1>로그인 페이지</h1>
      <input
        type="text"
        placeholder="아이디를 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input type="password" placeholder="비밀번호 입력" value={pw} />
    </>
  );
};
export default Login;
