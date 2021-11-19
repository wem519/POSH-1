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
        <option value="상의">top</option>
        <option value="하의">bottom</option>
        <option value="신발">shoes</option>
        <option value="가방">bags</option>
        <option value="기타">etc</option>
      </Select>
    </Wrapper>
  );
}
