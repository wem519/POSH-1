import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "../../units/accounts/login /Login.queries";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken") || !data) {
      alert("Posh에 입장해 주세요");
      router.push("/posh/accounts/login");
    }
  }, [accessToken, data]);
  return <Component {...props} />;
};
