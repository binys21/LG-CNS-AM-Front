import { useState } from "react";

function InfoEffect() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeNickname = (e) => setNickname(e.target.value);
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
