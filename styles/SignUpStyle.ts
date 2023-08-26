import styled from "styled-components";
import { DivScreenProps, TextScreenProps } from "./StyleInterfacer";

// 회색 상단바하단의 신청서 부분
const SignUpContainer = styled.div`
  width: 69.7%;
  height: 100%;

  padding: 170px 0 155px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #abc123;
`;

// 커스텀 이미지 박스
const SignUpImageBox = styled.div<DivScreenProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  padding: ${(props) => props.padding};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

// 커스텀 텍스트 박스
const SignUpText = styled.span<TextScreenProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
`;

// 로고 + 타이틀 + 점점점 있는 부분
const TopBox = styled.div`
  width: 100%;
  height: 175px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #fff;
`;

// 로고 + text 묶는 용도
const TopImageSet = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 기본정보 입력폼 + 지원동기 입력폼
const ContentBox = styled.div`
  width: 52.17%;
  height: 825px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #a232bb;
`;

// 약관 동의 부분 - 버튼까지
const BottomBox = styled.div`
  width: 91.3%;
  height: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #112211;
`;

export {
  SignUpContainer,
  TopBox,
  ContentBox,
  BottomBox,
  SignUpImageBox,
  SignUpText,
  TopImageSet
};
