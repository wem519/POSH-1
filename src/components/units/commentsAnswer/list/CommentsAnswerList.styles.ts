import styled from "@emotion/styled";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 600px; */
`;
export const CommentsBox = styled.div`
  width: 390px;
  display: flex;
  padding: 12px 12px 0px 12px;
  /* background-color: gray; */
`;
export const CommentsProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  object-fit: cover;
  /* background-color: #8915a6; */
`;
export const CommentsProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommnetsNiname = styled.div`
  font-size: 14px;
  font-family: "NotoSansKRmedium";
  margin-right: 5px;
`;
export const Comments = styled.div`
  width: 222px;
  font-size: 14px;
  font-family: "NotoSansKRregular";
`;
export const CommentsDate = styled.div`
  font-size: 12px;
  font-family: "NotoSansitalic";
  color: #c4c4c4;
`;
export const CommentsEditWrapper = styled.div`
  display: flex;
`;
export const CommnetsEdit = styled.div`
  width: 28px;
  height: 28px;
  font-size: 14px;
  font-family: "NotoSansKRregular";
  color: #c4c4c4;
  margin-right: 5px;
  :hover {
    color: #8915a6;
    cursor: pointer;
  }
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
export const CommnetsInput = styled.input`
  width: 200px;
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
export const CommentsAnswerIcon = styled(SubdirectoryArrowRightIcon)`
  font-size: 10px;
  color: #8915a6;
  margin-left: 40px;
`;
