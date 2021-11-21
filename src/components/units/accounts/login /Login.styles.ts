import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8915a6;
`;

export const ContentsWrapper = styled.div`
  width: 390px;
  /* box-shadow: 1px 1px 1px 1px white; */
  font-family: "NotoSansKRregular";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 206px;
  @media screen and (min-width: 600px) {
    width: 489px;
    height: 65px;
    font-size: 20px;
  }
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

  @media screen and (min-width: 600px) {
    font-size: 87px;
  }
`;
export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    margin-top: 20px;
  }
`;
export const Account = styled.div`
  margin-top: 38px;

  @media screen and (min-width: 600px) {
    margin-top: 60px;
  }
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

  @media screen and (min-width: 600px) {
    width: 489px;
    height: 65px;
    font-size: 20px;
  }
`;

export const Error = styled.div`
  color: #ffffff;
  font-size: 10px;
  padding-left: 7px;
  margin-top: 8px;
  height: 8px;

  @media screen and (min-width: 600px) {
    font-size: 14px;
    height: 12px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 81px;

  @media screen and (min-width: 600px) {
    margin-top: 107px;
  }
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
  border-style: none;

  @media screen and (min-width: 600px) {
    width: 489px;
    height: 65px;
    font-size: 20px;
  }
  /* margin-bottom: 300px; */
`;
export const Signup = styled.div`
  color: #ffffff;
  margin-top: 5px;
  font-family: "NotoSansKRmedium";
  font-size: 5px;
  text-align: center;
  :hover {
    color: black;
  }

  @media screen and (min-width: 600px) {
    font-size: 12px;
  }
  /* margin-bottom: 300px; */
`;
