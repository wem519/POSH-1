import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-top: 50px;
  position: relative;
  bottom: 0px;
  height: 200px;
  width: 100vw;
  color: #555;
  font-family: "NotoSansKRregular";
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const ContentsWrapper = styled.div`
  display: flex;
  width: 900px;
`;
const ContentsBox = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
  padding-right: 50px;
`;
const Contents = styled.div`
  font-size: 12px;
  cursor: pointer;
`;
const Copyright = styled.div`
  padding-top: 10px;
`;

export default function LayoutFooterPC() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <ContentsBox>
          <Contents>CONTAXT US</Contents>
          <Contents>ACCOUNT INFORMATION</Contents>
          <Contents>INSTAGRAM</Contents>
          <Contents>FAQ</Contents>
          <Copyright>©Posh Market Inc.</Copyright>
        </ContentsBox>
        <ContentsBox>
          <Contents>POSH CEO: EUIMYEONG WOO/JIWON LEE/JUYEON YOON</Contents>
          <Contents>
            ADDRESS: 300, DIGITAL-RO, GURO-GU, SEOUL, REPUBLICK OF KOREA
          </Contents>
          <Contents>COPYRIGHT POSH ALL RIGHTS RESERVED</Contents>
        </ContentsBox>
      </ContentsWrapper>
    </Wrapper>
  );
}
