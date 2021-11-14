import InfiniteScroll from "react-infinite-scroller";
import CommentsListUIItems from './CommentsList.presenterItems'

export default function CommentsListUI(props) {
  if (!props.data?.fetchUseditemQuestions.length) return <></>
  
  return (
    <div
      style={{
        paddingBottom: "40px",
      }}
    >
      <InfiniteScroll pageStart={0} loadMore={props.lodeMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el: any, index) => (
          <CommentsListUIItems key={el._id} el={el} userInfo={props.userInfo} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
