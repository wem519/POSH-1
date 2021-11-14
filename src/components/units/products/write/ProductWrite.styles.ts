import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 390px;
  height: auto;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  color: #8915a6;
`;

export const InputBox = styled.input`
  border: 1px solid #b69acb;
  border-radius: 4px;
  width: 358px;
  height: 52px;
`;

export const UploadBox = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IProps {
  isValid: boolean;
}

export const SubmitBtn = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "#8915a6" : "gray")};
  color: #fff;
  width: 358px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 84px;
`;

export const EditBtn = styled.button`
  background-color: #8915a6;
  color: #fff;
  width: 358px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 84px;
`;

export const ErrMsg = styled.div`
  color: red;
  margin-left: 2px;
`;

export const Select = styled.select`
  border-style: none;
  border: 1px solid #b69acb;
  border-radius: 4px;
  margin-top: 8px;
  height: 45px;
`;

export const InputFile = styled.input`
  display: none;
`;
