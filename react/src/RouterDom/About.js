import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  /*
  const location = useLocation();
  const quries = qs.parse(location.search, { ignoreQueryPrefix: true });
  */
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  return (
    <div>
      <h1>About</h1>
      <h2>react-route-dom example</h2>
      {detail === "true" && <h2>상세 내역입니다.</h2>}
    </div>
  );
};
export default About;
