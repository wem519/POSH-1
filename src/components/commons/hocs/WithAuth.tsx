import { useRouter } from "next/router";
import { useEffect } from "react";
// import { GlobalContext } from "../../../../pages/_app";
// import { useQuery } from "@apollo/client";
// import { FETCH_USER_LOGGED_IN } from "../../units/accounts/login /Login.queries";

export const WithAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  // const { accessToken, userInfo }: any = useContext(GlobalContext);

  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // refreshToken 만 하면, 로그인안된 유저도 localStorage에 refreshToken: true 가 남아있을 때
  // 접근가능해서 안되고,
  // fetchUserLoggedIn 데이터로 한번 더 거르면, 데이터를 받아오는 속도때문에 항상 실행됨
  // 그런데 생각해보니 애초에 한번 로그인하면 로그아웃하지 않는 이상 refreshToken이 살아있으면 계속 자동 로그인됨
  // 이건 백엔드 잘못. 우린 이대로 간다. 로그아웃 생활화하자.
  // ==> 우려했던 상황 발생, 다시 살린다.
  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("Posh에 입장해 주세요");
      router.push("/posh/accounts/login");
    }
    if (!sessionStorage.getItem("isLogin")) {
      alert("Posh에 입장해 주세요");
      router.push("/posh/accounts/login");
    }
  }, []);
  return <Component {...props} />;
};
