import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;
const Label = styled.div`
  color: #8915a6;
`;
const InputBox = styled.input`
  border: 1px solid #b69acb;
  border-radius: 4px;
  width: 358px;
  height: 52px;
  padding-left: 17px;
  margin-top: 3px;
`;

export default function Input01(props: any) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <InputBox
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        {...props.register}
      />
    </Wrapper>
  );
}
