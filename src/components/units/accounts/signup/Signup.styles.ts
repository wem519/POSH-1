import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";

export const Wrapper = styled.div`
  width: 390px;
  /* height: 844px; */
  padding-bottom: 67px;
  background-color: #8915a6;
  font-family: "NotoSansKRregular";
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 75px;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  background-color: #f1f1f1;
  font-family: "NotoSansregular";
  font-style: italic;
  font-size: 64px;
  color: #8915a6;
  padding-right: 10px;
`;
export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-content: center; */
  padding-left: 16px;
  /* margin-top: 30px; */
`;
export const AccountInfo = styled.div`
  /* padding-top: 17px; */
  margin-top: 30px;
`;
export const Done = styled(DoneIcon)`
  font-size: 30px;
  color: #8915a6;
  position: absolute;
  right: 40px;
  top: 17px;
`;
export const Error = styled.div`
  color: #ffffff;
  padding-top: 8px;
  padding-left: 8px;
  font-size: 10px;
  height: 8px;
`;
export const Label = styled.label`
  color: #ffffff;
`;
export const AccountInput = styled.input`
  width: 358px;
  height: 52px;
  border-radius: 4px;
  border: 0px solid #ffffff;
  padding-left: 24px;
  margin-top: 8px;
`;
export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
export const Signup = styled.button`
  width: 358px;
  height: 54px;
  border-radius: 4px;
  border: 0px solid #ffffff;
  color: #8915a6;
`;
