import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  FETCH_USEDITEM,
  FETCH_USEDITEM_QEUSTIONS,
  FETCH_USER_LOGGED_IN,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const [picked, setPicked] = useState(false);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
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

  function onClickToEdit() {
    router.push(`/posh/products/${router.query.poshId}/edit`);
  }

  // 상품삭제 ///////////////////////////////////////////////////////////////////
  function onClickDelete() {
    deleteUseditem({ variables: { useditemId: router.query.poshId } });
    router.push(`/posh/home`);
  }

  function onClickPick() {
    toggleUseditemPick({
      variables: { useditemId: router.query.poshId },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: {
            useditemId: router.query.poshId,
          },
        },
      ],
    });
  }

  return (
    <ProductDetailUI
      data={data}
      questions={questions}
      userInfo={userInfo}
      onClickToCommentPage={onClickToCommentPage}
      onClickToEdit={onClickToEdit}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      picked={picked}
    />
  );
}
