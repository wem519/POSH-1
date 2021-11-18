import {
  Wrapper,
  CommentsWrapper,
  CommnetsInput,
  CommentsBnt,
  CommnetsWriteInput,
  CommentsInputWrapper,
  CommentsInputWrite,
} from "./CommentsWrite.styles";

export default function CommentsWriteUI(props: any) {
  return (
    <Wrapper>
      {props.isOpen && (
        <CommentsInputWrapper>
          <CommnetsWriteInput
            placeholder="아름다운 인터넷 문화를 만들어주세요"
            maxLength={100}
            autoFocus
            onChange={props.onChangeComments}
          />
        </CommentsInputWrapper>
      )}
      <CommentsWrapper>
        {props.isOpen ? (
          <>
            <CommnetsInput placeholder={props.contents.length + "/100"} />
            <CommentsBnt
              onClick={props.onClickClose}
              style={{ backgroundColor: "#B69ACB" }}
            >
              취소
            </CommentsBnt>
            <CommentsBnt onClick={props.onClickSubmitCommnets}>
              등록
            </CommentsBnt>
          </>
        ) : (
          <>
            <CommentsInputWrite
              placeholder="답글을 달아주세요"
              readOnly
              onClick={props.onClickOpen}
            />
            <CommentsBnt onClick={props.onClickSubmitCommnets}>
              등록
            </CommentsBnt>
          </>
        )}
      </CommentsWrapper>
    </Wrapper>
  );
}
