const Mypage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <h1>마이페이지</h1>
    </>
  );
};
