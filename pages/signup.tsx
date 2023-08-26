import SignupScreen from "@/component/signup/SignUpBox";
import {
  BottomContainer,
  RootContainer,
  TopContainer,
  TopIndexContainer,
  TopSideContainer
} from "@/styles/LayoutStyle";
import { NextPage } from "next";

// 회원모집 신청서 전체 페이지
const SignUp: NextPage = function () {
  return (
    <RootContainer>
      <TopContainer>
        <TopSideContainer />
        <TopIndexContainer>
          <SignupScreen />
        </TopIndexContainer>
        <TopSideContainer />
      </TopContainer>
      <BottomContainer></BottomContainer>
    </RootContainer>
  );
};

export default SignUp;
