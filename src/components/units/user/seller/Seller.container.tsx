import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import SellerUI from "./Seller.presenter"
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "./Seller.queries";

export default function Seller() {
  const router = useRouter()
  const { data } = useQuery(FETCH_USED_ITEM,
    { variables: { useditemId: router.query.poshId } }); 
  const { data:items, fetchMore } = useQuery(FETCH_USED_ITEMS)
  
  const lodeMore = () => {
    fetchMore({
      variables: {
        page: Math.ceil(items?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditem: [
            ...prev.items.fetchUseditems,
            ...fetchMoreResult.items.fetchUseditems,
          ],
        };
      },
    });
  };

  return <SellerUI data={data} items={items} lodeMore={lodeMore} />;
}
