import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../../../src/components/units/products/write/ProductWrite.container";
import { FETCH_USEDITEM } from "../../../../../src/components/units/products/detail/ProductDetail.queries";

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.poshId,
    },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
