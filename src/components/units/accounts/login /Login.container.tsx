import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LoginUI from "./Login.presenter";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event: any) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
  }
  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    router.push("../../");
    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
  }
  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
