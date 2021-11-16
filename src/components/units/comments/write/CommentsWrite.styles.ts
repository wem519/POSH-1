import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CommnetsWriteInput = styled.textarea`
  width: 390px;
  height: 150px;
  padding: 12px 12px 0px 12px;
  border: #d3d3d3 1px solid;
  font-family: "NotoSansKRregular";
  resize: none;
  display: block;
  ::placeholder {
    color: #d3d3d3;
    position: absolute;
    font-family: "NotoSansKRregular";
  }
`;
export const CommentsInputWrapper = styled.div`
  position: fixed;
  bottom: 36px;
`;
export const CommentsWrapper = styled.div`
  width: 390px;
  height: 42px;
  display: flex;
  position: fixed;
  bottom: 0;
  /* margin-top: 299px; */
`;
export const CommnetsInput = styled.input`
  width: 232px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
`;
export const CommentsInputWrite = styled.input`
  width: 311px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
`;
export const CommentsBnt = styled.div`
  width: 79px;
  height: 42px;
  background-color: #8915a6;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
`;
