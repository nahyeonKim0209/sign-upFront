import {
  SignUpImageBox,
  SignUpText,
  TopBox,
  TopImageSet
} from "@/styles/SignUpStyle";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Pointer from "../../public/images/3point.svg";

const SignupTopBoxScreen = function () {
  return (
    <TopBox>
      <TopImageSet>
        <SignUpImageBox width="110px" height="55px">
          <Image src={Logo} fill={true} alt="" />
        </SignUpImageBox>
        <SignUpText
          fontSize="32px"
          fontWeight="700"
          color="#000"
          lineHeight="32px"
          padding="5px 0 0 0"
        >
          회원 모집 신청서
        </SignUpText>
      </TopImageSet>
      <SignUpImageBox width="50px" height="5px">
        <Image src={Pointer} fill={true} alt="" />
      </SignUpImageBox>
    </TopBox>
  );
};

export default SignupTopBoxScreen;
