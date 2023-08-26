import { BottomBox, ContentBox, SignUpContainer } from "@/styles/SignUpStyle";
import SignupTopBoxScreen from "./SignUpTopBox";
import { useState } from "react";

/**
 *
 * @returns 회원가입 입력부분 화면 전체를 보여줌
 */
const SignupScreen = function () {
  const [userInfo, setUserInfo] = useState({});
  return (
    <SignUpContainer>
      {/* 로고 + ... 부분 */}
      <SignupTopBoxScreen />
      <ContentBox></ContentBox>
      <BottomBox></BottomBox>
    </SignUpContainer>
  );
};

export default SignupScreen;
