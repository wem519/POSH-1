import {
  Wrapper,
  ProfileWrapper,
  Profile,
  AccountWrapper,
  AccountInfo,
  Error,
  Label,
  AccountInput,
  SubmitWrapper,
  Signup,
} from "./Signup.styles";

export default function SignupUI(props: any) {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSignup)}>
        <div>
          <ProfileWrapper>
            <Profile>P</Profile>
          </ProfileWrapper>
          <AccountWrapper>
            <AccountInfo>
              <Label>이메일*</Label>
              <AccountInput
                type="text"
                placeholder="이메일을 입력해주세요"
                {...props.register("email")}
              ></AccountInput>
              <Error>{props.formState.errors.email?.message}</Error>
            </AccountInfo>
            <AccountInfo>
              <Label>아이디*</Label>
              <AccountInput
                type="text"
                placeholder="아이디를 입력해주세요"
                {...props.register("name")}
              ></AccountInput>
              <Error>{props.formState.errors.name?.message}</Error>
            </AccountInfo>
            <AccountInfo>
              <Label>비밀번호*</Label>
              <AccountInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props.register("password")}
              ></AccountInput>
              <Error>{props.formState.errors.password?.message}</Error>
            </AccountInfo>
            <AccountInfo>
              <Label>비밀번호 확인*</Label>
              <AccountInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...props.register("checkPassword")}
              ></AccountInput>
              <Error>{props.formState.errors.checkPassword?.message}</Error>
            </AccountInfo>
          </AccountWrapper>
          <SubmitWrapper>
            <Signup type="submit">시작하기</Signup>
          </SubmitWrapper>
        </div>
      </form>
    </Wrapper>
  );
}
