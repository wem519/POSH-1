import {
  Wrapper,
  ContentsWrapper,
  ProfileWrapper,
  Profile,
  AccountWrapper,
  AccountInfo,
  Done,
  Error,
  Label,
  AccountInput,
  SubmitWrapper,
  Signup,
} from "./Signup.styles";

export default function SignupUI(props: any) {
  return (
    <Wrapper>
      <ContentsWrapper>
        <form onSubmit={props.handleSubmit(props.onClickSignup)}>
          <div>
            <ProfileWrapper>
              <Profile>P</Profile>
            </ProfileWrapper>
            <AccountWrapper>
              <AccountInfo>
                <Label>이메일*</Label>
                {props.formState.errors.email?.message ? (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="text"
                      placeholder="이메일을 입력해주세요"
                      {...props.register("email")}
                    ></AccountInput>
                    <Error>{props.formState.errors.email?.message}</Error>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="text"
                      placeholder="이메일을 입력해주세요"
                      {...props.register("email")}
                    ></AccountInput>
                    <Done />
                    <Error>{props.formState.errors.email?.message}</Error>
                  </div>
                )}
              </AccountInfo>
              <AccountInfo>
                <Label>아이디*</Label>
                {props.formState.errors.name?.message ? (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="text"
                      placeholder="아이디를 입력해주세요"
                      {...props.register("name")}
                    ></AccountInput>
                    <Error>{props.formState.errors.name?.message}</Error>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="text"
                      placeholder="아이디를 입력해주세요"
                      {...props.register("name")}
                    ></AccountInput>
                    <Done />
                    <Error>{props.formState.errors.name?.message}</Error>
                  </div>
                )}
              </AccountInfo>
              <AccountInfo>
                <Label>비밀번호*</Label>
                {!props.register && (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...props.register("password")}
                    ></AccountInput>
                    <Error>{props.formState.errors.password?.message}</Error>
                  </div>
                )}
                {props.formState.errors.password?.message ? (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...props.register("password")}
                    ></AccountInput>
                    <Error>{props.formState.errors.password?.message}</Error>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...props.register("password")}
                    ></AccountInput>
                    <Done />
                    <Error>{props.formState.errors.password?.message}</Error>
                  </div>
                )}
              </AccountInfo>
              <AccountInfo>
                <Label>비밀번호 확인*</Label>
                {props.formState.errors.checkPassword?.message ? (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...props.register("checkPassword")}
                    ></AccountInput>
                    <Error>
                      {props.formState.errors.checkPassword?.message}
                    </Error>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <AccountInput
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...props.register("checkPassword")}
                    ></AccountInput>
                    <Done />
                    <Error>
                      {props.formState.errors.checkPassword?.message}
                    </Error>
                  </div>
                )}
              </AccountInfo>
            </AccountWrapper>
            <SubmitWrapper>
              <Signup type="submit">시작하기</Signup>
            </SubmitWrapper>
          </div>
        </form>
      </ContentsWrapper>
    </Wrapper>
  );
}
