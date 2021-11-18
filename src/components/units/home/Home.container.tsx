import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import HomeUI from "./Home.presenter";
import { FETCH_USED_ITEMS } from "./Home.queries";
import _ from "lodash";
import {
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
} from "../accounts/login /Login.queries";
import { useEffect } from "react";

export default function Home() {
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);
  const [updateUser] = useMutation(UPDATE_USER);
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
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }:any) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  useEffect(() => {
    if (userInfo?.fetchUserLoggedIn && !userInfo?.fetchUserLoggedIn.picture) {
      console.log("회원", userInfo?.fetchUserLoggedIn.name);
      updateUser({
        variables: {
          updateUserInput: {
            picture:
              "https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png",
          },
        },
      });
    }
  }, [userInfo]);

  return (
    <HomeUI
      data={data}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      lodeMore={lodeMore}
    />
  );
}
