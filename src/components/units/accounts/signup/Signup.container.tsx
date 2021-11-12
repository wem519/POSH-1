import SignupUI from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("필수 입력사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("필수 입력사항입니다."),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),

  name: yup
    .string()
    .min(1, "최소 한자리 이상을 입력해주세요.")
    .required("필수 입력사항입니다."),
});

export default function Signup() {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickSignup(data: any) {
    createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });

    console.log("crateUser", data);
    alert("Welcome Posh");
    router.push("./login");
  }
  return (
    <SignupUI
      handleSubmit={handleSubmit}
      register={register}
      onClickSignup={onClickSignup}
      formState={formState}
    />
  );
}
