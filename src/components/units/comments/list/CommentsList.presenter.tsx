import InfiniteScroll from "react-infinite-scroller";
import CommentsListUIItems from "./CommentsList.presenterItems";
import styled from "@emotion/styled";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const Wrpper = styled.div`
  background-color: #8915a6;
  width: 390px;
  height: 42px;
  margin-bottom: 10px;
  @media screen and (min-width: 390px) {
    display: none;
  }
`;
const BackButtonDiv = styled.div`
  width: 28px;
  height: 28px;
  padding-left: 16px;
  cursor: pointer;
`;

export default function CommentsListUI(props: any) {
  if (!props.data?.fetchUseditemQuestions.length)
    return (
      <Wrpper>
        <BackButtonDiv onClick={props.onClickMoveBack}>
          <ArrowBackIosOutlinedIcon style={{ color: "#fff" }} />
        </BackButtonDiv>
      </Wrpper>
    );

  return (
    <>
      <Wrpper>
        <BackButtonDiv onClick={props.onClickMoveBack}>
          <ArrowBackIosOutlinedIcon style={{ color: "#fff" }} />
        </BackButtonDiv>
      </Wrpper>
      <div
        style={{
          paddingBottom: "40px",
        }}
      >
        {props.data && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.lodeMore}
            hasMore={true}
          >
            {props.data?.fetchUseditemQuestions.map((el: any) => (
              <CommentsListUIItems
                key={el._id}
                el={el}
                userInfo={props.userInfo}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}
