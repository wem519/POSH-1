import {
  CommentsBox,
  CommentsProfile,
  CommnetsNiname,
  CommentsProfileBox,
  Comments,
  Wrapper,
  CommentsDate,
  CommnetsEdit,
  CommentsEditWrapper,
  CommnetsWriteInput,
  CommnetsInput,
  CommentsBnt,
} from "./CommentsList.styles";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./CommentsList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsAnswer from "../../commentsAnswer/write/CommentsAnswer";
import CommentsAnswerTest from "../../commentsAnswer/list/CommentsAnswerList";

export default function CommentsListUIItems(props: any) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const [IsEdit, setIsEdit] = useState(false);

  const [contents, setContents] = useState("");
  // 대댓글 오픈 state
  const [IsOpenCommnetsAnswer, setIsOpenCommnetsAnswer] = useState(false);

  // 댓글 삭제 함수
  const onClickCommentsDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.el?._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.poshId) },
          },
        ],
      });
      alert("댓글이 삭제되었습니다❣️");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // 댓글 수정
  const onChangeCommentsEdit = (e: any) => {
    setContents(e.target.value);
  };

  const onClickIsEdit = () => setIsEdit(true);
  const onClickIsEditFalse = () => setIsEdit(false);
  const onClickIsOpenAnswer = () => setIsOpenCommnetsAnswer(true);
  // 댓글 수정 함수
  const onClickCommentsEdit = async () => {
    if (contents === "") {
      alert("답글을 입력해주세요✍🏻");
      return;
    }
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.poshId) },
          },
        ],
      });
      setIsEdit(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Wrapper>
      {!IsEdit && (
        <>
          <CommentsBox>
            <CommentsProfile src={props.el?.user.picture} />
            <CommentsProfileBox>
              <CommnetsNiname>{props.el?.user.name}</CommnetsNiname>
              <Comments>{props.el?.contents}</Comments>
              <CommentsDate>{props.el?.createdAt.slice(0, 10)}</CommentsDate>
              {props.userInfo?.fetchUserLoggedIn._id === props.el?.user._id ? (
                <CommentsEditWrapper>
                  <CommnetsEdit onClick={onClickIsEdit}>수정</CommnetsEdit>
                  <CommnetsEdit onClick={onClickCommentsDelete}>
                    삭제
                  </CommnetsEdit>
                </CommentsEditWrapper>
              ) : (
                <CommentsEditWrapper>
                  <CommnetsEdit onClick={onClickIsOpenAnswer}>
                    답글
                  </CommnetsEdit>
                </CommentsEditWrapper>
              )}
            </CommentsProfileBox>
          </CommentsBox>
          {/* 대댓글 Component */}
          {IsOpenCommnetsAnswer && (
            <CommentsAnswer
              IsOpen={setIsOpenCommnetsAnswer}
              Comments={props.el}
            />
          )}
          <CommentsAnswerTest id={props.el?._id} />
        </>
      )}
      {IsEdit && (
        <>
          <CommnetsWriteInput
            defaultValue={props.el?.contents}
            onChange={onChangeCommentsEdit}
          />
          <div style={{ display: "flex" }}>
            <CommnetsInput readOnly placeholder={contents.length + "/100"} />
            <CommentsBnt
              onClick={onClickIsEditFalse}
              style={{ backgroundColor: "#B69ACB" }}
            >
              취소
            </CommentsBnt>
            <CommentsBnt onClick={onClickCommentsEdit}>등록</CommentsBnt>
          </div>
        </>
      )}
    </Wrapper>
  );
}
