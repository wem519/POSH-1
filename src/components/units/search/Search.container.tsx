import SearchUI from "./Search.presenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./Search.queries";

import _ from "lodash";

export default function Search() {
  const [search, setSearch] = useState("");
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const getDebunce = _.debounce((data) => {
    setSearch(data);
  }, 1000);

  const onChangeSearch = (e: any) => {
    getDebunce(e.target.value);
  };

  const onClickSearch = () => {
    refetch({ search: search });
  };
  const lodeMore = () => {
    if (!data) return;
    if (!data.fetchUseditems.length) return;
    const nextPage = Math.ceil(data?.fetchUseditems.length / 10) + 1;

    fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (prev, { fetchMoreResult }: any) => {
        const prevPage = Math.ceil(prev?.fetchUseditems.length / 10);
        if (prevPage >= nextPage)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <SearchUI
      data={data}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      lodeMore={lodeMore}
    />
  );
}
