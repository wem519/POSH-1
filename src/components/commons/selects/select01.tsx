import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;
const Label = styled.div`
  color: #8915a6;
`;
const Select = styled.select`
  border-style: none;
  border: 1px solid #b69acb;
  border-radius: 4px;
  margin-top: 3px;
  height: 45px;
  padding: 0 13px;
`;

export default function Select01(props: any) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Select {...props.register}>
        <option value="직거래">직거래</option>
        <option value="택배">택배</option>
        <option value="직거래+택배">직거래+택배</option>
      </Select>
    </Wrapper>
  );
}
