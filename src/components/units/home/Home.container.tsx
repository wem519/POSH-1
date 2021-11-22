import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useContext } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import HomeUI from "./Home.presenter";
import { FETCH_USED_ITEMS } from "./Home.queries";
import {
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
} from "../accounts/login /Login.queries";
import { GlobalContext } from "../../../../pages/_app";

export default function Home() {
  const { search }: any = useContext(GlobalContext);
  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);
  const [updateUser] = useMutation(UPDATE_USER);

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    refetch({ search: search });
  }, [search]);

  const lodeMore = () => {
    if (!data) return;
    if (!data?.fetchUseditems.length) return;
    const nextPage = Math.ceil(data?.fetchUseditems.length / 10) + 1;

    fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
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

  return <HomeUI data={data} lodeMore={lodeMore} />;
}
