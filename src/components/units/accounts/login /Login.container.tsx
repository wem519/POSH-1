import { useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER, UPDATE_USER, FETCH_USER_LOGGED_IN } from "./Login.queries";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LoginUI from "./Login.presenter";

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event: any) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    if (email === "") {
      setEmailError("필수입력사항입니다.");
    }
    if (password === "") {
      setPasswordError("필수입력사항입니다.");
    }
    if (
      /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(email) === false &&
      email !== ""
    ) {
      setEmailError("이메일 형식이 적합하지 않습니다.");
    }
    if (passwordError.length > 1 && password.length < 4) {
      setPasswordError("비밀번호는 최소 4자리 이상입니다.");
    }
    if (email !== "" && password !== "") {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      setAccessToken(result.data?.loginUserExample.accessToken);
      localStorage.setItem("refreshToken", "true");

      router.push("../home/");
      // console.log(result.data?.loginUser.accessToken);

      alert("Posh Posh");
    }
  }

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
