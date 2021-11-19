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

export default function Select02(props: any) {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Select {...props.register}>
        <option value="" hidden>
          카테고리를 선택해주세요.
        </option>
        <option value="top">top</option>
        <option value="bottom">bottom</option>
        <option value="shoes">shoes</option>
        <option value="bag">bag</option>
        <option value="etc">etc</option>
      </Select>
    </Wrapper>
  );
}
