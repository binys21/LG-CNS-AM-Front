import { useParams } from "react-router-dom";

const users = {
  mrgo: {
    name: "고길동",
    desc: "둘리를 싫어하는 자",
  },
  mrhong: {
    name: "홍길동",
    desc: "호부호형을 원하는 자",
  },
};

const Profile = () => {
  const params = useParams();
  //파라미터에서 username값을 추출해서 users객체에서 일치하는 사용자 정보 추출
  const profile = users[params.username];
  return (
    <>
      {profile ? (
        <>
          <h1>{profile.name}</h1>
          <h2>{profile.desc}</h2>
        </>
      ) : (
        <h1>일치하는 사용자가 없습니다.</h1>
      )}
    </>
  );
};
