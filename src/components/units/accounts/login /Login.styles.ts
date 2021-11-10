import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: #8915a6;
  font-family: "NotoSansKRregular";
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 220px;
`;
export const Title = styled.div`
  font-size: 64px;
  color: #ffffff;
  font-family: "NotoSansitalic";
  font-weight: bold;
  line-height: 87px;
`;
export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 34px; */
`;
export const Account = styled.div`
  margin-top: 38px;
`;
export const AccountInfo = styled.input`
  width: 358px;
  height: 52px;
  padding-left: 24px;
  background-color: rgba(249, 249, 249, 0.8);
  border-radius: 4px;
  border: 0px solid rgba(249, 249, 249, 0.8);
  font-size: 16px;
  cursor: pointer;
`;
export const Error = styled.div`
  color: red;
`;
export const ButtonWrapper = styled.div`
  margin-top: 81px;
`;
export const Login = styled.button`
  width: 358px;
  height: 54px;
  color: #8915a6;
  font-family: "NotoSansKRmedium";
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 0ps solid #ffffff;
`;
