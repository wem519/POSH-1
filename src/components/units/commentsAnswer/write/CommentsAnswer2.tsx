import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./CommentsAnswer.queries";

const CommnetsWriteInput = styled.textarea`
  width: 358px;
  height: 150px;
  padding: 12px 12px 0px 12px;
  border: #d3d3d3 1px solid;
  font-family: "NotoSansKRregular";
  margin-top: 10px;
  resize: none;
  display: block;
  ::placeholder {
    color: #d3d3d3;
    position: absolute;
    font-family: "NotoSansKRregular";
  }
`;
const CommnetsInput = styled.input`
  width: 200px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
`;
const CommentsBnt = styled.div`
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

export default function CommentsAnswer2(props) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  // 대댓글 contents state
  const [contents, setContents] = useState("");
  
  const onClickIsOpen = () => props.setIsOpenAnswer(false);
  const onChnageContents = (e) => setContents(e.target.value);
  // 대댓글 등록 함수
  const onClickSubmitAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: String(props.id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.id},
          },
        ],
      }); props.setIsOpenAnswer(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <>
        <CommnetsWriteInput autoFocus onChange={onChnageContents} />
        <div style={{ display: "flex" }}>
          <CommnetsInput readOnly placeholder={contents.length + "/100"} />
          <CommentsBnt
            style={{ backgroundColor: "#B69ACB" }}
            onClick={onClickIsOpen}
          >
            취소
          </CommentsBnt>
          <CommentsBnt onClick={onClickSubmitAnswer}>등록</CommentsBnt>
        </div>
      </>
    </>
  );
}
