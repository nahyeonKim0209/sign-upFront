import type { NextPage } from "next";
import SignUp from "./signup";

// 사용자가 먼저 보여주는 페이지 - 홈 지정
const Home: NextPage = function () {
  return <SignUp />;
};

export default Home;
