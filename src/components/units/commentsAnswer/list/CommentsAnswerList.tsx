import { gql, useQuery } from "@apollo/client";
import CommentsAnswerListUIItem from "./CommentsAnswerList.presenteritem";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
        picture
        _id
      }
      createdAt
    }
  }
`;

// userInfo 대신 임시
const FETCH_USER_LOGGDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn{
      _id
    }
  }
`;

export default function CommentsAnswerTest(props) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.id },
  });
  const { data:userInfo } = useQuery(FETCH_USER_LOGGDIN);

  if (!data?.fetchUseditemQuestionAnswers.length) {
    return <></>;
  }
  const loadMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (preve, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...preve.fetchUseditemQuestionAnswers,
            ...fetchMoreResult?.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={true}>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <CommentsAnswerListUIItem key={el._id} el={el} id={props.id} userInfo={userInfo}/>
        ))}
      </InfiniteScroll>
    </>
  );
}
