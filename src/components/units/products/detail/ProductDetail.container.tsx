import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USEDITEM,
  FETCH_USEDITEM_QEUSTIONS,
  FETCH_USER_LOGGED_IN,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.poshId,
    },
  });

  const { data: questions } = useQuery(FETCH_USEDITEM_QEUSTIONS, {
    variables: {
      useditemId: router.query.poshId,
    },
  });

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickToCommentPage() {
    router.push(`/posh/products/${router.query.poshId}/comment`);
  }

  return (
    <ProductDetailUI
      data={data}
      questions={questions}
      userInfo={userInfo}
      onClickToCommentPage={onClickToCommentPage}
    />
  );
}
