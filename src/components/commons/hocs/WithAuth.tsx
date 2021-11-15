import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const WithAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("Posh에 입장해 주세요");
      router.push("/posh/accounts/login");
    }
  }, [accessToken]);
  return <Component {...props} />;
};
