import { useEffect, useState } from "react";

function InfoEffect() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeNickname = (e) => setNickname(e.target.value);
useEffect(()=>{
    console.log("렌더링이 완료되었습니다.");
    console.log({name,nickname});
    return()=> console.log("clean up",name) //컴포넌트가 언마운트 될 떄만 호출됨 
},[]);

  return (
    <>
      <div>
        <p>이름: {name}</p>
        <p>닉네임: {nickname}</p>
      </div>
      <div>
        <p>
          <input type="text" value={name} onChange={changeName} />
        </p>
        <p>
          <input type="text" value={nickname} onChange={changeNickname} />
        </p>
      </div>
    </>
  );
}
export default InfoEffect;
