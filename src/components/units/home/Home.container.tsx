import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import HomeUI from "./Home.pregenter";
import { FETCH_USED_ITEMS } from "./Home.queries";
import _ from "lodash";

export default function Home() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
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

  return (
    <HomeUI
      data={data}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  );
}
