import styled from "styled-components";

const RootContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

//전체 큰 상단 화면
const TopContainer = styled.div`
  width: 100%;
  height: 2303px;
  /* height: calc(100% - 337px); */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

// 상단에서 흰색 부분 (실질적 잡업 부분)
const TopIndexContainer = styled.div`
  width: calc(100% - 31.26%);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//사이드에 검은 부분
const TopSideContainer = styled.div`
  width: 15.63%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #000;
`;

//전체 큰 화면 하단 - footer
const BottomContainer = styled.div`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #afafaf;
`;

export {
  TopContainer,
  TopIndexContainer,
  TopSideContainer,
  BottomContainer,
  RootContainer
};
