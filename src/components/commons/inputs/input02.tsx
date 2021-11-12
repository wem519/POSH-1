import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;
const Label = styled.div`
  color: #8915a6;
`;
const InputBox = styled.textarea`
  border: 1px solid #b69acb;
  border-radius: 4px;
  width: 358px;
  height: 150px;
  padding-top: 17px;
  padding-left: 17px;
  margin-top: 3px;
  resize: none;
`;

export default function Input02(props: any) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <InputBox
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        {...props.register}
      />
    </Wrapper>
  );
}
