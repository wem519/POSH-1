import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SellerUI from "./Seller.presenter";
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "./Seller.queries";

export default function Seller() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.poshId },
  });

  const { data: items, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const onClickIsSoldOut = () => setIsSoldOut(true);
  const onClickIsSelling = () => setIsSoldOut(false);

  const lodeMore = () => {
    if (!items) return;
    if (!items?.fetchUseditems.length) return;
    const nextPage = Math.ceil(items?.fetchUseditems.length / 10) + 1;

    fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const prevPage = Math.ceil(items?.fetchUseditems.length / 10);
        if (prevPage >= nextPage)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <SellerUI
      data={data}
      items={items}
      lodeMore={lodeMore}
      isSoldOut={isSoldOut}
      onClickIsSoldOut={onClickIsSoldOut}
      onClickIsSelling={onClickIsSelling}
    />
  );
}
