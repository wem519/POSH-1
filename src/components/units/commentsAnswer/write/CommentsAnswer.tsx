import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./CommentsAnswer.queries";

const CommnetsWriteInput = styled.textarea`
  width: 390px;
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
  outline: none;
`;
const CommnetsInput = styled.input`
  width: 232px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
  outline: none;
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

export default function CommentsAnswer(props: any) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  // 대댓글 contents state
  const [contents, setContents] = useState("");
  // 대댓글 취소 함수
  const onClickIsOpen = () => {
    props.IsOpen(false);
  };
  // 대댓글 입력 저장 함수
  const onChangeAnswer = (e: any) => setContents(e.target.value);

  const onClickIsEdit = (e: any) => props.setIsEdit(false);

  // 대댓글 등록 함수
  const onClickSubmitAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: String(props.Comments?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.Comments?._id },
          },
        ],
      });
      props.IsOpen(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // 대댓글 수정 함수
  const onClickEditAnswer = async () => {
    if (contents === "") {
      alert("수정된 내용이 없습니다❗️");
      return;
    }
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.Comments?._id },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <CommnetsWriteInput
        autoFocus
        onChange={onChangeAnswer}
        defaultValue={props.isEdit ? props.el?.contents : ""}
      />
      <div style={{ display: "flex" }}>
        <CommnetsInput readOnly placeholder={contents.length + "/100"} />
        {props.isEdit ? (
          <CommentsBnt
            style={{ backgroundColor: "#B69ACB" }}
            onClick={onClickIsEdit}
          >
            취소
          </CommentsBnt>
        ) : (
          <CommentsBnt
            style={{ backgroundColor: "#B69ACB" }}
            onClick={onClickIsOpen}
          >
            취소
          </CommentsBnt>
        )}

        {props.isEdit ? (
          <CommentsBnt onClick={onClickEditAnswer}>수정</CommentsBnt>
        ) : (
          <CommentsBnt onClick={onClickSubmitAnswer}>등록</CommentsBnt>
        )}
      </div>
    </div>
  );
}
