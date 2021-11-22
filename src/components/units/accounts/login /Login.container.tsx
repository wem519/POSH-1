import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LoginUI from "./Login.presenter";

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken }: any = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event: any) {
    setEmail(event.target.value);
    if (/^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/.test(email) === false) {
      setEmailError("이메일 형식이 적합하지 않습니다");
    } else {
      setEmailError("");
    }
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (password.length < 3) {
      setPasswordError("비밀번호는 최소 4자리 이상입니다.");
    } else {
      setPasswordError("");
    }
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
      try {
        const result = await loginUser({
          variables: {
            email: email,
            password: password,
          },
        });

        setAccessToken(result.data?.loginUser.accessToken);
        localStorage.setItem("refreshToken", "true");
        sessionStorage.setItem("isLogin", "true");

        router.push("../home/");

        alert("💜 Welcome to Posh 💜");
      } catch (err: any) {
        console.log(err.message);
      }
    }
  }
  function onClickMoveSignup() {
    router.push("./signup");
  }

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveSignup={onClickMoveSignup}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
}
