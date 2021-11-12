import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import CommnetsWriteUI from "./CommentsWrite.presenter";
import { CREATE_USEDITEM_QUESTION,FETCH_USEDITEM_QUESTIONS } from "./CommentsWrite.queries";

export default function CommentsWrite() {
  const router = useRouter()
  // 댓글 등록창 오픈 state
  const [isOpen, setIsOpen] = useState(false);
  // 댓글 내용 저장 state
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
    >(CREATE_USEDITEM_QUESTION);
  
  const onClickOpen = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false);
  };

  const onChangeComments = (e:any) => {
    setContents(e.target.value)
  }
  const onClickSubmitCommnets = async () => {
    if (contents === "") { 
      alert("댓글을 입력해주세요")
      return
    }
    try { 
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.poshId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.poshId) },
          },
        ],
      }); console.log("댓글등록!", result.data?.createUseditemQuestion._id);
      setContents("")
      setIsOpen(false)
    } catch (error) { console.log(error.message)}
  };
  return (
    <CommnetsWriteUI
      onClickOpen={onClickOpen}
      isOpen={isOpen}
      onClickClose={onClickClose}
      onChangeComments={onChangeComments}
      onClickSubmitCommnets={onClickSubmitCommnets}
      contents={contents}
    />
  );
}
