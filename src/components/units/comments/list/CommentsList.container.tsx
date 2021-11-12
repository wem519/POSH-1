import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentsListUI from "./CommentsList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./CommentsList.queries";

// userInfo 대신 임시
const FETCH_USER_LOGGDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn{
      _id
    }
  }
`;

export default function CommentsList() {
  const router = useRouter();

  // fetchMore: 기존에 가져온 데이터 + 새로운 데이터
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.poshId) },
  });

  // userInfo 대신 임시
  const { data:userInfo } = useQuery(FETCH_USER_LOGGDIN)


// variables page: 총 댓글수 /10 -> 현재 페이지 계산 ex) 56개 댓글이 있으면 Math.ceil로 올림해서 6페이지로 계산됨.
  //      6페이지를 불러오고 추가로 페이지를 불러온다.
  const lodeMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (preve, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...preve.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };



  return <CommentsListUI data={data} lodeMore={lodeMore} userInfo={userInfo} />;
}
