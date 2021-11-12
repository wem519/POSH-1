import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #8915a6;
  width: 390px;
  padding-top: 44px;
  padding-bottom: 11px;
  text-align: center;
  font-family: "NotoSansitalic";
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;

export default function LayoutHeader() {
  return (
    <Wrapper>
      {/* <img src="/images/logo.png" /> */}
      POSH
    </Wrapper>
  );
}
